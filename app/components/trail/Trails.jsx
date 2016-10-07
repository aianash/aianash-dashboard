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
  }

  static propTypes = {
    action: PropTypes.object.isRequired,
    diverged: PropTypes.bool,
    isLast: PropTypes.bool,
    onFork: PropTypes.func
  }

  state = {
    clicked: false
  }

  fork(event) {
    if(this.state.clicked || this.props.isLast) {
      return
    } else {
      this.setState({clicked: true})
    }
    this.props.onFork(event)
  }

  render() {
    const {action, diverged, isLast, onFork} = this.props
    const {clicked} = this.state
    // const newstyle = {height: action.new.percent + '%'}
    // const dropstyle = {height: action.drop.percent + '%'}
    // const newusers = action.new * 100 / (action.new + action.drop)
    // const dropusers = action.drop * 100 / (action.new + action.drop)

    return (
      <Column className={cx('trail-action', {'no-click' : clicked, 'diverged': diverged})} size='md-2' key={action.name}>
        <i className={cx('icon-arrow_forward')}></i>
        <div onClick={this.fork}>
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
          // {(action.divergedFrom) ? <div className={cx('diverged-info')}>Diverged from <h4>{_.startCase(action.divergedFrom)}</h4></div> : ""}

//
class Fork extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    fork: PropTypes.object.isRequired
  }

  render() {
    const {fork} = this.props
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
              if("divergedFrom" in action) {
                diverged = true
              }
              return <Action key={idx} action={action} diverged={diverged}/>
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
    fork: PropTypes.func.isRequired
  }

  onFork(action, event) {
    this.props.fork(action)
    event.preventDefault()
  }

  render() {
    const {trail, forks} = this.props
    const timeline = (trail.timeline || []).slice().reverse()
    return (
      <div>
        <Widget>
          <WidgetContent>
            <Row className={cx('trail')}>
              {_.map(timeline , (action, idx) =>
                <Action key={idx} action={action} isLast={(idx >= (timeline.length - 1))} onFork={this.onFork.bind(this, action)}/>
              )}
            </Row>
          </WidgetContent>
        </Widget>
        {_.map(forks, (fork, fid) => <Fork key={fid} fork={fork}/>)}
      </div>
    )
  }
}