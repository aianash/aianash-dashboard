import React, { PropTypes, Component } from 'react'
import styles from 'css/main'
import { Row, Column } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

export default class PageSeq extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    pageSeq: PropTypes.object.isRequired
  }

  render() {
    return <div>{JSON.stringify(this.props.pageSeq)}</div>
  }
}