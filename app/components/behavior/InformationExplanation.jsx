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
          return <li key={idx} className={cx('row')}>
            <h2 className={cx('col-md-2', scorecss)}>{score > 0 ? '+' : ''}{score}</h2>
            <div className={cx('expln-stat', 'col-md-10')}>
              <h3>{_.startCase(tag)}</h3>
              <p>Effectiveness of content: <span className={cx('v')}>{divergence}</span></p>
              <p>Affected <span className={cx('v')}>{rExisting}%</span> of Existing and <span className={cx('v')}>{rNew}%</span> of New Users</p>
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