import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';
import {
  Sidebar,
  Dash
} from 'components/dashboard';

const cx = classNames.bind(styles);

//
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
      <div className={cx("dashboard")}>
        <div className={cx("main")}>
          <Sidebar/>
          <Dash children={this.props.children}/>
        </div>
      </div>
    )
  }
}