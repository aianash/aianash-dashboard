import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';
import {logo} from 'images';

const cx = classNames.bind(styles);

const Logo = () => (
  <a href="/" className={cx("aian-logo")} style={{backgroundImage: 'url(' + logo + ')'}}></a>
)

export default Logo;