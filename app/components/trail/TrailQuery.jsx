import React, { Component, PropTypes } from 'react'
import styles from 'css/main'
import _ from 'lodash'
import { Container, Row, Column, Separator } from 'components/commons'
import { Widget, WidgetContent } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

export default class TrailQuery extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    onShowTrail: PropTypes.func.isRequired,
    loadEventProperties: PropTypes.func.isRequired
  }

  state = {
    query: { 'play-video': {} }
  }

  render() {
    const {onShowTrail} = this.props
    const {query} = this.state
    return (
      <Widget>
        <WidgetContent>

          <button onClick={_.bind(onShowTrail, null, query)}>Show</button>
        </WidgetContent>
      </Widget>
    )
  }
}