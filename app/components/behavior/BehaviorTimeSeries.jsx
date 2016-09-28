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

export default class BehaviorTimeSeries extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    information: PropTypes.object.isRequired,
    behaviorId: PropTypes.string,
    forDate: PropTypes.object,
    pageId: PropTypes.string,
    instanceId: PropTypes.string
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {instanceId, pageId, forDate, behaviorId, information} = nextProps
    if(_.isEmpty(this.props.information.information) &&
        !_.isEmpty(information.information)) return true
    if(this.props.behaviorId === 'ALL') {
      if(pageId && pageId === this.props.pageId &&
         forDate && forDate.isSame(this.props.forDate) &&
         instanceId && instanceId === this.props.instanceId) {
        if(_.isEmpty(information.information)) return true
        else return false
      }
      else return true
    } else return true
  }

  render() {
    const {information, behaviorId} = this.props
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
            label : 'Engagement Score for - ' + behavior.name,
            fill : true,
            lineTension: 0,
            backgroundColor: 'rgba(26, 188, 156,.4)',
            borderColor: 'rgba(26, 188, 156,.4)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(26, 188, 156,.4)',
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(26, 188, 156,.4)',
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            // pointRadius: 1,
            pointHitRadius: 10,
            data: bdata,
            spanGaps: false,
            // yAxisID: 'y-axis-1'
          },
          {
            label : 'Avg User Engagement Score',
            fill : false,
            lineTension: 0,
            backgroundColor: 'rgba(211, 84, 0,.4)',
            borderColor: 'rgba(211, 84, 0,.4)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(211, 84, 0,.4)',
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(211, 84, 0,.4)',
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            // pointRadius: 1,
            pointHitRadius: 10,
            data: avg,
            spanGaps: false,
            // yAxisID: 'y-axis-1'
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
        // let lc = _.fill(Array(15), 0)

        _.forEach(information.information, (behavior) => {
          behavior.timeseries.forEach((v, idx) => avg[idx] += v)
          // behavior.conversionseries.forEach((v, idx) => lc[idx] += v)
          avg[14] += behavior.information.effectiveness
        })

        avg = _.map(avg, (v) => _.round(v / 4.0, 2))
        // lc = _.map(lc, (v) => _.round(v / 4.0, 2))
        // console.log(lc)
        const datasets = [
          {
            label : 'Avg User Engagement Score',
            fill : true,
            lineTension: 0,
            backgroundColor: 'rgba(211, 84, 0,.4)',
            borderColor: 'rgba(211, 84, 0,.4)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(211, 84, 0,.4)',
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(211, 84, 0,.4)',
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            // pointRadius: 1,
            pointHitRadius: 10,
            data: avg,
            spanGaps: false,
            // yAxisID: "y-axis-1",
          },
          // {
          //   label : 'Total Visitors',
          //   fill : false,
          //   lineTension: 0,
          //   backgroundColor: 'rgba(231, 76, 60,.7)',
          //   borderColor: 'rgba(231, 76, 60,.7)',
          //   borderCapStyle: 'butt',
          //   borderDash: [],
          //   borderDashOffset: 0.0,
          //   borderJoinStyle: 'miter',
          //   pointBorderColor: 'rgba(231, 76, 60,.7)',
          //   pointBackgroundColor: "#fff",
          //   pointBorderWidth: 1,
          //   pointHoverRadius: 5,
          //   pointHoverBackgroundColor: 'rgba(231, 76, 60,.7)',
          //   pointHoverBorderColor: "rgba(220,220,220,1)",
          //   pointHoverBorderWidth: 2,
          //   // pointadius: 1,
          //   pointHitRadius: 10,
          //   data: lc,
          //   spanGaps: false,
          //   yAxisID: "y-axis-2",
          // }
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
}