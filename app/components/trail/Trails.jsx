import React, { Component, PropTypes } from 'react'
import styles from 'css/main'
import _ from 'lodash'
import {
  Row,
  Column,
  Heading,
  Widget,
  WidgetHeading,
  WidgetContent,
  Doughnut,
  RadarChart,
  LineChart } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

function mk(v) {
  return _.map(v, v => <span key={v}> {_.startCase(v)} </span>)
}

//
class Action extends Component {
  constructor(props) {
    super(props)
    this.fork = this.fork.bind(this)
    this.arrowOrSeparator = this.arrowOrSeparator.bind(this)
  }

  static propTypes = {
    action: PropTypes.object.isRequired,
    diverged: PropTypes.bool,
    color: PropTypes.object.isRequired,
    onFork: PropTypes.func
  }

  state = {
    clicked: false
  }

  fork(event) {
    if(this.state.clicked) {
      return
    }
    if(this.props.onFork(event))
      this.setState({clicked: true})
  }

  arrowOrSeparator(action) {
    if(action.diverging)
      return <div className={cx('separator')}></div>
    else
      return <i className={cx('icon-arrow_forward')}></i>
  }

  render() {
    const {action, diverged, color, onFork} = this.props
    const {clicked} = this.state
    const boxcolor = !_.isEmpty(color) ? {backgroundColor: color.getRGBA(0.1)} : {}

    return (
      <Column className={cx('trail-action', {'no-click' : clicked, 'dashed-border': !!action.diverging, 'diverged': diverged})} size='md-3' key={action.name}>
        <div onClick={this.fork} style={boxcolor}>
          {this.arrowOrSeparator(action)}
          <div className={cx('action-stats-plot')}>
            <div className={cx('new-users')} style={{height: action.new.percent + '%'}}></div>
            <div className={cx('dropped-users')} style={{height: action.drop.percent + '%'}}></div>
          </div>
          <div className={cx('action-info')}>
            <h4>{_.startCase(action.name)}</h4>
            <ul className={cx('list-unstyled')}>
              {_.map(action.props, (v, k) =>
                <li key={k}><span className={cx('label label-info')}>{_.startCase(k)}</span>&nbsp;&nbsp;{_.startCase(v)}</li>
              )}
            </ul>
            <div className={cx('action-stats')}>
              {action.new.count} <span className={cx('label label-success')}>New</span>&nbsp;&nbsp;
              {action.drop.count} <span className={cx('label label-danger')}>Drop</span>
            </div>
          </div>
        </div>
      </Column>)
  }
}

//
class Fork extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    fork: PropTypes.object.isRequired,
    color: PropTypes.object.isRequired
  }

  render() {
    const {fork, color} = this.props
    let diverged = false
    const timeline = (fork.timeline || []).slice().reverse()

    return (
      <Widget>
        <WidgetContent>
          <div className={cx('diverged-from')}>
            Diverged From <span>{_.startCase(fork.divergedFrom)}</span>
          </div>
          <Row className={cx('fork')}>
            {_.map(timeline, (action, idx) => {
              const boxcolor = diverged ? color : {}
              const obj = <Action key={idx} action={action} color={boxcolor} diverged={diverged}/>
              if(action.diverging) {
                diverged = true
              }
              return obj
            })}
          </Row>
        </WidgetContent>
      </Widget>
    )
  }
}

//
export default class Trails extends Component {
  constructor(props) {
    super(props)
    this.onFork = this.onFork.bind(this)
  }

  static propTypes = {
    trail: PropTypes.object.isRequired,
    forks: PropTypes.object.isRequired,
    fork: PropTypes.func.isRequired,
    colors: PropTypes.object.isRequired
  }

  onFork(action, fork, event) {
    if(fork) {
      this.props.fork(action)
      return true
    }
    return false
    event.preventDefault()
  }

  render() {
    const {trail, forks} = this.props
    const colors = this.props.colors || {}

    const timeline = (trail.timeline || []).slice().reverse()
    return (
      <div>
        <Widget>
          <WidgetContent>
            <Row className={cx('trail')}>
              {_.map(timeline , (action, idx) => {
                const fork = (idx == 0 || idx >= timeline.length - 1)
                return <Action key={idx} action={action} color={colors[action.name] || {}} onFork={this.onFork.bind(this, action, !fork)}/>
              })}
            </Row>
          </WidgetContent>
        </Widget>
        {_.map(forks, (fork, fid) => <Fork key={fid} color={colors[fork.divergedFrom]} fork={fork}/>)}
      </div>
    )
  }
}