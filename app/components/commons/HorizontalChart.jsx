import React, { PropTypes, Component } from 'react'
import styles from 'css/main'
import _ from 'lodash'
import {
  Row,
  Column,
  Heading,
  Widget,
  WidgetHeading,
  WidgetContent,
  Doughnut,
  InlineStat,
  RadarChart } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

//
const HorizontalChart = ({className, data, titles, left}) => {
  left = !!left
  return (
    <div className={cx('horiz-chart', {left}) + ' ' + (className && '')}>
      <table className={cx('table', 'table-compressed')}>
        <thead>
          <tr>
            <th>{left ? titles[0] : titles[1]}</th>
            <th>{left ? titles[1] : titles[0]}</th>
          </tr>
        </thead>
        <tbody>
          {_.map(data, (entry, idx) => {
            const arr = [
              <td>
                <div className={cx('progress', 'compressed')}>
                  <div className={cx('progress-bar')} role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: (entry.value + '%')}}>
                    {entry.value}
                  </div>
                </div>
              </td>,
              <td>{_.startCase(entry.label)}</td>
            ]
            return (
              <tr key={idx}>
                {left ? arr[0] : arr[1]}
                {left ? arr[1] : arr[0]}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

HorizontalChart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
  left: PropTypes.bool
}

export default HorizontalChart