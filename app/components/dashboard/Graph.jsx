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
  <div className={cx("col-md-7", "graph-view")} style={set}>
  <svg width={width} height={height}>
    <g transform="translate(0,0)">
        <g className={cx("g-axis")}>
            <g transform="translate(660,0)" style={tostyle("opacity: 1")}>
                <line className={cx("g-minor")} y2="2120" x2="0"></line>
            </g>
            <g transform="translate(594,0)" style={tostyle("opacity: 1")}>
                <line className={cx("g-minor")} y2="2120" x2="0"></line>
            </g>
            <g transform="translate(528,0)" style={tostyle("opacity: 1")}>
                <line className={cx("g-minor")} y2="2120" x2="0"></line>
            </g>
            <g transform="translate(461.99999999999994,0)" style={tostyle("opacity: 1")}>
                <line className={cx("g-minor")} y2="2120" x2="0"></line>
            </g>
            <g transform="translate(396,0)" style={tostyle("opacity: 1")}>
                <line className={cx("g-minor")} y2="2120" x2="0"></line>
            </g>
            <g transform="translate(330,0)" style={tostyle("opacity: 1")}>
                <line className={cx("g-major")} y2="2120" x2="0"></line>
            </g>
            <g transform="translate(264,0)" style={tostyle("opacity: 1")}>
                <line className={cx("g-minor")} y2="2120" x2="0"></line>
            </g>
            <g transform="translate(198,0)" style={tostyle("opacity: 1")}>
                <line className={cx("g-minor")} y2="2120" x2="0"></line>
            </g>
            <g transform="translate(132,0)" style={tostyle("opacity: 1")}>
                <line className={cx("g-minor")} y2="2120" x2="0"></line>
            </g>
            <g transform="translate(65.99999999999999,0)" style={tostyle("opacity: 1")}>
                <line className={cx("g-minor")} y2="2120" x2="0"></line>
            </g>
            <g transform="translate(0,0)" style={tostyle("opacity: 1")}>
                <line className={cx("g-minor")} y2="2120" x2="0"></line>
            </g>
            <path className={cx("g-domain")} d="M0,-6V0H660V-6"></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M408.54,2070C408.54,2012 477.90599999999995,2012 477.90599999999995,1954" style={tostyle("stroke-width: 18.4015")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M368.87399999999997,2070C368.87399999999997,2012 417.0540000000001,2012 417.0540000000001,1954" style={tostyle("stroke-width: 13.0855")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M426.09599999999995,2070C426.09599999999995,2012 403.392,2012 403.392,1954" style={tostyle("stroke-width: 13.0855")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M395.34,2070C395.34,2012 456.91800000000006,2012 456.91800000000006,1954" style={tostyle("stroke-width: 11.0409")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M419.23199999999997,2070C419.23199999999997,2012 476.652,2012 476.652,1954" style={tostyle("stroke-width: 10.223")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M372.504,2070C372.504,2012 404.448,2012 404.448,1954" style={tostyle("stroke-width: 9.81413")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M405.702,2070C405.702,2012 405.76800000000003,2012 405.76800000000003,1954" style={tostyle("stroke-width: 8.17844")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M427.81200000000007,2070C427.81200000000007,2012 530.97,2012 530.97,1954" style={tostyle("stroke-width: 6.54275")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M387.81600000000003,2070C387.81600000000003,2012 455.07,2012 455.07,1954" style={tostyle("stroke-width: 6.54275")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M278.3880000000001,2070C278.3880000000001,2012 321.28800000000007,2012 321.28800000000007,1954" style={tostyle("stroke-width: 5.72491")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M442.99199999999996,2070C442.99199999999996,2012 463.32,2012 463.32,1954" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M70.488,2070C70.488,2012 106.72199999999997,2012 106.72199999999997,1954" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M476.78400000000005,2070C476.78400000000005,2012 486.684,2012 486.684,1954" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M415.53600000000006,2070C415.53600000000006,2012 442.26599999999996,2012 442.26599999999996,1954" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M404.0520000000001,2070C404.0520000000001,2012 380.15999999999997,2012 380.15999999999997,1954" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M331.848,2070C331.848,2012 334.026,2012 334.026,1954" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M135.10200000000003,2070C135.10200000000003,2012 216.87599999999998,2012 216.87599999999998,1954" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M515.8559999999999,2070C515.8559999999999,2012 451.50600000000003,2012 451.50600000000003,1954" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M396.13200000000006,2070C396.13200000000006,2012 425.964,2012 425.964,1954" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M406.09799999999996,2070C406.09799999999996,2012 462.5280000000001,2012 462.5280000000001,1954" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M393.624,2070C393.624,2012 385.902,2012 385.902,1954" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M320.49600000000004,2070C320.49600000000004,2012 196.746,2012 196.746,1954" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M407.8140000000001,2070C407.8140000000001,2012 511.236,2012 511.236,1954" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M249.87600000000003,2070C249.87600000000003,2012 286.17600000000004,2012 286.17600000000004,1954" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M582.582,2070C582.582,2012 536.118,2012 536.118,1954" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M390.5880000000001,2070C390.5880000000001,2012 397.716,2012 397.716,1954" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M192.19200000000004,2070C192.19200000000004,2012 107.11800000000008,2012 107.11800000000008,1954" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M470.6460000000001,2070C470.6460000000001,2012 459.888,2012 459.888,1954" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M582.78,2070C582.78,2012 534.732,2012 534.732,1954" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M472.626,2070C472.626,2012 399.3,2012 399.3,1954" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M543.048,2070C543.048,2012 605.484,2012 605.484,1954" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M447.87600000000003,2070C447.87600000000003,2012 522.1920000000001,2012 522.1920000000001,1954" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M474.14399999999995,2070C474.14399999999995,2012 542.982,2012 542.982,1954" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M403.32599999999996,2070C403.32599999999996,2012 435.79800000000006,2012 435.79800000000006,1954" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M440.22,2070C440.22,2012 475.794,2012 475.794,1954" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M342.144,2070C342.144,2012 439.032,2012 439.032,1954" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M611.028,2070C611.028,2012 485.95799999999997,2012 485.95799999999997,1954" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M534.6,2070C534.6,2012 477.774,2012 477.774,1954" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M457.512,2070C457.512,2012 424.11600000000004,2012 424.11600000000004,1954" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M584.364,2070C584.364,2012 440.748,2012 440.748,1954" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M481.14000000000004,2070C481.14000000000004,2012 435.204,2012 435.204,1954" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M355.542,2070C355.542,2012 399.10200000000003,2012 399.10200000000003,1954" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M499.092,2070C499.092,2012 463.056,2012 463.056,1954" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M615.2520000000001,2070C615.2520000000001,2012 622.71,2012 622.71,1954" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M340.362,2070C340.362,2012 328.548,2012 328.548,1954" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M291.456,2070C291.456,2012 420.882,2012 420.882,1954" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M329.538,2070C329.538,2012 389.99399999999997,2012 389.99399999999997,1954" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M304.656,2070C304.656,2012 383.85599999999994,2012 383.85599999999994,1954" style={tostyle("stroke-width: 3.27138")}></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M403.392,1934C403.392,1876 333.63000000000005,1876 333.63000000000005,1818" style={tostyle("stroke-width: 13.0855")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M476.652,1934C476.652,1876 373.29600000000005,1876 373.29600000000005,1818" style={tostyle("stroke-width: 10.223")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M321.28800000000007,1934C321.28800000000007,1876 302.14799999999997,1876 302.14799999999997,1818" style={tostyle("stroke-width: 5.72491")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M328.548,1934C328.548,1876 326.56800000000004,1876 326.56800000000004,1818" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M463.32,1934C463.32,1876 398.838,1876 398.838,1818" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M486.684,1934C486.684,1876 354.5520000000001,1876 354.5520000000001,1818" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M442.26599999999996,1934C442.26599999999996,1876 366.102,1876 366.102,1818" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M106.72199999999997,1934C106.72199999999997,1876 164.27400000000003,1876 164.27400000000003,1818" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M334.026,1934C334.026,1876 377.18999999999994,1876 377.18999999999994,1818" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M216.87599999999998,1934C216.87599999999998,1876 236.08200000000002,1876 236.08200000000002,1818" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M389.99399999999997,1934C389.99399999999997,1876 377.38800000000003,1876 377.38800000000003,1818" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M425.964,1934C425.964,1876 349.932,1876 349.932,1818" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M451.50600000000003,1934C451.50600000000003,1876 419.034,1876 419.034,1818" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M385.902,1934C385.902,1876 345.906,1876 345.906,1818" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M286.17600000000004,1934C286.17600000000004,1876 282.942,1876 282.942,1818" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M397.716,1934C397.716,1876 449.0640000000001,1876 449.0640000000001,1818" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M536.118,1934C536.118,1876 470.91,1876 470.91,1818" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M196.746,1934C196.746,1876 313.632,1876 313.632,1818" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M107.11800000000008,1934C107.11800000000008,1876 252.97799999999998,1876 252.97799999999998,1818" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M459.888,1934C459.888,1876 394.15200000000004,1876 394.15200000000004,1818" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M534.732,1934C534.732,1876 489.324,1876 489.324,1818" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M399.3,1934C399.3,1876 364.584,1876 364.584,1818" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M605.484,1934C605.484,1876 423.06,1876 423.06,1818" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M440.748,1934C440.748,1876 438.37200000000007,1876 438.37200000000007,1818" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M424.11600000000004,1934C424.11600000000004,1876 346.5,1876 346.5,1818" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M522.1920000000001,1934C522.1920000000001,1876 393.624,1876 393.624,1818" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M485.95799999999997,1934C485.95799999999997,1876 401.94,1876 401.94,1818" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M475.794,1934C475.794,1876 403.656,1876 403.656,1818" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M542.982,1934C542.982,1876 375.144,1876 375.144,1818" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M477.774,1934C477.774,1876 379.8960000000001,1876 379.8960000000001,1818" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M622.71,1934C622.71,1876 444.18,1876 444.18,1818" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M463.056,1934C463.056,1876 396.13200000000006,1876 396.13200000000006,1818" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M477.90599999999995,1934C477.90599999999995,1876 295.284,1876 295.284,1818" style={tostyle("stroke-width: 18.4015")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M417.0540000000001,1934C417.0540000000001,1876 314.688,1876 314.688,1818" style={tostyle("stroke-width: 13.0855")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M456.91800000000006,1934C456.91800000000006,1876 328.812,1876 328.812,1818" style={tostyle("stroke-width: 11.0409")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M404.448,1934C404.448,1876 316.8,1876 316.8,1818" style={tostyle("stroke-width: 9.81413")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M405.76800000000003,1934C405.76800000000003,1876 316.734,1876 316.734,1818" style={tostyle("stroke-width: 8.17844")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M455.07,1934C455.07,1876 193.578,1876 193.578,1818" style={tostyle("stroke-width: 6.54275")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M530.97,1934C530.97,1876 324.71999999999997,1876 324.71999999999997,1818" style={tostyle("stroke-width: 6.54275")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M380.15999999999997,1934C380.15999999999997,1876 320.628,1876 320.628,1818" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M420.882,1934C420.882,1876 185.922,1876 185.922,1818" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M462.5280000000001,1934C462.5280000000001,1876 282.34799999999996,1876 282.34799999999996,1818" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M511.236,1934C511.236,1876 280.764,1876 280.764,1818" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M383.85599999999994,1934C383.85599999999994,1876 293.964,1876 293.964,1818" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M435.79800000000006,1934C435.79800000000006,1876 325.11600000000004,1876 325.11600000000004,1818" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M439.032,1934C439.032,1876 150.084,1876 150.084,1818" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M435.204,1934C435.204,1876 314.6880000000001,1876 314.6880000000001,1818" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M399.10200000000003,1934C399.10200000000003,1876 319.242,1876 319.242,1818" style={tostyle("stroke-width: 1.22677")}></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M295.284,1798C295.284,1740 84.15,1740 84.15,1682" style={tostyle("stroke-width: 17.9926")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M314.688,1798C314.688,1740 130.54800000000003,1740 130.54800000000003,1682" style={tostyle("stroke-width: 12.4721")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M328.812,1798C328.812,1740 204.99599999999998,1740 204.99599999999998,1682" style={tostyle("stroke-width: 10.8364")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M316.8,1798C316.8,1740 152.92200000000003,1740 152.92200000000003,1682" style={tostyle("stroke-width: 10.0186")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M316.734,1798C316.734,1740 108.23999999999998,1740 108.23999999999998,1682" style={tostyle("stroke-width: 8.3829")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M324.71999999999997,1798C324.71999999999997,1740 120.45,1740 120.45,1682" style={tostyle("stroke-width: 6.74721")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M193.578,1798C193.578,1740 0,1740 0,1682" style={tostyle("stroke-width: 6.13383")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M302.14799999999997,1798C302.14799999999997,1740 248.82,1740 248.82,1682" style={tostyle("stroke-width: 5.52045")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M326.56800000000004,1798C326.56800000000004,1740 144.54000000000005,1740 144.54000000000005,1682" style={tostyle("stroke-width: 5.11152")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M320.628,1798C320.628,1740 146.78400000000002,1740 146.78400000000002,1682" style={tostyle("stroke-width: 4.29368")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M282.34799999999996,1798C282.34799999999996,1740 125.79600000000003,1740 125.79600000000003,1682" style={tostyle("stroke-width: 3.88476")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M280.764,1798C280.764,1740 94.24799999999999,1740 94.24799999999999,1682" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M293.964,1798C293.964,1740 93.192,1740 93.192,1682" style={tostyle("stroke-width: 3.06691")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M282.942,1798C282.942,1740 246.51,1740 246.51,1682" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M403.656,1798C403.656,1740 336.6,1740 336.6,1682" style={tostyle("stroke-width: 1.84015")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M325.11600000000004,1798C325.11600000000004,1740 204.73200000000006,1740 204.73200000000006,1682" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M329.604,1798C329.604,1740 0,1740 0,1682" style={tostyle("stroke-width: 1.43123")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M150.084,1798C150.084,1740 0,1740 0,1682" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M319.242,1798C319.242,1740 183.678,1740 183.678,1682" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M314.6880000000001,1798C314.6880000000001,1740 216.74400000000003,1740 216.74400000000003,1682" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M333.63000000000005,1798C333.63000000000005,1740 209.08800000000002,1740 209.08800000000002,1682" style={tostyle("stroke-width: 14.7212")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M373.29600000000005,1798C373.29600000000005,1740 159.19200000000006,1740 159.19200000000006,1682" style={tostyle("stroke-width: 10.4275")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M349.932,1798C349.932,1740 314.82000000000005,1740 314.82000000000005,1682" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M398.838,1798C398.838,1740 248.02800000000005,1740 248.02800000000005,1682" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M354.5520000000001,1798C354.5520000000001,1740 169.29,1740 169.29,1682" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M164.27400000000003,1798C164.27400000000003,1740 384.45,1740 384.45,1682" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M366.102,1798C366.102,1740 281.424,1740 281.424,1682" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M377.18999999999994,1798C377.18999999999994,1740 257.334,1740 257.334,1682" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M236.08200000000002,1798C236.08200000000002,1740 660,1740 660,1682" style={tostyle("stroke-width: 4.29368")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M185.922,1798C185.922,1740 419.89200000000005,1740 419.89200000000005,1682" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M419.034,1798C419.034,1740 171.864,1740 171.864,1682" style={tostyle("stroke-width: 3.88476")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M377.38800000000003,1798C377.38800000000003,1740 142.82399999999998,1740 142.82399999999998,1682" style={tostyle("stroke-width: 3.88476")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M345.906,1798C345.906,1740 167.63999999999996,1740 167.63999999999996,1682" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M449.0640000000001,1798C449.0640000000001,1740 254.1,1740 254.1,1682" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M313.632,1798C313.632,1740 447.414,1740 447.414,1682" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M252.97799999999998,1798C252.97799999999998,1740 660,1740 660,1682" style={tostyle("stroke-width: 3.06691")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M470.91,1798C470.91,1740 270.402,1740 270.402,1682" style={tostyle("stroke-width: 3.06691")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M394.15200000000004,1798C394.15200000000004,1740 177.67199999999997,1740 177.67199999999997,1682" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M364.584,1798C364.584,1740 146.78400000000002,1740 146.78400000000002,1682" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M489.324,1798C489.324,1740 295.548,1740 295.548,1682" style={tostyle("stroke-width: 2.24907")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M401.94,1798C401.94,1740 223.806,1740 223.806,1682" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M438.37200000000007,1798C438.37200000000007,1740 255.94799999999998,1740 255.94799999999998,1682" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M379.8960000000001,1798C379.8960000000001,1740 317.856,1740 317.856,1682" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M375.144,1798C375.144,1740 149.952,1740 149.952,1682" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M393.624,1798C393.624,1740 265.848,1740 265.848,1682" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M346.5,1798C346.5,1740 208.69199999999998,1740 208.69199999999998,1682" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M423.06,1798C423.06,1740 81.31199999999998,1740 81.31199999999998,1682" style={tostyle("stroke-width: 1.84015")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M342.40799999999996,1798C342.40799999999996,1740 119.98800000000001,1740 119.98800000000001,1682" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M396.13200000000006,1798C396.13200000000006,1740 243.408,1740 243.408,1682" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M444.18,1798C444.18,1740 114.77400000000003,1740 114.77400000000003,1682" style={tostyle("stroke-width: 1.22677")}></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M84.15,1662C84.15,1604 293.964,1604 293.964,1546" style={tostyle("stroke-width: 17.5836")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M130.54800000000003,1662C130.54800000000003,1604 306.438,1604 306.438,1546" style={tostyle("stroke-width: 11.8587")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M152.92200000000003,1662C152.92200000000003,1604 321.618,1604 321.618,1546" style={tostyle("stroke-width: 10.223")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M108.23999999999998,1662C108.23999999999998,1604 285.648,1604 285.648,1546" style={tostyle("stroke-width: 8.58736")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,1662C0,1604 131.20800000000003,1604 131.20800000000003,1546" style={tostyle("stroke-width: 5.72491")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M384.45,1662C384.45,1604 354.09,1604 354.09,1546" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M125.79600000000003,1662C125.79600000000003,1604 319.11,1604 319.11,1546" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M146.78400000000002,1662C146.78400000000002,1604 247.236,1604 247.236,1546" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M167.63999999999996,1662C167.63999999999996,1604 316.074,1604 316.074,1546" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M94.24799999999999,1662C94.24799999999999,1604 295.944,1604 295.944,1546" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M447.414,1662C447.414,1604 385.968,1604 385.968,1546" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M93.192,1662C93.192,1604 271.788,1604 271.788,1546" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M336.6,1662C336.6,1604 460.416,1604 460.416,1546" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,1662C0,1604 117.15000000000003,1604 117.15000000000003,1546" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,1662C0,1604 190.54200000000006,1604 190.54200000000006,1546" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M81.31199999999998,1662C81.31199999999998,1604 249.28200000000007,1604 249.28200000000007,1546" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,1662C0,1604 0,1604 0,1546" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M209.08800000000002,1662C209.08800000000002,1604 350.328,1604 350.328,1546" style={tostyle("stroke-width: 16.3569")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M159.19200000000006,1662C159.19200000000006,1604 345.04799999999994,1604 345.04799999999994,1546" style={tostyle("stroke-width: 10.632")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M204.99599999999998,1662C204.99599999999998,1604 349.338,1604 349.338,1546" style={tostyle("stroke-width: 10.632")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M120.45,1662C120.45,1604 344.05800000000005,1604 344.05800000000005,1546" style={tostyle("stroke-width: 6.95167")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M314.82000000000005,1662C314.82000000000005,1604 393.35999999999996,1604 393.35999999999996,1546" style={tostyle("stroke-width: 5.72491")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M248.02800000000005,1662C248.02800000000005,1604 411.18,1604 411.18,1546" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M248.82,1662C248.82,1604 397.782,1604 397.782,1546" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M281.424,1662C281.424,1604 401.742,1604 401.742,1546" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M144.54000000000005,1662C144.54000000000005,1604 337.45799999999997,1604 337.45799999999997,1546" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M169.29,1662C169.29,1604 353.892,1604 353.892,1546" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M257.334,1662C257.334,1604 394.152,1604 394.152,1546" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M660,1662C660,1604 298.782,1604 298.782,1546" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M419.89200000000005,1662C419.89200000000005,1604 298.716,1604 298.716,1546" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M142.82399999999998,1662C142.82399999999998,1604 370.524,1604 370.524,1546" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M171.864,1662C171.864,1604 410.454,1604 410.454,1546" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M254.1,1662C254.1,1604 433.55400000000003,1604 433.55400000000003,1546" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M660,1662C660,1604 267.3,1604 267.3,1546" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M270.402,1662C270.402,1604 462.79200000000003,1604 462.79200000000003,1546" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M146.78400000000002,1662C146.78400000000002,1604 369.93,1604 369.93,1546" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M177.67199999999997,1662C177.67199999999997,1604 390.324,1604 390.324,1546" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M246.51,1662C246.51,1604 334.4880000000001,1604 334.4880000000001,1546" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M295.548,1662C295.548,1604 514.866,1604 514.866,1546" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M149.952,1662C149.952,1604 383.92199999999997,1604 383.92199999999997,1546" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M208.69199999999998,1662C208.69199999999998,1604 389.46599999999995,1604 389.46599999999995,1546" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M317.856,1662C317.856,1604 502.45799999999997,1604 502.45799999999997,1546" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M255.94799999999998,1662C255.94799999999998,1604 404.64599999999996,1604 404.64599999999996,1546" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M223.806,1662C223.806,1604 446.886,1604 446.886,1546" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M265.848,1662C265.848,1604 458.172,1604 458.172,1546" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M204.73200000000006,1662C204.73200000000006,1604 409.86,1604 409.86,1546" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M183.678,1662C183.678,1604 353.166,1604 353.166,1546" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M216.74400000000003,1662C216.74400000000003,1604 383.9220000000001,1604 383.9220000000001,1546" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M119.98800000000001,1662C119.98800000000001,1604 347.358,1604 347.358,1546" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M243.408,1662C243.408,1604 463.65000000000003,1604 463.65000000000003,1546" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M114.77400000000003,1662C114.77400000000003,1604 390.852,1604 390.852,1546" style={tostyle("stroke-width: 1.22677")}></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M350.328,1526C350.328,1468 418.836,1468 418.836,1410" style={tostyle("stroke-width: 17.3792")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M349.338,1526C349.338,1468 452.232,1468 452.232,1410" style={tostyle("stroke-width: 10.632")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M345.04799999999994,1526C345.04799999999994,1468 472.296,1468 472.296,1410" style={tostyle("stroke-width: 10.4275")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M344.05800000000005,1526C344.05800000000005,1468 493.68,1468 493.68,1410" style={tostyle("stroke-width: 6.95167")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M393.35999999999996,1526C393.35999999999996,1468 621.126,1468 621.126,1410" style={tostyle("stroke-width: 6.33829")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M131.20800000000003,1526C131.20800000000003,1468 270.79799999999994,1468 270.79799999999994,1410" style={tostyle("stroke-width: 5.72491")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M411.18,1526C411.18,1468 546.282,1468 546.282,1410" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M397.782,1526C397.782,1468 597.762,1468 597.762,1410" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M401.742,1526C401.742,1468 578.952,1468 578.952,1410" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M354.09,1526C354.09,1468 660,1468 660,1410" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M337.45799999999997,1526C337.45799999999997,1468 492.228,1468 492.228,1410" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M353.892,1526C353.892,1468 393.888,1468 393.888,1410" style={tostyle("stroke-width: 4.7026")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M394.152,1526C394.152,1468 580.47,1468 580.47,1410" style={tostyle("stroke-width: 4.29368")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M370.524,1526C370.524,1468 518.76,1468 518.76,1410" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M410.454,1526C410.454,1468 443.058,1468 443.058,1410" style={tostyle("stroke-width: 3.47584")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M385.968,1526C385.968,1468 611.556,1468 611.556,1410" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M433.55400000000003,1526C433.55400000000003,1468 658.02,1468 658.02,1410" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M390.324,1526C390.324,1468 514.932,1468 514.932,1410" style={tostyle("stroke-width: 2.65799")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M462.79200000000003,1526C462.79200000000003,1468 581.856,1468 581.856,1410" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M460.416,1526C460.416,1468 536.316,1468 536.316,1410" style={tostyle("stroke-width: 2.24907")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M369.93,1526C369.93,1468 396.79200000000003,1468 396.79200000000003,1410" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M334.4880000000001,1526C334.4880000000001,1468 581.526,1468 581.526,1410" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M514.866,1526C514.866,1468 600.5999999999999,1468 600.5999999999999,1410" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M502.45799999999997,1526C502.45799999999997,1468 582.12,1468 582.12,1410" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M389.46599999999995,1526C389.46599999999995,1468 462.5280000000001,1468 462.5280000000001,1410" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M458.172,1526C458.172,1468 602.25,1468 602.25,1410" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M404.64599999999996,1526C404.64599999999996,1468 386.95799999999997,1468 386.95799999999997,1410" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M409.86,1526C409.86,1468 491.63399999999996,1468 491.63399999999996,1410" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M383.92199999999997,1526C383.92199999999997,1468 522.1919999999999,1468 522.1919999999999,1410" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M390.852,1526C390.852,1468 502.85400000000004,1468 502.85400000000004,1410" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M353.166,1526C353.166,1468 464.77199999999993,1468 464.77199999999993,1410" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M446.886,1526C446.886,1468 503.44800000000004,1468 503.44800000000004,1410" style={tostyle("stroke-width: 1.43123")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M347.358,1526C347.358,1468 485.16600000000005,1468 485.16600000000005,1410" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M463.65000000000003,1526C463.65000000000003,1468 584.364,1468 584.364,1410" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M383.9220000000001,1526C383.9220000000001,1468 510.576,1468 510.576,1410" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,1526C0,1468 0,1468 0,1410" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M293.964,1526C293.964,1468 444.378,1468 444.378,1410" style={tostyle("stroke-width: 17.1747")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M306.438,1526C306.438,1468 461.868,1468 461.868,1410" style={tostyle("stroke-width: 11.4498")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M321.618,1526C321.618,1468 547.5360000000001,1468 547.5360000000001,1410" style={tostyle("stroke-width: 10.4275")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M285.648,1526C285.648,1468 424.97400000000005,1468 424.97400000000005,1410" style={tostyle("stroke-width: 8.58736")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M298.716,1526C298.716,1468 574.002,1468 574.002,1410" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M247.236,1526C247.236,1468 366.36600000000004,1468 366.36600000000004,1410" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M319.11,1526C319.11,1468 487.74000000000007,1468 487.74000000000007,1410" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M298.782,1526C298.782,1468 639.474,1468 639.474,1410" style={tostyle("stroke-width: 3.88476")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M316.074,1526C316.074,1468 450.648,1468 450.648,1410" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M295.944,1526C295.944,1468 451.70399999999995,1468 451.70399999999995,1410" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M267.3,1526C267.3,1468 660,1468 660,1410" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M271.788,1526C271.788,1468 509.652,1468 509.652,1410" style={tostyle("stroke-width: 2.65799")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M190.54200000000006,1526C190.54200000000006,1468 494.73600000000005,1468 494.73600000000005,1410" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M249.28200000000007,1526C249.28200000000007,1468 481.668,1468 481.668,1410" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M117.15000000000003,1526C117.15000000000003,1468 370.85400000000004,1468 370.85400000000004,1410" style={tostyle("stroke-width: 1.63569")}></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M418.836,1390C418.836,1332 341.74800000000005,1332 341.74800000000005,1274" style={tostyle("stroke-width: 18.4015")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M452.232,1390C452.232,1332 343.002,1332 343.002,1274" style={tostyle("stroke-width: 10.632")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M424.97400000000005,1390C424.97400000000005,1332 365.574,1332 365.574,1274" style={tostyle("stroke-width: 8.58736")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M493.68,1390C493.68,1332 344.25600000000003,1332 344.25600000000003,1274" style={tostyle("stroke-width: 6.95167")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M270.79799999999994,1390C270.79799999999994,1332 226.57799999999995,1332 226.57799999999995,1274" style={tostyle("stroke-width: 5.72491")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M546.282,1390C546.282,1332 380.29200000000003,1332 380.29200000000003,1274" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M578.952,1390C578.952,1332 338.77799999999996,1332 338.77799999999996,1274" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M450.648,1390C450.648,1332 355.674,1332 355.674,1274" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M443.058,1390C443.058,1332 336.666,1332 336.666,1274" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M451.70399999999995,1390C451.70399999999995,1332 364.05600000000004,1332 364.05600000000004,1274" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M658.02,1390C658.02,1332 337.986,1332 337.986,1274" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M581.856,1390C581.856,1332 379.8300000000001,1332 379.8300000000001,1274" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M514.932,1390C514.932,1332 405.702,1332 405.702,1274" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M536.316,1390C536.316,1332 439.36199999999997,1332 439.36199999999997,1274" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M396.79200000000003,1390C396.79200000000003,1332 331.05600000000004,1332 331.05600000000004,1274" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M600.5999999999999,1390C600.5999999999999,1332 466.81800000000004,1332 466.81800000000004,1274" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M602.25,1390C602.25,1332 520.014,1332 520.014,1274" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M491.63399999999996,1390C491.63399999999996,1332 346.30199999999996,1332 346.30199999999996,1274" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M462.5280000000001,1390C462.5280000000001,1332 379.10400000000004,1332 379.10400000000004,1274" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M582.12,1390C582.12,1332 480.216,1332 480.216,1274" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M386.95799999999997,1390C386.95799999999997,1332 339.76800000000003,1332 339.76800000000003,1274" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M481.668,1390C481.668,1332 335.544,1332 335.544,1274" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M522.1919999999999,1390C522.1919999999999,1332 404.448,1332 404.448,1274" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M502.85400000000004,1390C502.85400000000004,1332 403.92,1332 403.92,1274" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M510.576,1390C510.576,1332 358.77600000000007,1332 358.77600000000007,1274" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M584.364,1390C584.364,1332 458.63399999999996,1332 458.63399999999996,1274" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,1390C0,1332 0,1332 0,1274" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M503.44800000000004,1390C503.44800000000004,1332 368.676,1332 368.676,1274" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M485.16600000000005,1390C485.16600000000005,1332 476.84999999999997,1332 476.84999999999997,1274" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M444.378,1390C444.378,1332 300.76199999999994,1332 300.76199999999994,1274" style={tostyle("stroke-width: 16.7658")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M461.868,1390C461.868,1332 312.378,1332 312.378,1274" style={tostyle("stroke-width: 11.0409")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M547.5360000000001,1390C547.5360000000001,1332 309.07800000000003,1332 309.07800000000003,1274" style={tostyle("stroke-width: 10.632")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M472.296,1390C472.296,1332 328.21799999999996,1332 328.21799999999996,1274" style={tostyle("stroke-width: 10.223")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M621.126,1390C621.126,1332 295.086,1332 295.086,1274" style={tostyle("stroke-width: 6.95167")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M597.762,1390C597.762,1332 257.06999999999994,1332 257.06999999999994,1274" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M660,1390C660,1332 107.052,1332 107.052,1274" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M492.228,1390C492.228,1332 306.042,1332 306.042,1274" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M393.888,1390C393.888,1332 318.978,1332 318.978,1274" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M580.47,1390C580.47,1332 244.2,1332 244.2,1274" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M487.74000000000007,1390C487.74000000000007,1332 289.872,1332 289.872,1274" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M366.36600000000004,1390C366.36600000000004,1332 244.99200000000005,1332 244.99200000000005,1274" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M574.002,1390C574.002,1332 291.85200000000003,1332 291.85200000000003,1274" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M639.474,1390C639.474,1332 243.408,1332 243.408,1274" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M518.76,1390C518.76,1332 282.612,1332 282.612,1274" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M611.556,1390C611.556,1332 243.93600000000004,1332 243.93600000000004,1274" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M660,1390C660,1332 317.592,1332 317.592,1274" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M509.652,1390C509.652,1332 223.476,1332 223.476,1274" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M581.526,1390C581.526,1332 131.93400000000003,1332 131.93400000000003,1274" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M494.73600000000005,1390C494.73600000000005,1332 313.302,1332 313.302,1274" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M370.85400000000004,1390C370.85400000000004,1332 255.552,1332 255.552,1274" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M464.77199999999993,1390C464.77199999999993,1332 294.29400000000004,1332 294.29400000000004,1274" style={tostyle("stroke-width: 1.22677")}></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M341.74800000000005,1254C341.74800000000005,1196 440.748,1196 440.748,1138" style={tostyle("stroke-width: 18.4015")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M343.002,1254C343.002,1196 382.33799999999997,1196 382.33799999999997,1138" style={tostyle("stroke-width: 10.632")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M365.574,1254C365.574,1196 372.83399999999995,1196 372.83399999999995,1138" style={tostyle("stroke-width: 8.58736")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M344.25600000000003,1254C344.25600000000003,1196 418.5059999999999,1196 418.5059999999999,1138" style={tostyle("stroke-width: 6.95167")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M380.29200000000003,1254C380.29200000000003,1196 451.176,1196 451.176,1138" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M107.052,1254C107.052,1196 232.25400000000002,1196 232.25400000000002,1138" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M338.77799999999996,1254C338.77799999999996,1196 413.952,1196 413.952,1138" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M289.872,1254C289.872,1196 310.464,1196 310.464,1138" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M244.99200000000005,1254C244.99200000000005,1196 303.996,1196 303.996,1138" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M355.674,1254C355.674,1196 411.44399999999996,1196 411.44399999999996,1138" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M364.05600000000004,1254C364.05600000000004,1196 393.62399999999997,1196 393.62399999999997,1138" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M337.986,1254C337.986,1196 498.498,1196 498.498,1138" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M336.666,1254C336.666,1196 413.88599999999997,1196 413.88599999999997,1138" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M379.8300000000001,1254C379.8300000000001,1196 492.096,1196 492.096,1138" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M405.702,1254C405.702,1196 488.4,1196 488.4,1138" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M439.36199999999997,1254C439.36199999999997,1196 543.6419999999999,1196 543.6419999999999,1138" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M331.05600000000004,1254C331.05600000000004,1196 393.75600000000003,1196 393.75600000000003,1138" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M223.476,1254C223.476,1196 300.2339999999999,1196 300.2339999999999,1138" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M466.81800000000004,1254C466.81800000000004,1196 590.634,1196 590.634,1138" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M404.448,1254C404.448,1196 523.974,1196 523.974,1138" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M313.302,1254C313.302,1196 317.46000000000004,1196 317.46000000000004,1138" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M255.552,1254C255.552,1196 260.898,1196 260.898,1138" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M379.10400000000004,1254C379.10400000000004,1196 490.974,1196 490.974,1138" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M339.76800000000003,1254C339.76800000000003,1196 520.3439999999999,1196 520.3439999999999,1138" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M335.544,1254C335.544,1196 352.17600000000004,1196 352.17600000000004,1138" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M480.216,1254C480.216,1196 602.382,1196 602.382,1138" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M520.014,1254C520.014,1196 660,1196 660,1138" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M346.30199999999996,1254C346.30199999999996,1196 450.054,1196 450.054,1138" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M403.92,1254C403.92,1196 369.33600000000007,1196 369.33600000000007,1138" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M476.84999999999997,1254C476.84999999999997,1196 514.404,1196 514.404,1138" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M358.77600000000007,1254C358.77600000000007,1196 565.29,1196 565.29,1138" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M368.676,1254C368.676,1196 580.6020000000001,1196 580.6020000000001,1138" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M458.63399999999996,1254C458.63399999999996,1196 558.822,1196 558.822,1138" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,1254C0,1196 0,1196 0,1138" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M300.76199999999994,1254C300.76199999999994,1196 347.62199999999996,1196 347.62199999999996,1138" style={tostyle("stroke-width: 16.7658")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M312.378,1254C312.378,1196 376.92600000000004,1196 376.92600000000004,1138" style={tostyle("stroke-width: 11.0409")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M309.07800000000003,1254C309.07800000000003,1196 421.47599999999994,1196 421.47599999999994,1138" style={tostyle("stroke-width: 10.632")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M328.21799999999996,1254C328.21799999999996,1196 399.96000000000004,1196 399.96000000000004,1138" style={tostyle("stroke-width: 10.223")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M295.086,1254C295.086,1196 442.332,1196 442.332,1138" style={tostyle("stroke-width: 6.95167")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M226.57799999999995,1254C226.57799999999995,1196 330.99,1196 330.99,1138" style={tostyle("stroke-width: 5.72491")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M257.06999999999994,1254C257.06999999999994,1196 343.992,1196 343.992,1138" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M306.042,1254C306.042,1196 374.94599999999997,1196 374.94599999999997,1138" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M318.978,1254C318.978,1196 361.15199999999993,1196 361.15199999999993,1138" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M291.85200000000003,1254C291.85200000000003,1196 365.96999999999997,1196 365.96999999999997,1138" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M244.2,1254C244.2,1196 331.9140000000001,1196 331.9140000000001,1138" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M243.408,1254C243.408,1196 338.5799999999999,1196 338.5799999999999,1138" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M282.612,1254C282.612,1196 339.636,1196 339.636,1138" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M243.93600000000004,1254C243.93600000000004,1196 340.09800000000007,1196 340.09800000000007,1138" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M317.592,1254C317.592,1196 338.77799999999996,1196 338.77799999999996,1138" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M131.93400000000003,1254C131.93400000000003,1196 334.026,1196 334.026,1138" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M294.29400000000004,1254C294.29400000000004,1196 345.4440000000001,1196 345.4440000000001,1138" style={tostyle("stroke-width: 1.22677")}></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M440.748,1118C440.748,1060 437.1839999999999,1060 437.1839999999999,1002" style={tostyle("stroke-width: 18.8104")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M347.62199999999996,1118C347.62199999999996,1060 382.86600000000004,1060 382.86600000000004,1002" style={tostyle("stroke-width: 15.7435")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M421.47599999999994,1118C421.47599999999994,1060 511.5,1060 511.5,1002" style={tostyle("stroke-width: 11.2454")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M376.92600000000004,1118C376.92600000000004,1060 378.50999999999993,1060 378.50999999999993,1002" style={tostyle("stroke-width: 10.632")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M382.33799999999997,1118C382.33799999999997,1060 414.942,1060 414.942,1002" style={tostyle("stroke-width: 10.223")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M399.96000000000004,1118C399.96000000000004,1060 453.816,1060 453.816,1002" style={tostyle("stroke-width: 9.81413")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M442.332,1118C442.332,1060 532.356,1060 532.356,1002" style={tostyle("stroke-width: 7.76952")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M372.83399999999995,1118C372.83399999999995,1060 455.33399999999995,1060 455.33399999999995,1002" style={tostyle("stroke-width: 8.3829")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M418.5059999999999,1118C418.5059999999999,1060 467.87399999999997,1060 467.87399999999997,1002" style={tostyle("stroke-width: 6.74721")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M343.992,1118C343.992,1060 488.466,1060 488.466,1002" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M330.99,1118C330.99,1060 348.41400000000004,1060 348.41400000000004,1002" style={tostyle("stroke-width: 5.52045")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M413.952,1118C413.952,1060 496.32,1060 496.32,1002" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M451.176,1118C451.176,1060 488.334,1060 488.334,1002" style={tostyle("stroke-width: 5.11152")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M331.9140000000001,1118C331.9140000000001,1060 437.38200000000006,1060 437.38200000000006,1002" style={tostyle("stroke-width: 4.29368")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M374.94599999999997,1118C374.94599999999997,1060 462.26400000000007,1060 462.26400000000007,1002" style={tostyle("stroke-width: 4.7026")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M361.15199999999993,1118C361.15199999999993,1060 390.52199999999993,1060 390.52199999999993,1002" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M365.96999999999997,1118C365.96999999999997,1060 479.094,1060 479.094,1002" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M303.996,1118C303.996,1060 328.812,1060 328.812,1002" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M411.44399999999996,1118C411.44399999999996,1060 415.53600000000006,1060 415.53600000000006,1002" style={tostyle("stroke-width: 3.88476")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M338.5799999999999,1118C338.5799999999999,1060 476.91599999999994,1060 476.91599999999994,1002" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M339.636,1118C339.636,1060 466.4220000000001,1060 466.4220000000001,1002" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M413.88599999999997,1118C413.88599999999997,1060 378.7080000000001,1060 378.7080000000001,1002" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M340.09800000000007,1118C340.09800000000007,1060 514.668,1060 514.668,1002" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M393.62399999999997,1118C393.62399999999997,1060 474.53999999999996,1060 474.53999999999996,1002" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M488.4,1118C488.4,1060 516.912,1060 516.912,1002" style={tostyle("stroke-width: 3.06691")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M498.498,1118C498.498,1060 580.404,1060 580.404,1002" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M393.75600000000003,1118C393.75600000000003,1060 410.32199999999995,1060 410.32199999999995,1002" style={tostyle("stroke-width: 2.65799")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M492.096,1118C492.096,1060 552.222,1060 552.222,1002" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M338.77799999999996,1118C338.77799999999996,1060 490.974,1060 490.974,1002" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M543.6419999999999,1118C543.6419999999999,1060 553.608,1060 553.608,1002" style={tostyle("stroke-width: 2.65799")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M334.026,1118C334.026,1060 476.388,1060 476.388,1002" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M450.054,1118C450.054,1060 465.102,1060 465.102,1002" style={tostyle("stroke-width: 1.84015")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M590.634,1118C590.634,1060 605.484,1060 605.484,1002" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M660,1118C660,1060 658.812,1060 658.812,1002" style={tostyle("stroke-width: 1.84015")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M490.974,1118C490.974,1060 477.1140000000001,1060 477.1140000000001,1002" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M565.29,1118C565.29,1060 553.608,1060 553.608,1002" style={tostyle("stroke-width: 1.43123")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M602.382,1118C602.382,1060 633.402,1060 633.402,1002" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M523.974,1118C523.974,1060 578.886,1060 578.886,1002" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M352.17600000000004,1118C352.17600000000004,1060 475.53,1060 475.53,1002" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M580.6020000000001,1118C580.6020000000001,1060 534.864,1060 534.864,1002" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,1118C0,1060 0,1060 0,1002" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M345.4440000000001,1118C345.4440000000001,1060 461.01,1060 461.01,1002" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M369.33600000000007,1118C369.33600000000007,1060 442.92600000000004,1060 442.92600000000004,1002" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M514.404,1118C514.404,1060 572.748,1060 572.748,1002" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M520.3439999999999,1118C520.3439999999999,1060 504.70199999999994,1060 504.70199999999994,1002" style={tostyle("stroke-width: 1.43123")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M558.822,1118C558.822,1060 608.9820000000001,1060 608.9820000000001,1002" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M232.25400000000002,1118C232.25400000000002,1060 464.508,1060 464.508,1002" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M310.464,1118C310.464,1060 366.234,1060 366.234,1002" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M300.2339999999999,1118C300.2339999999999,1060 399.366,1060 399.366,1002" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M317.46000000000004,1118C317.46000000000004,1060 404.448,1060 404.448,1002" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M260.898,1118C260.898,1060 354.024,1060 354.024,1002" style={tostyle("stroke-width: 1.63569")}></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M437.1839999999999,982C437.1839999999999,924 353.56199999999995,924 353.56199999999995,866" style={tostyle("stroke-width: 19.2193")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M511.5,982C511.5,924 413.16,924 413.16,866" style={tostyle("stroke-width: 11.8587")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M378.50999999999993,982C378.50999999999993,924 345.246,924 345.246,866" style={tostyle("stroke-width: 10.223")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M414.942,982C414.942,924 343.79400000000004,924 343.79400000000004,866" style={tostyle("stroke-width: 9.81413")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M453.816,982C453.816,924 401.61,924 401.61,866" style={tostyle("stroke-width: 9.4052")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M532.356,982C532.356,924 477.576,924 477.576,866" style={tostyle("stroke-width: 8.58736")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M455.33399999999995,982C455.33399999999995,924 382.14,924 382.14,866" style={tostyle("stroke-width: 8.17844")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M467.87399999999997,982C467.87399999999997,924 420.02400000000006,924 420.02400000000006,866" style={tostyle("stroke-width: 6.54275")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M488.466,982C488.466,924 437.316,924 437.316,866" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M488.334,982C488.334,924 462.99,924 462.99,866" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M464.508,982C464.508,924 463.65000000000003,924 463.65000000000003,866" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M496.32,982C496.32,924 465.36600000000004,924 465.36600000000004,866" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M437.38200000000006,982C437.38200000000006,924 437.844,924 437.844,866" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M462.26400000000007,982C462.26400000000007,924 356.268,924 356.268,866" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M366.234,982C366.234,924 349.20599999999996,924 349.20599999999996,866" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M479.094,982C479.094,924 397.3860000000001,924 397.3860000000001,866" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M328.812,982C328.812,924 283.734,924 283.734,866" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M466.4220000000001,982C466.4220000000001,924 406.824,924 406.824,866" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M476.91599999999994,982C476.91599999999994,924 457.446,924 457.446,866" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M580.404,982C580.404,924 439.89000000000004,924 439.89000000000004,866" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M514.668,982C514.668,924 487.87200000000007,924 487.87200000000007,866" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M516.912,982C516.912,924 381.34800000000007,924 381.34800000000007,866" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M474.53999999999996,982C474.53999999999996,924 363.72599999999994,924 363.72599999999994,866" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M552.222,982C552.222,924 417.3179999999999,924 417.3179999999999,866" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M490.974,982C490.974,924 467.412,924 467.412,866" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M553.608,982C553.608,924 469.986,924 469.986,866" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M476.388,982C476.388,924 423.58799999999997,924 423.58799999999997,866" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M465.102,982C465.102,924 362.736,924 362.736,866" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M605.484,982C605.484,924 468.27000000000004,924 468.27000000000004,866" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M658.812,982C658.812,924 555.522,924 555.522,866" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M475.53,982C475.53,924 405.636,924 405.636,866" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M578.886,982C578.886,924 502.65600000000006,924 502.65600000000006,866" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M477.1140000000001,982C477.1140000000001,924 368.74199999999996,924 368.74199999999996,866" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M633.402,982C633.402,924 502.062,924 502.062,866" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M553.608,982C553.608,924 468.204,924 468.204,866" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M442.92600000000004,982C442.92600000000004,924 353.232,924 353.232,866" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M504.70199999999994,982C504.70199999999994,924 371.844,924 371.844,866" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M534.864,982C534.864,924 416.196,924 416.196,866" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,982C0,924 0,924 0,866" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M608.9820000000001,982C608.9820000000001,924 478.63200000000006,924 478.63200000000006,866" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M572.748,982C572.748,924 483.912,924 483.912,866" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M461.01,982C461.01,924 411.8400000000001,924 411.8400000000001,866" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M382.86600000000004,982C382.86600000000004,924 302.94,924 302.94,866" style={tostyle("stroke-width: 14.7212")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M348.41400000000004,982C348.41400000000004,924 278.19000000000005,924 278.19000000000005,866" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M390.52199999999993,982C390.52199999999993,924 306.174,924 306.174,866" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M415.53600000000006,982C415.53600000000006,924 319.50600000000003,924 319.50600000000003,866" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M378.7080000000001,982C378.7080000000001,924 262.614,924 262.614,866" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M410.32199999999995,982C410.32199999999995,924 299.178,924 299.178,866" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M399.366,982C399.366,924 298.716,924 298.716,866" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M404.448,982C404.448,924 267.16799999999995,924 267.16799999999995,866" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M354.024,982C354.024,924 252.714,924 252.714,866" style={tostyle("stroke-width: 1.63569")}></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M302.94,846C302.94,788 225.39000000000004,788 225.39000000000004,730" style={tostyle("stroke-width: 14.1078")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M413.16,846C413.16,788 352.968,788 352.968,730" style={tostyle("stroke-width: 12.4721")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M477.576,846C477.576,788 342.47399999999993,788 342.47399999999993,730" style={tostyle("stroke-width: 9.4052")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M437.316,846C437.316,788 335.214,788 335.214,730" style={tostyle("stroke-width: 5.52045")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M465.36600000000004,846C465.36600000000004,788 358.90799999999996,788 358.90799999999996,730" style={tostyle("stroke-width: 5.11152")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M462.99,846C462.99,788 370.39199999999994,788 370.39199999999994,730" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M278.19000000000005,846C278.19000000000005,788 207.834,788 207.834,730" style={tostyle("stroke-width: 5.11152")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M306.174,846C306.174,788 301.29,788 301.29,730" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M319.50600000000003,846C319.50600000000003,788 254.496,788 254.496,730" style={tostyle("stroke-width: 4.29368")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M283.734,846C283.734,788 253.24200000000002,788 253.24200000000002,730" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M457.446,846C457.446,788 374.6819999999999,788 374.6819999999999,730" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M469.986,846C469.986,788 342.86999999999995,788 342.86999999999995,730" style={tostyle("stroke-width: 3.06691")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M439.89000000000004,846C439.89000000000004,788 386.95799999999997,788 386.95799999999997,730" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M487.87200000000007,846C487.87200000000007,788 383.72399999999993,788 383.72399999999993,730" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M467.412,846C467.412,788 388.806,788 388.806,730" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M262.614,846C262.614,788 290.26800000000003,788 290.26800000000003,730" style={tostyle("stroke-width: 3.06691")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M299.178,846C299.178,788 264.33000000000004,788 264.33000000000004,730" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M417.3179999999999,846C417.3179999999999,788 363.924,788 363.924,730" style={tostyle("stroke-width: 2.65799")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M555.522,846C555.522,788 453.48600000000005,788 453.48600000000005,730" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M298.716,846C298.716,788 244.068,788 244.068,730" style={tostyle("stroke-width: 2.24907")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M468.27000000000004,846C468.27000000000004,788 443.388,788 443.388,730" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M502.062,846C502.062,788 419.826,788 419.826,730" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M267.16799999999995,846C267.16799999999995,788 254.826,788 254.826,730" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M252.714,846C252.714,788 211.068,788 211.068,730" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M478.63200000000006,846C478.63200000000006,788 366.96000000000004,788 366.96000000000004,730" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,846C0,788 0,788 0,730" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M483.912,846C483.912,788 390.522,788 390.522,730" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M371.844,846C371.844,788 353.2319999999999,788 353.2319999999999,730" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M416.196,846C416.196,788 409.46400000000006,788 409.46400000000006,730" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M353.56199999999995,846C353.56199999999995,788 241.56000000000003,788 241.56000000000003,730" style={tostyle("stroke-width: 20.6506")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M345.246,846C345.246,788 270.468,788 270.468,730" style={tostyle("stroke-width: 9.81413")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M343.79400000000004,846C343.79400000000004,788 236.01600000000002,788 236.01600000000002,730" style={tostyle("stroke-width: 9.4052")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M401.61,846C401.61,788 317.922,788 317.922,730" style={tostyle("stroke-width: 8.99628")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M382.14,846C382.14,788 281.226,788 281.226,730" style={tostyle("stroke-width: 7.76952")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M420.02400000000006,846C420.02400000000006,788 314.35799999999995,788 314.35799999999995,730" style={tostyle("stroke-width: 6.33829")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M463.65000000000003,846C463.65000000000003,788 326.10600000000005,788 326.10600000000005,730" style={tostyle("stroke-width: 5.11152")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M437.844,846C437.844,788 299.31,788 299.31,730" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M356.268,846C356.268,788 263.01,788 263.01,730" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M349.20599999999996,846C349.20599999999996,788 236.41199999999998,788 236.41199999999998,730" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M397.3860000000001,846C397.3860000000001,788 299.574,788 299.574,730" style={tostyle("stroke-width: 3.88476")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M406.824,846C406.824,788 308.8140000000001,788 308.8140000000001,730" style={tostyle("stroke-width: 3.47584")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M381.34800000000007,846C381.34800000000007,788 301.88399999999996,788 301.88399999999996,730" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M363.72599999999994,846C363.72599999999994,788 287.562,788 287.562,730" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M423.58799999999997,846C423.58799999999997,788 212.98199999999994,788 212.98199999999994,730" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M362.736,846C362.736,788 273.504,788 273.504,730" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M405.636,846C405.636,788 274.69199999999995,788 274.69199999999995,730" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M502.65600000000006,846C502.65600000000006,788 321.948,788 321.948,730" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M468.204,846C468.204,788 312.642,788 312.642,730" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M411.8400000000001,846C411.8400000000001,788 275.94599999999997,788 275.94599999999997,730" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M368.74199999999996,846C368.74199999999996,788 313.43399999999997,788 313.43399999999997,730" style={tostyle("stroke-width: 1.43123")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M353.232,846C353.232,788 226.446,788 226.446,730" style={tostyle("stroke-width: 1.22677")}></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M241.56000000000003,710C241.56000000000003,652 244.926,652 244.926,594" style={tostyle("stroke-width: 22.0818")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M225.39000000000004,710C225.39000000000004,652 139.52399999999997,652 139.52399999999997,594" style={tostyle("stroke-width: 13.4944")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M352.968,710C352.968,652 362.538,652 362.538,594" style={tostyle("stroke-width: 13.0855")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M270.468,710C270.468,652 269.28,652 269.28,594" style={tostyle("stroke-width: 9.4052")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M236.01600000000002,710C236.01600000000002,652 214.43400000000003,652 214.43400000000003,594" style={tostyle("stroke-width: 8.99628")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M317.922,710C317.922,652 288.024,652 288.024,594" style={tostyle("stroke-width: 8.58736")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M281.226,710C281.226,652 242.81399999999996,652 242.81399999999996,594" style={tostyle("stroke-width: 7.36059")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M314.35799999999995,710C314.35799999999995,652 212.12399999999997,652 212.12399999999997,594" style={tostyle("stroke-width: 6.13383")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M335.214,710C335.214,652 360.95399999999995,652 360.95399999999995,594" style={tostyle("stroke-width: 5.72491")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M358.90799999999996,710C358.90799999999996,652 342.87000000000006,652 342.87000000000006,594" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M370.39199999999994,710C370.39199999999994,652 366.82800000000003,652 366.82800000000003,594" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M207.834,710C207.834,652 109.69199999999998,652 109.69199999999998,594" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M254.496,710C254.496,652 247.236,652 247.236,594" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M263.01,710C263.01,652 288.42,652 288.42,594" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M301.29,710C301.29,652 261.82199999999995,652 261.82199999999995,594" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M299.31,710C299.31,652 314.09400000000005,652 314.09400000000005,594" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M253.24200000000002,710C253.24200000000002,652 223.476,652 223.476,594" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M236.41199999999998,710C236.41199999999998,652 224.53200000000004,652 224.53200000000004,594" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M374.6819999999999,710C374.6819999999999,652 375.936,652 375.936,594" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M299.574,710C299.574,652 250.338,652 250.338,594" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M287.562,710C287.562,652 210.276,652 210.276,594" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M383.72399999999993,710C383.72399999999993,652 369.86400000000003,652 369.86400000000003,594" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M308.8140000000001,710C308.8140000000001,652 323.664,652 323.664,594" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M386.95799999999997,710C386.95799999999997,652 381.546,652 381.546,594" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M388.806,710C388.806,652 363.858,652 363.858,594" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M264.33000000000004,710C264.33000000000004,652 276.606,652 276.606,594" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M290.26800000000003,710C290.26800000000003,652 261.75600000000003,652 261.75600000000003,594" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M212.98199999999994,710C212.98199999999994,652 218.196,652 218.196,594" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M363.924,710C363.924,652 450.186,652 450.186,594" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M443.388,710C443.388,652 453.41999999999996,652 453.41999999999996,594" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M453.48600000000005,710C453.48600000000005,652 469.062,652 469.062,594" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M244.068,710C244.068,652 232.64999999999998,652 232.64999999999998,594" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M273.504,710C273.504,652 281.688,652 281.688,594" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M312.642,710C312.642,652 323.268,652 323.268,594" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M211.068,710C211.068,652 112.92600000000002,652 112.92600000000002,594" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M321.948,710C321.948,652 264.33,652 264.33,594" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M419.826,710C419.826,652 452.298,652 452.298,594" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M254.826,710C254.826,652 163.08599999999998,652 163.08599999999998,594" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M274.69199999999995,710C274.69199999999995,652 192.32400000000004,652 192.32400000000004,594" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M353.2319999999999,710C353.2319999999999,652 352.83599999999996,652 352.83599999999996,594" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M226.446,710C226.446,652 183.08400000000003,652 183.08400000000003,594" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M366.96000000000004,710C366.96000000000004,652 415.602,652 415.602,594" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M275.94599999999997,710C275.94599999999997,652 229.41599999999997,652 229.41599999999997,594" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,710C0,652 0,652 0,594" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M390.522,710C390.522,652 445.698,652 445.698,594" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M409.46400000000006,710C409.46400000000006,652 374.94599999999997,652 374.94599999999997,594" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M342.47399999999993,710C342.47399999999993,652 292.38,652 292.38,594" style={tostyle("stroke-width: 10.223")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M326.10600000000005,710C326.10600000000005,652 337.722,652 337.722,594" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M342.86999999999995,710C342.86999999999995,652 315.282,652 315.282,594" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M301.88399999999996,710C301.88399999999996,652 339.04200000000003,652 339.04200000000003,594" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M313.43399999999997,710C313.43399999999997,652 349.00800000000004,652 349.00800000000004,594" style={tostyle("stroke-width: 1.22677")}></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M244.926,574C244.926,516 252.12,516 252.12,458" style={tostyle("stroke-width: 22.0818")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M139.52399999999997,574C139.52399999999997,516 165.13199999999998,516 165.13199999999998,458" style={tostyle("stroke-width: 13.4944")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M362.538,574C362.538,516 470.71200000000005,516 470.71200000000005,458" style={tostyle("stroke-width: 13.0855")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M269.28,574C269.28,516 302.478,516 302.478,458" style={tostyle("stroke-width: 9.4052")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M214.43400000000003,574C214.43400000000003,516 250.66799999999995,516 250.66799999999995,458" style={tostyle("stroke-width: 8.99628")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M242.81399999999996,574C242.81399999999996,516 296.076,516 296.076,458" style={tostyle("stroke-width: 7.36059")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M212.12399999999997,574C212.12399999999997,516 225.45599999999996,516 225.45599999999996,458" style={tostyle("stroke-width: 6.13383")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M360.95399999999995,574C360.95399999999995,516 414.678,516 414.678,458" style={tostyle("stroke-width: 5.72491")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M337.722,574C337.722,516 407.154,516 407.154,458" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M342.87000000000006,574C342.87000000000006,516 382.99800000000005,516 382.99800000000005,458" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M366.82800000000003,574C366.82800000000003,516 433.22400000000005,516 433.22400000000005,458" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M109.69199999999998,574C109.69199999999998,516 149.82000000000002,516 149.82000000000002,458" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M261.82199999999995,574C261.82199999999995,516 328.548,516 328.548,458" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M247.236,574C247.236,516 293.23799999999994,516 293.23799999999994,458" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M224.53200000000004,574C224.53200000000004,516 221.826,516 221.826,458" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M223.476,574C223.476,516 314.09400000000005,516 314.09400000000005,458" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M375.936,574C375.936,516 428.20799999999997,516 428.20799999999997,458" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M339.04200000000003,574C339.04200000000003,516 385.17599999999993,516 385.17599999999993,458" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M210.276,574C210.276,516 214.69800000000004,516 214.69800000000004,458" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M381.546,574C381.546,516 474.408,516 474.408,458" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M369.86400000000003,574C369.86400000000003,516 435.072,516 435.072,458" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M276.606,574C276.606,516 327.096,516 327.096,458" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M261.75600000000003,574C261.75600000000003,516 327.888,516 327.888,458" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M363.858,574C363.858,516 441.6719999999999,516 441.6719999999999,458" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M450.186,574C450.186,516 467.28,516 467.28,458" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M281.688,574C281.688,516 329.60400000000004,516 329.60400000000004,458" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M453.41999999999996,574C453.41999999999996,516 521.4,516 521.4,458" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M469.062,574C469.062,516 597.234,516 597.234,458" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M192.32400000000004,574C192.32400000000004,516 296.20799999999997,516 296.20799999999997,458" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M112.92600000000002,574C112.92600000000002,516 138.072,516 138.072,458" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M163.08599999999998,574C163.08599999999998,516 209.02200000000002,516 209.02200000000002,458" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M452.298,574C452.298,516 590.898,516 590.898,458" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M183.08400000000003,574C183.08400000000003,516 264.46200000000005,516 264.46200000000005,458" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M229.41599999999997,574C229.41599999999997,516 243.804,516 243.804,458" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M445.698,574C445.698,516 534.27,516 534.27,458" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M374.94599999999997,574C374.94599999999997,516 512.226,516 512.226,458" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M352.83599999999996,574C352.83599999999996,516 480.08399999999995,516 480.08399999999995,458" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M349.00800000000004,574C349.00800000000004,516 495.528,516 495.528,458" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,574C0,516 0,516 0,458" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M415.602,574C415.602,516 594.3960000000001,516 594.3960000000001,458" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M292.38,574C292.38,516 330.066,516 330.066,458" style={tostyle("stroke-width: 10.223")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M288.024,574C288.024,516 353.16599999999994,516 353.16599999999994,458" style={tostyle("stroke-width: 8.58736")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M288.42,574C288.42,516 352.044,516 352.044,458" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M314.09400000000005,574C314.09400000000005,516 355.542,516 355.542,458" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M250.338,574C250.338,516 380.622,516 380.622,458" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M323.664,574C323.664,516 429.858,516 429.858,458" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M315.282,574C315.282,516 371.448,516 371.448,458" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M218.196,574C218.196,516 365.96999999999997,516 365.96999999999997,458" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M232.64999999999998,574C232.64999999999998,516 371.77799999999996,516 371.77799999999996,458" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M264.33,574C264.33,516 338.382,516 338.382,458" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M323.268,574C323.268,516 353.3640000000001,516 353.3640000000001,458" style={tostyle("stroke-width: 1.63569")}></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M252.12,438C252.12,380 264.33,380 264.33,322" style={tostyle("stroke-width: 22.2862")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M470.71200000000005,438C470.71200000000005,380 480.942,380 480.942,322" style={tostyle("stroke-width: 13.4944")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M165.13199999999998,438C165.13199999999998,380 209.286,380 209.286,322" style={tostyle("stroke-width: 13.0855")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M330.066,438C330.066,380 363.06600000000003,380 363.06600000000003,322" style={tostyle("stroke-width: 10.632")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M302.478,438C302.478,380 313.5,380 313.5,322" style={tostyle("stroke-width: 8.99628")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M250.66799999999995,438C250.66799999999995,380 261.756,380 261.756,322" style={tostyle("stroke-width: 8.79182")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M353.16599999999994,438C353.16599999999994,380 343.85999999999996,380 343.85999999999996,322" style={tostyle("stroke-width: 8.3829")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M296.076,438C296.076,380 307.42800000000005,380 307.42800000000005,322" style={tostyle("stroke-width: 7.15613")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M407.154,438C407.154,380 439.56,380 439.56,322" style={tostyle("stroke-width: 5.72491")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M414.678,438C414.678,380 412.10400000000004,380 412.10400000000004,322" style={tostyle("stroke-width: 5.92937")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M225.45599999999996,438C225.45599999999996,380 285.91200000000003,380 285.91200000000003,322" style={tostyle("stroke-width: 6.13383")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M382.99800000000005,438C382.99800000000005,380 384.11999999999995,380 384.11999999999995,322" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M149.82000000000002,438C149.82000000000002,380 163.94400000000005,380 163.94400000000005,322" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M355.542,438C355.542,380 424.18199999999996,380 424.18199999999996,322" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M293.23799999999994,438C293.23799999999994,380 282.612,380 282.612,322" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M433.22400000000005,438C433.22400000000005,380 466.48799999999994,380 466.48799999999994,322" style={tostyle("stroke-width: 4.7026")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M352.044,438C352.044,380 377.51999999999987,380 377.51999999999987,322" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M328.548,438C328.548,380 327.49199999999996,380 327.49199999999996,322" style={tostyle("stroke-width: 4.29368")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M221.826,438C221.826,380 244.33200000000005,380 244.33200000000005,322" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M314.09400000000005,438C314.09400000000005,380 307.032,380 307.032,322" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M371.448,438C371.448,380 399.036,380 399.036,322" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M380.622,438C380.622,380 425.7,380 425.7,322" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M428.20799999999997,438C428.20799999999997,380 499.092,380 499.092,322" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M385.17599999999993,438C385.17599999999993,380 360.822,380 360.822,322" style={tostyle("stroke-width: 3.47584")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M429.858,438C429.858,380 461.0759999999999,380 461.0759999999999,322" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M435.072,438C435.072,380 442.72800000000007,380 442.72800000000007,322" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M474.408,438C474.408,380 535.5239999999999,380 535.5239999999999,322" style={tostyle("stroke-width: 3.06691")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M214.69800000000004,438C214.69800000000004,380 261.62399999999997,380 261.62399999999997,322" style={tostyle("stroke-width: 3.06691")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M327.096,438C327.096,380 302.5439999999999,380 302.5439999999999,322" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M441.6719999999999,438C441.6719999999999,380 459.9539999999999,380 459.9539999999999,322" style={tostyle("stroke-width: 2.65799")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M365.96999999999997,438C365.96999999999997,380 394.4160000000001,380 394.4160000000001,322" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M467.28,438C467.28,380 497.50800000000004,380 497.50800000000004,322" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M371.77799999999996,438C371.77799999999996,380 414.876,380 414.876,322" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M521.4,438C521.4,380 549.2520000000001,380 549.2520000000001,322" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M353.3640000000001,438C353.3640000000001,380 347.09400000000005,380 347.09400000000005,322" style={tostyle("stroke-width: 1.84015")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M597.234,438C597.234,380 630.564,380 630.564,322" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M590.898,438C590.898,380 581.592,380 581.592,322" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M209.02200000000002,438C209.02200000000002,380 272.25,380 272.25,322" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M296.20799999999997,438C296.20799999999997,380 270.666,380 270.666,322" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M138.072,438C138.072,380 193.04999999999998,380 193.04999999999998,322" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M264.46200000000005,438C264.46200000000005,380 197.07600000000002,380 197.07600000000002,322" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M495.528,438C495.528,380 465.36600000000004,380 465.36600000000004,322" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M512.226,438C512.226,380 510.576,380 510.576,322" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M534.27,438C534.27,380 498.63000000000005,380 498.63000000000005,322" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M594.3960000000001,438C594.3960000000001,380 592.6139999999999,380 592.6139999999999,322" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M243.804,438C243.804,380 279.84000000000003,380 279.84000000000003,322" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,438C0,380 0,380 0,322" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M480.08399999999995,438C480.08399999999995,380 471.702,380 471.702,322" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M327.888,438C327.888,380 334.422,380 334.422,322" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M329.60400000000004,438C329.60400000000004,380 335.214,380 335.214,322" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M338.382,438C338.382,380 320.9579999999999,380 320.9579999999999,322" style={tostyle("stroke-width: 1.63569")}></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M264.33,302C264.33,244 171.40200000000002,244 171.40200000000002,186" style={tostyle("stroke-width: 22.4907")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M480.942,302C480.942,244 407.61600000000004,244 407.61600000000004,186" style={tostyle("stroke-width: 13.9033")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M209.286,302C209.286,244 152.79,244 152.79,186" style={tostyle("stroke-width: 12.6766")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M313.5,302C313.5,244 261.88800000000003,244 261.88800000000003,186" style={tostyle("stroke-width: 8.58736")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M261.756,302C261.756,244 164.27399999999997,244 164.27399999999997,186" style={tostyle("stroke-width: 8.58736")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M307.42800000000005,302C307.42800000000005,244 221.49599999999998,244 221.49599999999998,186" style={tostyle("stroke-width: 6.95167")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M285.91200000000003,302C285.91200000000003,244 227.50199999999998,244 227.50199999999998,186" style={tostyle("stroke-width: 6.13383")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M439.56,302C439.56,244 364.32000000000005,244 364.32000000000005,186" style={tostyle("stroke-width: 6.13383")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M163.94400000000005,302C163.94400000000005,244 159.654,244 159.654,186" style={tostyle("stroke-width: 4.90706")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M282.612,302C282.612,244 217.27199999999996,244 217.27199999999996,186" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M377.51999999999987,302C377.51999999999987,244 330.858,244 330.858,186" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M424.18199999999996,302C424.18199999999996,244 429.3960000000001,244 429.3960000000001,186" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M399.036,302C399.036,244 385.9680000000001,244 385.9680000000001,186" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M327.49199999999996,302C327.49199999999996,244 238.194,244 238.194,186" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M307.032,302C307.032,244 262.416,244 262.416,186" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M244.33200000000005,302C244.33200000000005,244 162.03,244 162.03,186" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M425.7,302C425.7,244 452.958,244 452.958,186" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M499.092,302C499.092,244 472.428,244 472.428,186" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M442.72800000000007,302C442.72800000000007,244 389.20199999999994,244 389.20199999999994,186" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M461.0759999999999,302C461.0759999999999,244 437.052,244 437.052,186" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M261.62399999999997,302C261.62399999999997,244 182.358,244 182.358,186" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M535.5239999999999,302C535.5239999999999,244 536.58,244 536.58,186" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M302.5439999999999,302C302.5439999999999,244 222.08999999999997,244 222.08999999999997,186" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M497.50800000000004,302C497.50800000000004,244 428.538,244 428.538,186" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M459.9539999999999,302C459.9539999999999,244 416.98799999999994,244 416.98799999999994,186" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M394.4160000000001,302C394.4160000000001,244 461.0759999999999,244 461.0759999999999,186" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M549.2520000000001,302C549.2520000000001,244 428.538,244 428.538,186" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M630.564,302C630.564,244 514.998,244 514.998,186" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M414.876,302C414.876,244 416.394,244 416.394,186" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M270.666,302C270.666,244 215.62199999999999,244 215.62199999999999,186" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M193.04999999999998,302C193.04999999999998,244 146.51999999999998,244 146.51999999999998,186" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M320.9579999999999,302C320.9579999999999,244 266.574,244 266.574,186" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M272.25,302C272.25,244 31.218000000000043,244 31.218000000000043,186" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M581.592,302C581.592,244 496.98,244 496.98,186" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M510.576,302C510.576,244 387.09000000000003,244 387.09000000000003,186" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M465.36600000000004,302C465.36600000000004,244 345.708,244 345.708,186" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M498.63000000000005,302C498.63000000000005,244 472.098,244 472.098,186" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M592.6139999999999,302C592.6139999999999,244 542.784,244 542.784,186" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M471.702,302C471.702,244 385.506,244 385.506,186" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,302C0,244 0,244 0,186" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M279.84000000000003,302C279.84000000000003,244 165.13200000000003,244 165.13200000000003,186" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M197.07600000000002,302C197.07600000000002,244 85.73400000000001,244 85.73400000000001,186" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M363.06600000000003,302C363.06600000000003,244 311.454,244 311.454,186" style={tostyle("stroke-width: 11.0409")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M343.85999999999996,302C343.85999999999996,244 299.77199999999993,244 299.77199999999993,186" style={tostyle("stroke-width: 8.17844")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M412.10400000000004,302C412.10400000000004,244 327.888,244 327.888,186" style={tostyle("stroke-width: 6.13383")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M384.11999999999995,302C384.11999999999995,244 288.42,244 288.42,186" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M466.48799999999994,302C466.48799999999994,244 323.20200000000006,244 323.20200000000006,186" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M360.822,302C360.822,244 270.93,244 270.93,186" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M334.422,302C334.422,244 267.036,244 267.036,186" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M335.214,302C335.214,244 230.14200000000005,244 230.14200000000005,186" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-dem", "g-focus")} d="M347.09400000000005,302C347.09400000000005,244 247.5,244 247.5,186" style={tostyle("stroke-width: 2.04461")}></path>
        </g>
        <g className={cx("g-shift")}>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M171.40200000000002,166C171.40200000000002,108 194.35680000000002,108 194.35680000000002,50" style={tostyle("stroke-width: 22.4907")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M407.61600000000004,166C407.61600000000004,108 434.5506,108 434.5506,50" style={tostyle("stroke-width: 14.7212")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M152.79,166C152.79,108 153.12659999999997,108 153.12659999999997,50" style={tostyle("stroke-width: 12.2677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M311.454,166C311.454,108 326.2644,108 326.2644,50" style={tostyle("stroke-width: 11.4498")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M261.88800000000003,166C261.88800000000003,108 295.55460000000005,108 295.55460000000005,50" style={tostyle("stroke-width: 8.3829")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M164.27399999999997,166C164.27399999999997,108 222.86220000000006,108 222.86220000000006,50" style={tostyle("stroke-width: 8.3829")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M299.77199999999993,166C299.77199999999993,108 317.49959999999993,108 317.49959999999993,50" style={tostyle("stroke-width: 7.76952")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M221.49599999999998,166C221.49599999999998,108 274.3884,108 274.3884,50" style={tostyle("stroke-width: 6.74721")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M364.32000000000005,166C364.32000000000005,108 383.1102,108 383.1102,50" style={tostyle("stroke-width: 6.33829")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M227.50199999999998,166C227.50199999999998,108 218.0376,108 218.0376,50" style={tostyle("stroke-width: 5.92937")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M288.42,166C288.42,108 310.2527999999999,108 310.2527999999999,50" style={tostyle("stroke-width: 5.31599")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M217.27199999999996,166C217.27199999999996,108 247.69140000000004,108 247.69140000000004,50" style={tostyle("stroke-width: 4.7026")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M159.654,166C159.654,108 177.41460000000004,108 177.41460000000004,50" style={tostyle("stroke-width: 4.7026")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M385.9680000000001,166C385.9680000000001,108 405.93300000000005,108 405.93300000000005,50" style={tostyle("stroke-width: 4.29368")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M429.3960000000001,166C429.3960000000001,108 465.10859999999997,108 465.10859999999997,50" style={tostyle("stroke-width: 4.49814")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M330.858,166C330.858,108 393.4656,108 393.4656,50" style={tostyle("stroke-width: 4.29368")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M162.03,166C162.03,108 164.02980000000005,108 164.02980000000005,50" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M262.416,166C262.416,108 279.91920000000005,108 279.91920000000005,50" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M238.194,166C238.194,108 285.9252,108 285.9252,50" style={tostyle("stroke-width: 4.08922")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M270.93,166C270.93,108 299.60699999999997,108 299.60699999999997,50" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M389.20199999999994,166C389.20199999999994,108 401.8211999999999,108 401.8211999999999,50" style={tostyle("stroke-width: 3.47584")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M472.428,166C472.428,108 476.9226,108 476.9226,50" style={tostyle("stroke-width: 3.6803")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M452.958,166C452.958,108 443.87639999999993,108 443.87639999999993,50" style={tostyle("stroke-width: 3.47584")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M437.052,166C437.052,108 479.70120000000003,108 479.70120000000003,50" style={tostyle("stroke-width: 3.27138")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M222.08999999999997,166C222.08999999999997,108 264.2112,108 264.2112,50" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M182.358,166C182.358,108 216.85620000000006,108 216.85620000000006,50" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M536.58,166C536.58,108 551.3508,108 551.3508,50" style={tostyle("stroke-width: 2.86245")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M267.036,166C267.036,108 292.6308,108 292.6308,50" style={tostyle("stroke-width: 2.65799")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M461.0759999999999,166C461.0759999999999,108 485.9514,108 485.9514,50" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M416.98799999999994,166C416.98799999999994,108 407.54999999999995,108 407.54999999999995,50" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M247.5,166C247.5,108 286.67100000000005,108 286.67100000000005,50" style={tostyle("stroke-width: 2.24907")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M514.998,166C514.998,108 646.1598,108 646.1598,50" style={tostyle("stroke-width: 2.24907")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M428.538,166C428.538,108 475.81380000000007,108 475.81380000000007,50" style={tostyle("stroke-width: 2.45353")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M416.394,166C416.394,108 506.96580000000006,108 506.96580000000006,50" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M230.14200000000005,166C230.14200000000005,108 264.79859999999996,108 264.79859999999996,50" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M428.538,166C428.538,108 479.9454,108 479.9454,50" style={tostyle("stroke-width: 2.04461")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M215.62199999999999,166C215.62199999999999,108 229.17839999999995,108 229.17839999999995,50" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M31.218000000000043,166C31.218000000000043,108 47.869799999999955,108 47.869799999999955,50" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M266.574,166C266.574,108 292.17539999999997,108 292.17539999999997,50" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M146.51999999999998,166C146.51999999999998,108 146.21639999999996,108 146.21639999999996,50" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M496.98,166C496.98,108 540.7841999999999,108 540.7841999999999,50" style={tostyle("stroke-width: 1.63569")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M165.13200000000003,166C165.13200000000003,108 207.08820000000003,108 207.08820000000003,50" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M472.098,166C472.098,108 419.31119999999993,108 419.31119999999993,50" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M542.784,166C542.784,108 602.514,108 602.514,50" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M345.708,166C345.708,108 416.592,108 416.592,50" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M85.73400000000001,166C85.73400000000001,108 93.15239999999999,108 93.15239999999999,50" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M385.506,166C385.506,108 448.96500000000003,108 448.96500000000003,50" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-dem", "g-blur")} d="M0,166C0,108 0,108 0,50" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-rep-rep", "g-blur")} d="M387.09000000000003,166C387.09000000000003,108 460.21139999999997,108 460.21139999999997,50" style={tostyle("stroke-width: 1.22677")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M327.888,166C327.888,108 344.29560000000004,108 344.29560000000004,50" style={tostyle("stroke-width: 6.13383")}></path>
            <path className={cx("g-link", "g-dem-rep", "g-focus")} d="M323.20200000000006,166C323.20200000000006,108 399.4122,108 399.4122,50" style={tostyle("stroke-width: 4.49814")}></path>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,2070)")}>
            <g>
                <rect className={cx("g-node", "g-rep")} x="399.33925650557626" width="18.40148698884758" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="419.5532490706319" width="13.085501858736059" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="362.33124907063194" width="13.085501858736059" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="389.8195539033457" width="11.040892193308549" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="414.1204758364312" width="10.223048327137546" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="367.59693680297397" width="9.814126394052044" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="401.61278066914497" width="8.178438661710036" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="384.544624535316" width="6.5427509293680295" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="424.54062453531606" width="6.5427509293680295" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="275.52554646840156" width="5.724907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="337.7040074349443" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="440.3340074349442" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="413.08246840148706" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="474.33046840148705" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="68.03446840148699" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="401.8029293680298" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="132.85292936802978" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="329.59892936802976" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="513.8113903345724" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="327.4933903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="289.4113903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="394.08739033457255" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="404.2578513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="391.78385130111525" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="190.55631226765803" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="580.946312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="303.02031226765797" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="318.860312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="248.24031226765803" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="406.17831226765804" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="388.95231226765804" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="469.4192342007436" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="471.3992342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="581.5532342007434" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="542.0256951672862" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="447.058156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="402.50815613382895" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="456.694156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="533.7821561338291" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="439.402156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="341.326156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="473.32615613382893" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="583.5461561338291" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="610.2101561338291" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="480.52661710037177" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="614.6386171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="354.9286171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="498.4786171003717" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(440.22,0)">
                <text dy=".71em" y="26">+17%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">1952</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Stevenson</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Eisenhower</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="278.0594795539034" dy=".35em">89</text>
                <text className={cx("g-title", "g-rep")} x="573.1301115241638" dy=".35em">442</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,1934)")}>
            <g>
                <rect className={cx("g-node", "g-rep")} x="468.70525650557613" width="18.40148698884758" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="410.51124907063206" width="13.085501858736059" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="396.84924907063197" width="13.085501858736059" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="451.3975539033458" width="11.040892193308549" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="471.5404758364312" width="10.223048327137546" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="399.54093680297393" width="9.814126394052044" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="401.678780669145" width="8.178438661710036" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="527.698624535316" width="6.5427509293680295" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="451.798624535316" width="6.5427509293680295" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="318.42554646840154" width="5.724907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="325.89000743494427" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="460.66200743494426" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="484.23046840148703" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="104.26846840148696" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="439.81246840148697" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="214.62692936802972" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="377.9109293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="331.77692936802976" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="418.8373903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="423.9193903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="449.4613903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="387.94939033457246" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="384.0618513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="460.6878513011153" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="396.080312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="509.60031226765796" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="534.482312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="382.2203122676579" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="105.48231226765807" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="195.110312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="284.540312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="458.6612342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="398.0732342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="533.5052342007434" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="604.4616951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="423.298156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="476.956156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="439.930156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="485.14015613382895" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="438.21415613382896" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="542.164156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="521.3741561338292" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="434.98015613382904" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="474.97615613382897" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="462.4426171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="434.59061710037173" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="398.48861710037175" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="622.0966171003718" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(475.794,0)">
                <text dy=".71em" y="26">+22%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">1956</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Stevenson</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Eisenhower</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="287.1933085501859" dy=".35em">73</text>
                <text className={cx("g-title", "g-rep")} x="582.2639405204462" dy=".35em">457</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,1798)")}>
            <g>
                <rect className={cx("g-node", "g-dem")} x="286.0832565055762" width="18.40148698884758" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="327.087249070632" width="13.085501858736059" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="308.14524907063196" width="13.085501858736059" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="323.29155390334574" width="11.040892193308549" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="368.18447583643126" width="10.223048327137546" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="311.89293680297396" width="9.814126394052044" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="312.64478066914495" width="8.178438661710036" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="190.306624535316" width="6.5427509293680295" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="321.44862453531596" width="6.5427509293680295" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="299.28554646840144" width="5.724907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="323.9100074349443" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="396.1800074349443" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="363.648468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="161.820468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="352.0984684014871" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="374.9409293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="233.83292936802977" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="318.37892936802973" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="375.3433903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="416.9893903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="347.8873903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="183.87739033457248" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="344.06585130111523" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="280.5078513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="281.306312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="311.99631226765797" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="251.34231226765797" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="292.32831226765796" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="447.42831226765804" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="469.274312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="279.128312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="392.92523420074355" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="363.3572342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="488.0972342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="422.03769516728624" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="437.55415613382905" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="379.07815613382905" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="392.806156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="345.682156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="149.26615613382899" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="374.326156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="401.122156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="402.838156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="324.298156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="395.5186171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="328.9906171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="443.56661710037173" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="318.62861710037174" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="314.0746171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="341.7946171003717" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(403.656,0)">
                <text dy=".71em" y="26">+11%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">1960</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Kennedy</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Nixon</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="160.6895910780669" dy=".35em">303</text>
                <text className={cx("g-title", "g-rep")} x="462.23605947955406" dy=".35em">219</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,1662)")}>
            <g>
                <rect className={cx("g-node", "g-dem")} x="75.35817843866172" width="17.583643122676577" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="200.90956133829" width="16.356877323420072" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="124.61863197026025" width="11.858736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="199.68001486988845" width="10.631970260223047" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="153.87601486988854" width="10.631970260223047" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="147.81047583643127" width="10.223048327137546" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="103.94631970260221" width="8.58736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="116.97416356877324" width="6.951672862453531" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="311.9575464684015" width="5.724907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-2.862453531598513" width="5.724907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="246.16200743494423" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="245.37000743494428" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="166.83646840148697" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="278.970468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="142.08646840148702" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="381.996468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="255.08492936802975" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="123.75139033457252" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="657.9553903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="144.7393903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="417.84739033457254" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="140.98385130111524" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="170.02385130111526" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="165.7998513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="92.61231226765798" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="252.464312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="445.77831226765795" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="91.76077323420074" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="658.5687732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="268.97077323420075" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="245.2832342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="145.55723420074352" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="176.44523420074347" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="335.57769516728627" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="294.52569516728624" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="203.91415613382904" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.8178438661710037" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="222.988156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="265.030156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="317.038156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="207.87415613382896" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="149.13415613382898" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="255.13015613382896" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="80.49415613382898" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.8178438661710037" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="216.13061710037178" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="114.16061710037178" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="242.79461710037174" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="119.37461710037176" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.6133828996282528" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="183.06461710037175" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(336.6,0)">
                <text dy=".71em" y="26">+1.0%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">1964</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Johnson</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Goldwater</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="59.87732342007418" dy=".35em">486</text>
                <text className={cx("g-title", "g-rep")} x="363.3327137546469" dy=".35em">52</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,1526)")}>
            <g>
                <rect className={cx("g-node", "g-dem")} x="285.1721784386617" width="17.583643122676577" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="342.1495613382899" width="16.356877323420072" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="300.50863197026024" width="11.858736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="344.0220148698885" width="10.631970260223047" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="339.7320148698884" width="10.631970260223047" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="316.5064758364312" width="10.223048327137546" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="281.35431970260225" width="8.58736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="340.5821635687733" width="6.951672862453531" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="128.34554646840152" width="5.724907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="390.4975464684014" width="5.724907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="395.12400743494425" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="408.52200743494427" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="399.288468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="351.636468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="351.438468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="335.004468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="391.90292936802973" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="296.73739033457247" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="245.19139033457247" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="296.6713903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="317.0653903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="314.23385130111524" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="408.61385130111523" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="368.6838513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="294.308312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="431.918312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="384.332312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="265.8687732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="461.3607732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="270.3567732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="368.7032342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="389.0972342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="333.2612342007436" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="459.39369516728624" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="513.8436951672862" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="388.64815613382893" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="501.64015613382895" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="403.82815613382894" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="409.042156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="116.33215613382903" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="383.10415613382895" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="446.068156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="457.354156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="248.46415613382905" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="189.72415613382904" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="346.7446171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="390.2386171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="383.3086171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="463.03661710037176" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="352.5526171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.6133828996282528" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(460.416,0)">
                <text dy=".71em" y="26">+20%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">1968</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Humphrey</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Nixon</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="211.46840148698888" dy=".35em">191</text>
                <text className={cx("g-title", "g-rep")} x="515.332713754647" dy=".35em">301</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,1390)")}>
            <g>
                <rect className={cx("g-node", "g-rep")} x="409.6352565055762" width="18.40148698884758" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="435.9951003717472" width="16.765799256505574" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="456.3475539033457" width="11.040892193308549" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="542.2200148698886" width="10.631970260223047" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="446.9160148698885" width="10.631970260223047" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="467.1844758364312" width="10.223048327137546" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="420.6803197026023" width="8.58736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="617.6501635687732" width="6.951672862453531" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="490.20416356877325" width="6.951672862453531" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="267.9355464684014" width="5.724907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="595.1040074349442" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="543.6240074349442" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="657.546468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="576.498468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="489.774468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="391.6389293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="578.4253903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="571.9573903345724" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="364.3213903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="485.69539033457255" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="637.6338513011153" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="448.80785130111525" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="516.9198513011153" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="656.384312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="609.920312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="441.42231226765796" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="450.0683122676579" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="658.5687732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="580.4247732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="513.5007732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="535.0892342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="508.4252342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="395.56523420074353" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="580.2992342007434" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="599.5776951672862" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="480.850156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="581.302156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="386.14015613382895" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="601.432156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="521.3741561338289" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="370.036156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="493.91815613382903" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="490.81615613382894" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="461.71015613382906" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="509.96261710037174" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="464.15861710037166" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="484.5526171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="583.7506171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="502.83461710037176" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.6133828996282528" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="502.24061710037176" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(536.316,0)">
                <text dy=".71em" y="26">+31%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">1972</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">McGovern</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Nixon</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="316.1617100371747" dy=".35em">17</text>
                <text className={cx("g-title", "g-rep")} x="619.6171003717473" dy=".35em">520</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,1254)")}>
            <g>
                <rect className={cx("g-node", "g-rep")} x="332.54725650557623" width="18.40148698884758" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="292.37910037174714" width="16.765799256505574" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="306.8575539033457" width="11.040892193308549" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="303.7620148698885" width="10.631970260223047" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="337.6860148698885" width="10.631970260223047" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="323.1064758364312" width="10.223048327137546" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="361.28031970260224" width="8.58736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="340.7801635687733" width="6.951672862453531" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="291.61016356877326" width="6.951672862453531" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="223.71554646840144" width="5.724907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="254.41200743494417" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="377.6340074349443" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="303.588468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="336.32446840148697" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="104.598468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="316.72892936802975" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="242.94739033457253" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="289.8073903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="242.15539033457247" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="287.8273903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="280.77185130111525" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="241.56785130111524" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="353.8338513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="336.35031226765796" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="335.03031226765796" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="242.30031226765803" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="362.420312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="378.39877323420086" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="404.27077323420076" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="316.16077323420075" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="329.82923420074354" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="438.13523420074347" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="130.70723420074353" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="222.2492342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="465.7956951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="334.72615613382897" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="479.398156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="519.196156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="254.73415613382898" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="378.286156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="345.48415613382895" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="312.484156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="338.950156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="403.63015613382896" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="403.30661710037174" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="368.0626171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="458.0206171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="358.1626171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="476.2366171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="293.68061710037176" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.6133828996282528" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(439.36199999999997,0)">
                <text dy=".71em" y="26">+17%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">1976</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Carter</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Ford</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="168.6635687732341" dy=".35em">297</text>
                <text className={cx("g-title", "g-rep")} x="472.7323420074351" dy=".35em">240</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,1118)")}>
            <g>
                <rect className={cx("g-node", "g-rep")} x="431.54725650557623" width="18.40148698884758" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="339.23910037174716" width="16.765799256505574" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="371.4055539033458" width="11.040892193308549" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="416.1600148698884" width="10.631970260223047" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="377.02201486988844" width="10.631970260223047" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="394.84847583643125" width="10.223048327137546" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="368.5403197026022" width="8.58736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="438.85616356877324" width="6.951672862453531" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="415.03016356877316" width="6.951672862453531" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="328.1275464684015" width="5.724907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="448.51800743494425" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="341.3340074349443" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="411.498468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="229.800468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="372.492468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="358.9029293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="301.95139033457247" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="329.8693903345726" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="308.4193903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="363.92539033457246" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="337.79585130111525" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="336.73985130111515" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="409.6038513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="496.86231226765796" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="412.25031226765793" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="391.98831226765793" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="338.46231226765804" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="337.3467732342007" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="486.96877323420074" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="490.66477323420077" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="392.52923420074353" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="299.0072342007434" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="332.7992342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="542.4152342007434" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="589.6116951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="449.23615613382896" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="601.564156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="316.642156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="490.156156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="351.358156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="260.080156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="659.182156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="519.526156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="523.1561561338291" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="513.7906171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="558.2086171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="564.6766171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="579.9886171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="368.7226171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="344.8306171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.6133828996282528" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(543.6419999999999,0)">
                <text dy=".71em" y="26">+32%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">1980</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Carter</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Reagan</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="295.57620817843855" dy=".35em">49</text>
                <text className={cx("g-title", "g-rep")} x="599.6449814126395" dy=".35em">489</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,982)")}>
            <g>
                <rect className={cx("g-node", "g-rep")} x="427.5743345724906" width="19.219330855018587" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="375.505405204461" width="14.721189591078065" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="505.57063197026025" width="11.858736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="373.39847583643115" width="10.223048327137546" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="410.03493680297396" width="9.814126394052044" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="449.1133977695167" width="9.405204460966543" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="528.0623197026023" width="8.58736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="451.2447806691449" width="8.178438661710036" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="464.60262453531595" width="6.5427509293680295" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="485.8080074349443" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="345.7560074349443" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="493.866468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="485.880468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="462.054468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="388.2729293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="435.1329293680298" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="460.0149293680298" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="326.7673903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="413.49139033457254" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="364.18939033457247" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="477.0493903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="464.5818513011153" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="475.07585130111516" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="513.032312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="578.768312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="472.90431226765793" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="515.276312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="377.07231226765805" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="552.1767732342007" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="489.54277323420075" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="408.8907732342007" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="550.7907732342007" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="475.1612342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="398.1392342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="464.0796951672862" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="657.7896951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="604.4616951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="474.71215613382896" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="552.790156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="476.2961561338291" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="578.068156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="403.63015613382896" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="353.206156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="632.5841561338291" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="572.1346171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="460.3966171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="504.08861710037166" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="442.31261710037177" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="608.3686171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="534.2506171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.6133828996282528" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(553.608,0)">
                <text dy=".71em" y="26">+34%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">1984</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Mondale</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Reagan</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="317.7973977695167" dy=".35em">13</text>
                <text className={cx("g-title", "g-rep")} x="621.6617100371751" dy=".35em">525</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,846)")}>
            <g>
                <rect className={cx("g-node", "g-rep")} x="343.95233457249066" width="19.219330855018587" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="295.57940520446095" width="14.721189591078065" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="407.2306319702602" width="11.858736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="340.1344758364312" width="10.223048327137546" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="338.886936802974" width="9.814126394052044" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="396.90739776951676" width="9.405204460966543" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="473.28231970260225" width="8.58736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="378.05078066914496" width="8.178438661710036" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="416.75262453531604" width="6.5427509293680295" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="434.65800743494424" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="275.5320074349443" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="462.91246840148705" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="460.536468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="461.19646840148704" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="435.59492936802974" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="303.9249293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="354.0189293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="317.4613903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="395.34139033457257" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="281.68939033457247" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="347.16139033457245" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="404.98385130111524" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="455.60585130111525" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="260.97831226765794" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="486.23631226765804" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="362.0903122676579" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="438.254312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="379.71231226765804" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="415.8867732342007" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="468.55477323420075" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="465.98077323420074" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="297.74677323420076" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="422.36123420074347" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="297.4892342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="361.71369516728623" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="467.2476951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="554.4996951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="251.89615613382898" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="501.244156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="266.35015613382893" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="501.83815613382905" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="467.386156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="404.818156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="367.92415613382894" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="415.58261710037175" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="478.0186171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="483.2986171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="411.2266171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="371.2306171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="352.61861710037175" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.6133828996282528" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(469.986,0)">
                <text dy=".71em" y="26">+21%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">1988</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Dukakis</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Bush</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="263.8141263940519" dy=".35em">111</text>
                <text className={cx("g-title", "g-rep")} x="567.6784386617102" dy=".35em">426</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,710)")}>
            <g>
                <rect className={cx("g-node", "g-dem")} x="230.5191078066915" width="22.081784386617098" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="218.64278810408928" width="13.49442379182156" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="346.425249070632" width="13.085501858736059" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="337.36247583643114" width="10.223048327137546" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="265.76539776951677" width="9.405204460966543" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="231.5178587360595" width="8.996282527881041" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="313.62831970260225" width="8.58736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="277.5457026022305" width="7.360594795539033" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="311.2910855018587" width="6.133828996282528" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="332.35154646840147" width="5.724907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="356.2500074349442" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="323.4480074349443" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="367.93846840148694" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="205.38046840148698" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="252.24692936802975" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="260.76092936802974" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="299.04092936802977" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="297.06092936802975" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="234.36739033457246" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="251.1973903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="297.73385130111524" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="372.8418513011151" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="307.17831226765804" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="341.2343122676579" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="300.2483122676579" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="385.32231226765794" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="382.0883122676579" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="285.926312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="288.8367732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="262.8987732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="387.37477323420075" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="362.6972342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="211.75523420074344" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="452.4636951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="442.3656951672862" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="243.04569516728625" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="272.48169516728626" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="254.00815613382898" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="311.824156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="273.87415613382893" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="321.13015613382896" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="419.008156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="210.250156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="312.8206171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="366.34661710037176" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="225.83261710037175" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="389.9086171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="408.8506171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="352.61861710037164" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="275.3326171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.6133828996282528" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(342.86999999999995,0)">
                <text dy=".71em" y="26">+1.9%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">1992</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Clinton</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Bush</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="125.31226765799252" dy=".35em">370</text>
                <text className={cx("g-title", "g-rep")} x="429.1765799256505" dy=".35em">168</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,574)")}>
            <g>
                <rect className={cx("g-node", "g-dem")} x="233.88510780669145" width="22.081784386617098" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="132.77678810408918" width="13.49442379182156" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="355.995249070632" width="13.085501858736059" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="287.2684758364312" width="10.223048327137546" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="264.5773977695167" width="9.405204460966543" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="209.93585873605952" width="8.996282527881041" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="283.73031970260223" width="8.58736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="239.13370260223044" width="7.360594795539033" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="209.0570855018587" width="6.133828996282528" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="358.0915464684014" width="5.724907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="340.2120074349443" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="335.06400743494424" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="107.23846840148697" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="364.37446840148704" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="244.98692936802973" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="311.8449293680298" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="259.5729293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="286.17092936802976" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="221.43139033457248" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="222.48739033457252" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="374.0958513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="248.49785130111525" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="379.91031226765796" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="208.640312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="313.64631226765795" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="368.228312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="322.02831226765795" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="337.406312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="362.42677323420077" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="275.17477323420076" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="260.3247732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="216.9692342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="448.9592342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="452.3976951672862" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="468.03969516728625" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="231.62769516728622" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="280.66569516728623" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="322.45015613382895" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="263.51215613382897" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="191.50615613382902" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="162.26815613382897" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="451.480156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="112.10815613382901" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="182.47061710037178" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="348.39461710037176" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="414.9886171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="445.0846171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="228.80261710037172" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="374.3326171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="352.2226171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.6133828996282528" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(315.282,0)">
                <text dy=".71em" y="26">+2.2%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">1996</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Clinton</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Dole</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="123.131970260223" dy=".35em">379</text>
                <text className={cx("g-title", "g-rep")} x="426.996282527881" dy=".35em">159</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,438)")}>
            <g>
                <rect className={cx("g-node", "g-dem")} x="241.07910780669147" width="22.081784386617098" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="158.38478810408918" width="13.49442379182156" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="464.169249070632" width="13.085501858736059" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="324.9544758364312" width="10.223048327137546" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="297.77539776951676" width="9.405204460966543" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="246.16985873605944" width="8.996282527881041" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="348.87231970260217" width="8.58736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="292.39570260223053" width="7.360594795539033" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="222.3890855018587" width="6.133828996282528" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="411.81554646840146" width="5.724907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="380.3400074349443" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="404.49600743494426" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="147.366468401487" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="430.77046840148705" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="326.29892936802975" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="353.2929293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="290.9889293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="349.7949293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="312.04939033457254" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="219.78139033457248" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="426.3678513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="378.78185130111524" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="369.81231226765794" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="213.06231226765803" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="472.772312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="428.22231226765797" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="383.5403122676579" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="433.43631226765797" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="326.45677323420074" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="325.66477323420077" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="440.2407732342007" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="364.7432342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="466.0532342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="370.7556951672862" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="328.5816951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="520.3776951672862" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="596.2116951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="137.25415613382899" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="208.204156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="352.5461561338291" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="337.564156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="295.39015613382895" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="590.0801561338291" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="479.47061710037167" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="494.91461710037174" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="511.6126171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="263.84861710037177" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="533.6566171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="243.19061710037175" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="593.7826171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.6133828996282528" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(371.448,0)">
                <text dy=".71em" y="26">+6.3%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">2000</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Gore</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Bush</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="185.43122676579918" dy=".35em">266</text>
                <text className={cx("g-title", "g-rep")} x="489.2955390334572" dy=".35em">271</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,302)")}>
            <g>
                <rect className={cx("g-node", "g-dem")} x="253.08464684014868" width="22.4907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="473.9903271375465" width="13.903345724907062" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="202.94771003717472" width="12.676579925650557" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="357.54555390334576" width="11.040892193308549" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="309.20631970260223" width="8.58736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="257.4623197026022" width="8.58736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="339.7707806691449" width="8.178438661710036" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="303.9521635687733" width="6.951672862453531" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="409.03708550185877" width="6.133828996282528" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="282.84508550185876" width="6.133828996282528" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="436.49308550185873" width="6.133828996282528" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="381.4620074349442" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="161.49046840148702" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="464.2389293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="280.36292936802977" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="421.9329293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="375.2709293680296" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="396.9913903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="325.44739033457245" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="242.28739033457254" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="304.98739033457247" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="358.9818513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="423.8598513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="497.2518513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="459.4403122676579" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="441.09231226765803" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="332.9907732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="301.1127732342007" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="534.0927732342006" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="260.19277323420073" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="393.1892342007436" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="496.28123420074354" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="458.7272342007434" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="548.2296951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="334.19169516728624" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="629.5416951672862" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="413.8536951672862" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="346.0716951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="269.848156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="271.432156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="320.1401561338289" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="192.23215613382897" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="580.774156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="498.0166171003718" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="471.0886171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="509.96261710037174" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="196.46261710037177" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="279.22661710037175" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="464.75261710037176" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="592.0006171003716" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.6133828996282528" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(399.036,0)">
                <text dy=".71em" y="26">+10%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">2004</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Kerry</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Bush</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="193.0650557620817" dy=".35em">251</text>
                <text className={cx("g-title", "g-rep")} x="496.92936802973975" dy=".35em">286</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,166)")}>
            <g>
                <rect className={cx("g-node", "g-dem")} x="160.1566468401487" width="22.4907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="400.66432713754654" width="13.903345724907062" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="146.4517100371747" width="12.676579925650557" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="305.93355390334574" width="11.040892193308549" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="257.59431970260226" width="8.58736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="159.9803197026022" width="8.58736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="295.6827806691449" width="8.178438661710036" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="218.02016356877323" width="6.951672862453531" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="324.8210855018587" width="6.133828996282528" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="361.2530855018588" width="6.133828996282528" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="224.4350855018587" width="6.133828996282528" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="285.7620074349443" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="157.20046840148697" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="328.60892936802975" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="215.0229293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="320.9529293680298" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="427.1469293680298" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="159.9853903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="260.3713903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="236.14939033457247" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="383.92339033457256" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="269.08985130111523" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="451.11785130111525" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="470.5878513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="387.5663122676579" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="435.416312267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="265.60477323420076" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="220.6587732342007" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="180.92677323420074" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="535.1487732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="415.76123420074344" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="427.3112342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="459.8492342007434" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="415.37169516728625" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="427.51569516728625" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="513.9756951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="246.47769516728624" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="229.1196951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="265.756156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="214.80415613382897" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="496.162156133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="30.40015613382904" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="145.70215613382896" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="85.12061710037176" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="384.8926171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="471.48461710037174" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.6133828996282528" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="386.47661710037175" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="164.51861710037178" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="345.09461710037175" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="542.1706171003717" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(385.9680000000001,0)">
                <text dy=".71em" y="26">+8.5%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">2008</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Obama</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">McCain</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="133.76579925650552" dy=".35em">365</text>
                <text className={cx("g-title", "g-rep")} x="438.03903345724905" dy=".35em">173</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
        <g className={cx("g-year")} transform={cp("translate(0,30)")}>
            <g>
                <rect className={cx("g-node", "g-dem")} x="183.11144684014872" width="22.4907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="426.78108327137545" width="15.539033457249069" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="147.1972319702602" width="11.858736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="320.3350319702603" width="11.858736059479554" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="291.465380669145" width="8.178438661710036" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="218.77298066914503" width="8.178438661710036" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="313.81930260223044" width="7.360594795539033" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="379.838824535316" width="6.5427509293680295" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="271.117024535316" width="6.5427509293680295" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="341.22868550185876" width="6.133828996282528" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="215.1751464684015" width="5.724907063197026" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="307.5948074349442" width="5.315985130111524" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="245.23786840148702" width="4.907063197026022" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="462.8595293680297" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="403.6839293680298" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="397.16312936802973" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="175.16552936802978" width="4.4981412639405205" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="391.4209903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="161.98519033457254" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="283.8805903345725" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="277.87459033457253" width="4.089219330855018" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="399.98105130111514" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="475.0824513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="297.7668513011152" width="3.6802973977695164" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="442.2407122676579" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="478.065512267658" width="3.2713754646840147" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="549.9195732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="262.7799732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="215.4249732342008" width="2.862453531598513" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="285.44423420074355" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="484.7246342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="291.4040342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="644.9330342007435" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="406.32323420074346" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="474.5870342007436" width="2.453531598513011" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="263.7762951672862" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="478.92309516728625" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="505.9434951672863" width="2.044609665427509" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="47.05195613382895" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="291.35755613382895" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="228.36055613382894" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="145.39855613382895" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="539.966356133829" width="1.6356877323420074" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="206.47481710037178" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="418.69781710037165" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="448.35161710037175" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="459.5980171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="415.9786171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="92.53901710037174" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-rep")} x="601.9006171003717" width="1.2267657992565055" height="20"></rect>
                <rect className={cx("g-node", "g-dem")} x="-0.6133828996282528" width="1.2267657992565055" height="20"></rect>
            </g>
            <g className={cx("g-result")} transform="translate(405.93300000000005,0)">
                <text dy=".71em" y="26">+12%</text>
            </g>
            <text className={cx("g-label")} x="670" y="10" dy=".35em">2012</text>
            <text className={cx("g-title", "g-dem")} x="320" y="-8">Obama</text>
            <text className={cx("g-title", "g-rep")} x="340" y="-8">Romney</text>
            <g className={cx("g-votes")} transform="translate(0,10)" style={tostyle("fill-opacity: 1e-06")}>
                <text className={cx("g-title", "g-dem")} x="149.85130111524163" dy=".35em">303±29</text>
                <text className={cx("g-title", "g-rep")} x="453.51115241635677" dy=".35em">206±29</text>
            </g>
            <rect className={cx("g-overlay")} x="-20" y="-6" width="680" height="32"></rect>
        </g>
    </g>
  </svg>
  </div>)
}

Graph.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
}

export default Graph;