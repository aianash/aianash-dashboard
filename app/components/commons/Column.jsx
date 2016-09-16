import React, { PropTypes } from 'react'
import styles from 'css/main'

const cx = require('classnames/bind').bind(styles)

const Column = ({size, children}) => {
  return (
    <div className={cx(`col-${size}`)}>{children}</div>
  )
};

Column.propTypes = {
  size: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Column