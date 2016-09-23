import React, { PropTypes } from 'react'
import styles from 'css/main'
import { Column } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

const Row = (props) => {
  const {column, children, className, ...other} = props
  return (
    <div {...other} className={cx('row') + (className ? ' ' + className : '')}>
      {column ? <Column size={column}>{children}</Column> : children}
    </div>
  )
};

Row.propTypes = {
  column: PropTypes.string,
  children: PropTypes.node
}

export default Row