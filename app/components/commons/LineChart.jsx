import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'

export default class LineChart extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    data: PropTypes.object.isRequired,
    height: PropTypes.string
  }

  state = {}

  componentDidMount() {
    this.initializeChart(this.props)
  }

  componentWillUnmount() {
    this.state.chart.destroy()
  }

  componentWillReceiveProps(nextProps) {
    const {chart} = this.state
    // if(chart) chart.destroy()
    if(nextProps.data.labels.length !== 0) {
      if(chart) {
        this.updateChart(chart, nextProps.data)
      } else this.initializeChart(nextProps)
    }
  }


  initializeChart(props) {
    const Chart = require('chart.js')
    const ctx = this.refs.canvass.getContext('2d')
    const chart = new Chart(ctx, {
      type: 'line',
      data: props.data,
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 0.3,
            max: 1,
            min: 0
          }
        },
        {
          ticks: {
            stepSize: 0.3,
            max: 1,
            min: 0
          }
        },
        {
          ticks: {
            stepSize: 0.3,
            max: 1,
            min: 0
          }
        },
        {
          ticks: {
            stepSize: 0.3,
            max: 1,
            min: 0
          }
        }]
      }
    })
    this.setState({chart})
  }

  updateChart(chart, data) {
    chart.data.labels = data.labels
    chart.data.datasets = data.datasets
    chart.update()
  }

  render() {
    return (<canvas ref='canvass' height={this.props.height + 'px'} width="100%"></canvas>)
  }
}