import React, { PropTypes, Component } from 'react'
import _ from 'lodash'
import styles from 'css/main'
import {
  Query,
  Row,
  Column,
  Widget,
  WidgetHeading,
  CountWidget,
  WidgetContent } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

const InlineStat = ({className, title, subtitle, compared, count}) => {
  let clazz = cx('inline-stat')
  if(className) clazz = clazz + ' ' + className
  const iconcss = {
    'icon-arrow-up': (compared[0] === 'increase'),
    'icon-arrow-down': (compared[0] === 'decrease')
  }
  const valuecss = {
    'text-danger': (compared[0] === 'decrease'),
    'text-success': (compared[0] === 'increase'),
  }
  return (
    <div className={clazz}>
      <h2>{count}</h2>
      <div>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p><i className={cx(iconcss)}/> <span className={cx(valuecss)}>{compared[1]}</span> {compared[2]}</p>
      </div>
    </div>
  )
}

InlineStat.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  compared: PropTypes.array.isRequired,
  count: PropTypes.string
}

export { InlineStat }