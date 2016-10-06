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
    <Widget>
      <WidgetHeading title='User Engagement Score Breakdown' compressed/>
      <WidgetContent>
          <Row>
            {_.map(explanation, ({tag, score, rNew, rExisting, interest, information, increase, divergence}, idx) => {
              const iconcss = increase < 0 ? 'icon-arrow_downward' : 'icon-arrow_upward'
              const percss = increase < 0 ? 'text-danger' : 'text-success'
              const scorecss = score < 0 ? 'text-danger' : 'text-success'
              const slow = score < 0 && (divergence < .5) ? '(LOW)' : ''
              const nlow = score < 0 && (rNew < 15) ? '(LOW)' : ''
              const elow = score < 0 && (rExisting < 15) ? '(LOW)' : ''
              return <div key={idx} className={cx('col-md-4')}>
                <h2 className={cx('score', scorecss)}>{score > 0 ? '+' : ''}{score}</h2>
                <div className={cx('expln-stat')}>
                  <h3>{_.startCase(tag)}</h3>
                  <p>Interest Conversion Rate: <span className={cx('v')}>{divergence} {slow}</span></p>
                  <p>Affected <span className={cx('v')}>{rExisting}% {elow}</span> of Existing and <span className={cx('v')}>{rNew}% {nlow}</span> of New Users</p>
                  <p><span className={cx(percss)}><i className={cx(iconcss)}/>{increase}%</span> from last week</p>
                </div>
              </div>
            })}
          </Row>
      </WidgetContent>
    </Widget>
  )
}

InformationExplanation.propTypes = {
  explanation: PropTypes.array.isRequired
}

export default InformationExplanation