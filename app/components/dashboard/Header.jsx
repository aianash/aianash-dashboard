import React, { PropTypes, Component } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

import { PageStats } from 'components/dashboard';

const cx = classNames.bind(styles);

const Droppath = ({paths}) => (
  <div className={cx("dropdown")}>
    <button className={cx("btn", "dropdown-toggle")} type="button" data-toggle="dropdown">
      {paths[0]} <span className={cx("caret")}></span>
    </button>
  </div>
)


export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    links : [
      ['dashboard', 'home'],
      ['behavior', 'predict', 'abtest']
    ]
  }

  render() {
    return (
      <div className={cx("row")}>
        <div className={cx("col-md-12", "header")}>
          <ol className={cx("breadcrumb")}>
            <li><a href="#">aianash.com</a></li>
            <li><Droppath paths={this.state.links[0]}/></li>
            <li><Droppath paths={this.state.links[1]}/></li>
          </ol>
          <PageStats/>
        </div>
      </div>
    );
  }
}