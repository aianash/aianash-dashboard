import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'

export default class LineChart extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.initializeChart(this.props)
  }

  componentWillUnmount() {
    this.state.chart.destroy()
  }

  initializeChart(props) {
    const Chart = require('chart.js')
    const ctx = this.refs.canvass.getContext('2d')
    const chart = new Chart(ctx, {
      type: 'line',
      data: props.data,
      maintainAspectRatio: false,
      responsive: true,
      options: {
        legend: {
          display: false
        },
        scales: {
          display: false,
          gridLines: {
            display: false
          }
        }
      }
    })
    this.setState({chart})
  }

  render() {
    return (<canvas ref='canvass'></canvas>)
  }
}