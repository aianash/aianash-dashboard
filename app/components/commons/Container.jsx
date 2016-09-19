import React, { PropTypes } from 'react'
import styles from 'css/main'

const cx = require('classnames/bind').bind(styles)

const Container = ({className, fluid, children}) => {
  const clazz = cx(fluid ? 'container-fluid' : 'container') + ' ' + className
  return (
    <div className={clazz}>{children}</div>
  )
};

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node
}

export default Container