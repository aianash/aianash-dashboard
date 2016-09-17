import React, { PropTypes } from 'react'
import styles from 'css/main'

const cx = require('classnames/bind').bind(styles)

//
const Widget = ({className, children}) => {
  let clazz = cx('widget')
  if(className) clazz = clazz + ' ' + className
  return (
    <div className={clazz}>{children}</div>
  )
};

Widget.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

//
const WidgetHeading = ({title, subtitle, children}) => {
  return (
    <div className={cx('widget-heading')}>
        {title && <h2 className={cx('title')}>{title}</h2>}
        {subtitle && <p className={cx('subtitle')}>{subtitle}</p>}
        {children && children}
    </div>
  )
};

WidgetHeading.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  children: PropTypes.node
}


//
const WidgetContent = ({children}) => {
  return (
    <div className={cx('widget-content')}>
      {children}
    </div>
  )
};

WidgetContent.propTypes = {
  children: PropTypes.node
}

export { Widget, WidgetHeading, WidgetContent }