import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'

export default class RadarChart extends Component {
  constructor(props) {
    super(props)
    this.initializeChart = this.initializeChart.bind(this)
  }

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  state = {}

  componentDidMount() {
    if(this.props.data.labels.length !== 0)
      this.initializeChart(this.props)
  }

  componentWillUnmount() {
    this.state.chart.destroy()
  }

  componentWillReceiveProps(nextProps) {
    const {chart} = this.state
    if(chart) chart.destroy()
    this.initializeChart(nextProps)
  }

  addData(nextProps, chart, setIndex, pointIndex) {
    var values = [];
    nextProps.data.datasets.forEach((set) => {
      values.push(set.data[pointIndex]);
    })
    chart.addData(values, nextProps.data.labels[setIndex]);
  }

  initializeChart(props) {
    const Chart = require('chart.js')
    const ctx = this.refs.canvass.getContext('2d')
    const chart = new Chart(ctx, {
      type: 'radar',
      data: props.data
    })
    this.setState({chart})
  }

  render() {
    return (<canvas ref='canvass' width="100" height="100"></canvas>)
  }
}