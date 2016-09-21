import React, { PropTypes } from 'react'
import styles from 'css/main'

const cx = require('classnames/bind').bind(styles)

//
const Widget = ({className, children, ...others}) => {
  let clazz = cx('widget')
  if(className) clazz = clazz + ' ' + className
  return (
    <div className={clazz} {...others}>{children}</div>
  )
};

Widget.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

//
const WidgetHeading = ({title, subtitle, children, compressed}) => {
  return (
    <div className={cx('widget-heading', {compressed})}>
      {title && <h2 className={cx('title')}>{title}</h2>}
      {subtitle && <p className={cx('subtitle')}>{subtitle}</p>}
      {children && children}
    </div>
  )
};

WidgetHeading.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  children: PropTypes.node,
  compressed: PropTypes.bool
}


//
const WidgetContent = ({className, children}) => {
  const clazz = cx('widget-content') + ' ' + className
  return (
    <div className={clazz}>
      {children}
    </div>
  )
};

WidgetContent.propTypes = {
  children: PropTypes.node
}

const CountWidget = ({className, title, subtitle, count}) => {
  let clazz = cx('widget-counter')
  if(className) clazz = clazz + ' ' + className
  const iconcss = {
    'icon-arrow-up': (subtitle[0] === 'increase'),
    'icon-arrow-down': (subtitle[0] === 'decrease')
  }
  const valuecss = {
    'text-danger': (subtitle[0] === 'decrease'),
    'text-success': (subtitle[0] === 'increase'),
  }
  return (
    <Widget className={clazz}>
      <h2>{count}</h2>
      <h3>{title}</h3>
      <p><i className={cx(iconcss)}/> <span className={cx(valuecss)}>{subtitle[1]}</span> {subtitle[2]}</p>
    </Widget>
  )
}

CountWidget.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.array.isRequired,
  count: PropTypes.string
}

export { Widget, WidgetHeading, WidgetContent, CountWidget }