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
  RadarChart } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

const priorConfig = {
  label: 'Users Interest',
  backgroundColor: 'rgba(44, 62, 80,.5)',
  borderColor: 'rgba(44, 62, 80,1.0)',
  pointBackgroundColor: 'rgba(44, 62, 80,1.0)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgba(44, 62, 80,1.0)'
}

const posteriorConfig = {
  label: 'Information Led To Conversion',
  backgroundColor: 'rgba(52, 152, 219, 0.6)',
  borderColor: 'rgba(52, 152, 219, 1)',
  pointBackgroundColor: 'rgba(52, 152, 219, 1)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
}


//
const BehaviorInformation = (props) => {
  const {prior, posterior} = props.information
  const priors = _.keys(prior)
  const posteriors = _.keys(posterior)
  const all = _.uniq([...priors, ...posteriors])

  const information = all.map(t => {
    return {
      tag: t,
      prm: _.get(prior, t, 0),
      pom: _.get(posterior, t, 0)
    }
  })

  const data = {
    labels: _.map(information, (t) => _.startCase(t.tag)) || [],
    datasets: [
      {
        ...priorConfig,
        data: _.map(information, (t) => t.prm.mean) || []
      },
      {
        ...posteriorConfig,
        data: _.map(information, (t) => t.pom.mean) || []
      }
    ]
  }

  return (
    <WidgetContent className={cx('story-information-cont')}>
      <div className={cx('timeline-information-island')}>
        <RadarChart data={data}/>
      </div>
      <div className={cx('timeline-information-bar')}>
        <Heading title='INFORMATION EFFECTIVENESS PER USER INTEREST'/>
        <table>
          <thead>
            <tr>
              <th>USERS INTEREST</th>
              <th></th>
              <th>INFORMATION EFFECTIVENESS</th>
            </tr>
          </thead>
          <tbody>
            {_.map(information, (t) =>
              <tr key={t.tag}>
                <td>
                  <div className={cx('progress', 'compressed')}>
                    <div className={cx('progress-bar', 'pull-right')} role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: (t.prm.mean + '%')}}>
                      {t.prm.mean}
                    </div>
                  </div>
                </td>
                <td className={cx('tag')}>{_.startCase(t.tag)}</td>
                <td>
                  <div className={cx('progress', 'compressed')}>
                    <div className={cx('progress-bar')} role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: (t.pom.mean + '%')}}>
                      {t.pom.mean}
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </WidgetContent>
  )
}

BehaviorInformation.propTypes = {
  information: PropTypes.object.isRequired
}

export default BehaviorInformation