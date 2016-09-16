import React, { PropTypes, Component } from 'react'
import styles from 'css/main'
import { Row, Column } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

export default class Story extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    story: PropTypes.object.isRequired
  }

  render() {
    return <div>{JSON.stringify(this.props.story)}</div>
  }
}