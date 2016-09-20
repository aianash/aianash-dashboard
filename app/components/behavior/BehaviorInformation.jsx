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
  label: 'Interest of users before visit',
  backgroundColor: 'rgba(179,181,198,0.2)',
  borderColor: 'rgba(179,181,198,1)',
  pointBackgroundColor: 'rgba(179,181,198,1)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgba(179,181,198,1)'
}

const posteriorConfig = {
  label: 'Information gained after visit',
  backgroundColor: 'rgba(255,99,132,0.2)',
  borderColor: 'rgba(255,99,132,1)',
  pointBackgroundColor: 'rgba(255,99,132,1)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgba(255,99,132,1)'
}

//
export default class BehaviorInformation extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    information: PropTypes.object.isRequired
  }

  render() {
    const {prior, posterior} = this.props.information
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
        <div className={cx('behavior-information-bar')}>
          <Heading title='HOW USERS GAINED INFORMATION'/>
          <table>
            <thead>
              <tr>
                <th>RELATIVE INTEREST BEFORE VISIT</th>
                <th></th>
                <th>INFORMATION GAINED AFTER VISIT</th>
              </tr>
            </thead>
            <tbody>
              {_.map(information, (t) =>
                <tr key={t.tag}>
                  <td>
                    <div className={cx('progress')}>
                      <div className={cx('progress-bar', 'pull-right')} role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: (t.prm.mean + '%')}}>
                        {t.prm.mean}
                      </div>
                    </div>
                  </td>
                  <td className={cx('tag')}>{_.startCase(t.tag)}</td>
                  <td>
                    <div className={cx('progress')}>
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
        <div className={cx('behavior-information-island')}>
          <RadarChart data={data}/>
        </div>
      </WidgetContent>
    )
  }
}