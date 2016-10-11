import React, { Component, PropTypes } from 'react'
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

export default class TrailTimeseries extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    trail: PropTypes.array.isRequired,
    forks: PropTypes.array.isRequired,
    colors: PropTypes.object.isRequired
  }

  render() {
    const {trail, forks, colors} = this.props
    const timeline = _.map(Array(15), (v, idx) =>
      moment().add(-idx, 'days').format('MMM Do')
    ).reverse()

    const datasets = [
      {
        label : 'Total Users - Original Trail',
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
        pointHitRadius: 10,
        data: trail,
        spanGaps: false,
      }
    ]

    const forkDatasets = _.map(forks, (fork, idx) => {
      return {
        label: _.startCase(fork.divergedFrom),
        fill: false,
        lineTension: 0,
        backgroundColor: colors[fork.divergedFrom].getRGBA(0.4),
        borderColor: colors[fork.divergedFrom].getRGBA(0.4),
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
        pointHitRadius: 10,
        data: fork.timeseries,
        spanGaps: false,
      }
    })

    const data = {
      labels: timeline,
      datasets: _.concat(datasets, forkDatasets),
    }

    return (
      <Widget>
        <WidgetContent>
          <LineChart height="14" data={data}/>
        </WidgetContent>
      </Widget>
    )
  }
}