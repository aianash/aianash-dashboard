import React, {Component, PropTypes} from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

const cx = classNames.bind(styles);

const PageViews = () => (
  <div className={cx("widget")}>
    <div className={cx("line")}>
      <div className={cx("title")}>Previous Pages</div>
    </div>
    <ul className={cx("list-unstyled", "links")}>
      <li><a href="#">/dashboard</a></li>
      <li><a href="#">/dashboard/analyze</a></li>
    </ul>
    <div className={cx("line")}>
      <div className={cx("subtitle")}>Top previous pages for current behavior</div>
    </div>
  </div>
)

const New = () => (
  <div className={cx("widget")}>
    <div className={cx("line")}>
      <div className={cx("title")}>Next Pages</div>
    </div>
    <ul className={cx("list-unstyled", "links")}>
      <li><a href="#">/dashboard</a></li>
      <li><a href="#">/dashboard/predict</a></li>
    </ul>
    <div className={cx("line")}>
      <div className={cx("subtitle")}>Top next pages for current behavior</div>
    </div>
  </div>
)

const Returned = () => (
  <div className={cx("widget")}>
    <div className={cx("line")}>
      <div className={cx("mtitle")}>New</div>
      <div className={cx("mtitle")}>Returned</div>
      <div className={cx("mtitle")}>Total</div>
    </div>
    <div className={cx("mval")}>10,427</div>
    <div className={cx("mval")}>9,427</div>
    <div className={cx("mval")}>19,427</div>
    <div className={cx("line")}>
      <div className={cx("subtitle")}>visitors per month</div>
    </div>
  </div>
)

const Registered = () => (
  <div className={cx("widget")}>
    <div className={cx("line")}>
      <div className={cx("title")}>Registered</div>
    </div>
    <div className={cx("val")}>29,427</div>
    <div className={cx("line")}>
      <div className={cx("subtitle")}>total registered users</div>
    </div>
  </div>
)

export default class PageStats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={cx("row", "page-stats")}>
          <div className={cx("col-md-3")}><PageViews/></div>
          <div className={cx("col-md-3")}><New/></div>
          <div className={cx("col-md-3")}><Returned/></div>
          <div className={cx("col-md-3")}><Registered/></div>
        </div>
    )
  }
}
