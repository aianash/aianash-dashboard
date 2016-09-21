import React, { PropTypes } from 'react'
import styles from 'css/main'
import { Row } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

const Separator = (props) => {
  const {title} = props
  return (
    <Row className={cx('seperator')} column='md-12'>
      <h2>{title}</h2>
    </Row>)
}

Separator.propTypes = {
  title: PropTypes.string.isRequired
}

export default Separator