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
  RadarChart,
  LineChart } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

const InformationExplanation = ({explanation}) => {

  return (
    <div className={cx('information-explanation')}>
      <ul className={cx('list-unstyled')}>
        {_.map(explanation, ({tag, score, rNew, rExisting, interest, information, increase, divergence}, idx) => {
          const iconcss = increase < 0 ? 'icon-arrow-down' : 'icon-arrow-up'
          const percss = increase < 0 ? 'text-danger' : 'text-success'
          const scorecss = score < 0 ? 'text-danger' : 'text-success'
          const slow = score < 0 && (divergence < .5) ? '(LOW)' : ''
          const nlow = score < 0 && (rNew < 15) ? '(LOW)' : ''
          const elow = score < 0 && (rExisting < 15) ? '(LOW)' : ''
          return <li key={idx} className={cx('row')}>
            <h2 className={cx('col-md-2', scorecss)}>{score > 0 ? '+' : ''}{score}</h2>
            <div className={cx('expln-stat', 'col-md-10')}>
              <h3>{_.startCase(tag)}</h3>
              <p>Information effective for interest: <span className={cx('v')}>{divergence} {slow}</span></p>
              <p>Affected <span className={cx('v')}>{rExisting}% {elow}</span> of Existing and <span className={cx('v')}>{rNew}% {nlow}</span> of New Users</p>
              <p><span className={cx(percss)}><i className={cx(iconcss)}/>{increase}%</span> from last week</p>
            </div>
          </li>
        })}
      </ul>
    </div>
  )
}

InformationExplanation.propTypes = {
  explanation: PropTypes.array.isRequired
}

export default InformationExplanation