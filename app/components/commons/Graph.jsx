import React, {Component, PropTypes} from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

const cx = classNames.bind(styles);
const tostyle = (str) => {
  var style = {};
  str.split(";").forEach((prop) => {
    const pv = prop.split(":");
    var key = pv[0].trim().replace(/-./, function(_) { return _.replace('-', '').toUpperCase(); });
    style[key] = pv[1].trim();
  })
  return style;
}

// REMOVE
var arr = []
const cp = (tr) => {
  arr.push(tr.split(",")[1].replace(')', ''));
  return tr;
}

const Graph = ({height, width}) => {
  const set = { height: height};
  return (
  <div className={cx("col-md-7", "graph-view")} style={set}></div>)
}

Graph.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
}

export default Graph;