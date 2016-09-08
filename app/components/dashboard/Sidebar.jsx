import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';
import Logo from 'components/Logo';

const cx = classNames.bind(styles);

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={cx("sidebar")}>
        <nav className={cx("navbar")}>
          <div className={cx("container-fluid")}>
            <div className={cx("navbar-header")}>
              <Logo/>
            </div>
          </div>
        </nav>
        <a href="/dashboard/behavior" className={cx("sb-link", "selected")}>Behavior</a>
        <a href="/dashboard/predict" className={cx("sb-link")}>Predict</a>
        <a href="/dashboard/abtest" className={cx("sb-link")}>A/B Test</a>
      </div>
    )
  }
}