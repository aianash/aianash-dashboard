import React, { Component } from 'react'
import classNames from 'classnames/bind'
import styles from 'css/main'
import { Logo } from 'components/commons'

const cx = classNames.bind(styles)

export default class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const currloc = location.pathname.split('/')[2]

    return (
      <div className={cx('sidebar')}>
        <nav className={cx('navbar')}>
          <div className={cx('container-fluid')}>
            <div className={cx('navbar-header')}>
              <Logo/>
            </div>
          </div>
        </nav>
        <a href='/dashboard/trail' className={cx('sb-link', {'selected': currloc == 'trail'})}>Trail</a>
        <a href='/dashboard/behavior' className={cx('sb-link', {'selected': currloc == 'behavior'})}>Behavior</a>
        <a href='/dashboard/predict' className={cx('sb-link', {'selected': currloc == 'predict'})}>Predict</a>
        <a href='/dashboard/abtest' className={cx('sb-link', {'selected': currloc == 'abtest'})}>A/B Test</a>
      </div>
    )
  }
}