import React, { PropTypes } from 'react'
import styles from 'css/main'

const cx = require('classnames/bind').bind(styles)

const Container = ({fluid, children}) => {
  const clazz = fluid ? 'container-fluid' : 'container'
  return (
    <div className={cx(clazz)}>{children}</div>
  )
};

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node
}

export default Container