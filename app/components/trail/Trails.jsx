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
    onFork: PropTypes.func
  }

  state = {
    clicked: false
  }

  fork(event) {
    if(this.state.clicked) {
      return
    } else {
      this.setState({clicked: true})
    }
    this.props.onFork(event)
  }

  render() {
    const {action, diverged, onFork} = this.props
    const {clicked} = this.state

    return (
      <Column className={cx('trail-action', {'no-click' : clicked, 'diverged': diverged})} size='md-2' key={action.name}>
        <i className={cx('icon-arrow_back')}></i>
        <div onClick={this.fork}>
          <div className={cx('trail-action-stats')}>
            {action.new} <span className={cx('label label-success')}>New</span>&nbsp;&nbsp;
            {action.drop} <span className={cx('label label-danger')}>Dropped</span>
          </div>
          <div>
            <h4>{_.startCase(action.name)}</h4>
            <ul className={cx('list-unstyled')}>
              {_.map(action.props, (v, k) =>
                <li key={k}>{_.startCase(k)}: {_.startCase(v)}</li>
              )}
            </ul>
          </div>
          {(action.divergedFrom) ? <div className={cx('diverged-info')}>Diverged from <h4>{_.startCase(action.divergedFrom)}</h4></div> : ""}
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
    fork: PropTypes.object.isRequired
  }

  render() {
    const {fork} = this.props
    let diverged = true
    return (
      <Widget>
        <WidgetContent>
          <div className={cx('diverged-from')}>
            Diverged From <span>{_.startCase(fork.divergedFrom)}</span>
          </div>
          <Row className={cx('fork')}>
            {_.map(fork.timeline, (action, idx) => {
              const obj = <Action key={idx} action={action} diverged={diverged}/>
              if("divergedFrom" in action) {
                diverged = false
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
    fork: PropTypes.func.isRequired
  }

  onFork(action, event) {
    this.props.fork(action)
    event.preventDefault()
  }

  render() {
    const {trail, forks} = this.props

    return (
      <div>
        <Widget>
          <WidgetContent>
            <Row className={cx('trail')}>
              {_.map(trail.timeline, (action, idx) =>
                <Action key={idx} action={action} onFork={this.onFork.bind(this, action)}/>
              )}
            </Row>
          </WidgetContent>
        </Widget>
        {_.map(forks, (fork, fid) => <Fork key={fid} fork={fork}/>)}
      </div>
    )
  }
}