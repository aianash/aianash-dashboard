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
const Action = ({action, onFork}) => {
  return (
    <Column size='md-3' key={action.name}>
      <div onClick={onFork}>
        <h4>{_.startCase(action.name)}</h4>
        <ul className={cx('list-unstyled')}>
          {_.map(action.props, (v, k) =>
            <li key={k}>{_.startCase(k)} [{mk(v)}]</li>
          )}
        </ul>
      </div>
    </Column>)
}

Action.propTypes = {
  action: PropTypes.object.isRequired,
  onFork: PropTypes.func
}

//
const Fork = ({fork}) => {
  return (
    <Widget>
      <WidgetContent>
        <Row column='md-12'>
          {_.map(fork.timeline, (action, idx) => <Action key={idx} action={action}/>)}
        </Row>
      </WidgetContent>
    </Widget>
  )
}

Fork.propTypes = {
  fork: PropTypes.object.isRequired
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
            <Row column='md-12'>
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