import React, { PropTypes, Component } from 'react'
import styles from 'css/main'
import _ from 'lodash'
import moment from 'moment'
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

const BehaviorTimeSeries = ({information, behaviorId}) => {
  const timeline = _.map(Array(15), (v, idx) =>
    moment().add(-idx, 'days').format('MMM Do')
  ).reverse()
  if(information.information) {
    if(behaviorId !== 'ALL') {
      let avg = _.fill(Array(15), 0)

      _.forEach(information.information, (behavior) => {
        behavior.timeseries.forEach((v, idx) => avg[idx] += v)
        avg[14] += behavior.information.effectiveness
      })

      avg = _.map(avg, (v) => _.round(v / 4.0, 2))

      const behavior = _.find(information.information, {behaviorId})
      const bdata = _.concat(behavior.timeseries, behavior.information.effectiveness)

      const datasets = [
        {
          label : 'Effectiveness for ' + behavior.name,
          fill : true,
          lineTension: 0,
          backgroundColor: 'rgba(52,152,219,.7)',
          borderColor: 'rgba(52,152,219,.7)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(52,152,219,.7)',
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(52,152,219,.7)',
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          // pointRadius: 1,
          pointHitRadius: 10,
          data: bdata,
          spanGaps: false
        },
        {
          label : 'Avg Information Effectiveness',
          fill : false,
          lineTension: 0,
          backgroundColor: 'rgba(44, 62, 80,.7)',
          borderColor: 'rgba(44, 62, 80,.7)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(44, 62, 80,.7)',
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(44, 62, 80,.7)',
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          // pointRadius: 1,
          pointHitRadius: 10,
          data: avg,
          spanGaps: false
        }
      ]
      const data = {
        labels: timeline,
        datasets,
      }

      return (
        <Widget className={cx('behavior-timeseries')}>
          <WidgetContent>
            <LineChart height="30" data={data}/>
          </WidgetContent>
        </Widget>
      )
    } else {
      let avg = _.fill(Array(15), 0)

      _.forEach(information.information, (behavior) => {
        behavior.timeseries.forEach((v, idx) => avg[idx] += v)
        avg[14] += behavior.information.effectiveness
      })

      avg = _.map(avg, (v) => _.round(v / 4.0, 2))
      const datasets = [
        {
          label : 'Avg Information Effectiveness',
          fill : true,
          lineTension: 0,
          backgroundColor: 'rgba(44, 62, 80,.7)',
          borderColor: 'rgba(44, 62, 80,.7)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(44, 62, 80,.7)',
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(44, 62, 80,.7)',
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          // pointRadius: 1,
          pointHitRadius: 10,
          data: avg,
          spanGaps: false
        }
      ]
      const data = {
        labels: timeline,
        datasets,
      }

      return (
        <Widget className={cx('behavior-timeseries', 'all')}>
          <WidgetContent>
            <LineChart height="14" data={data}/>
          </WidgetContent>
        </Widget>
      )
    }
  }
  return <div></div>
}

BehaviorTimeSeries.propTypes = {
  information: PropTypes.object.isRequired,
  behaviorId: PropTypes.string
}

export default BehaviorTimeSeries