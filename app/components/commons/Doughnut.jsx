import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'

export default class Doughnut extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    data: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.initializeChart(this.props)
  }

  initializeChart(props) {
    const Chart = require('chart.js')
    const ctx = this.refs.canvass.getContext('2d')
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: props.data,
      options: {
        legend: {
          display: false
        }
      }
    })
    this.setState({chart})
  }

  render() {
    return (<canvas ref='canvass' width="100" height="100"></canvas>)
  }
}