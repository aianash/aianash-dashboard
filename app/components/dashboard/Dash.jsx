import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';
import Logo from 'components/Logo';
// import { Header, Behavior } from 'components/dashboard';

const cx = classNames.bind(styles);

//
export default class Dash extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
      <div className={cx("dash")}>
        {this.props.children}
      </div>
    )
  }
}