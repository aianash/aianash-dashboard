import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Container, Row, Column, Separator } from 'components/commons'
import styles from 'css/main'
import * as actions from 'actions'
import {TrailQuery, TrailTimeseries, Trails} from 'components/trail'

const cx = require('classnames/bind').bind(styles)

const eventMapper = (event) => `${event.name}`

class Color {
  constructor(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
  }

  getRGB() {
    return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')'
  }

  getRGBA(a) {
    return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + a + ')'
  }
}

class ColorGenerator {
  constructor() {
    this.idx = 0
    this.colors = [
        new Color(52, 152, 219),
        new Color(155, 89, 182),
        new Color(52, 73, 94),
        new Color(230, 126, 34),
        new Color(241, 196, 15),
        new Color(231, 76, 60),
        new Color(127, 140, 141)
      ]
  }

  next() {
    if(this.idx < this.colors.length - 1) {
      return this.colors[this.idx++]
    } else {
      this.idx = 0
      return this.colors[this.idx++]
    }
  }
}

//
class Trail extends Component {
  constructor(props) {
    super(props)

    this.refreshEvents = this.refreshEvents.bind(this)
    this.loadEventProperties = this.loadEventProperties.bind(this)
    this.onShowTrail = this.onShowTrail.bind(this)
    this.fork = this.fork.bind(this)
    this.colorGenerator = new ColorGenerator()
  }

  static propTypes = {
    events: PropTypes.object.isRequired,
    trail: PropTypes.object.isRequired,
    forks: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  state = {
    fcntr: 0,
    query: {},
    colors: {}
  }

  componentDidMount() {
    if(_.isEmpty(this.props.events.entities)) this.refreshEvents()
  }

  //////////////
  // Handlers //
  //////////////

  //
  refreshEvents() {
    const {dispatch} = this.props
    dispatch(actions.events.load())
  }

  //
  loadEventProperties(name) {
    const {dispatch} = this.props
    dispatch(actions.events.load({name}))
  }

  //
  onShowTrail(query) {
    const {dispatch} = this.props
    this.setState({query})
    dispatch(actions.trail.search({query}))
  }

  //
  fork(action) {
    const fcntr = this.state.fcntr + 1
    const query = _.merge(this.state.query, {isfork: true, _fid: fcntr, fork: action.name})
    const colors = this.state.colors
    colors[action.name] = this.colorGenerator.next()
    this.setState({fcntr, colors})
    this.props.dispatch(actions.trail.search({query}))
  }

  //
  render() {
    const {events, trail, forks} = this.props
    const forkTimeseries = _.map(forks, f => {return {timeseries: f.timeseries, divergedFrom: f.divergedFrom}})

    return (
      <Container fluid={true}>
        <TrailQuery actions={events}
                    loadActionProperties={this.loadEventProperties}
                    onShowTrail={this.onShowTrail}
                    mapper={eventMapper}/>
        <TrailTimeseries trail={trail.timeseries || []} forks={forkTimeseries} colors={this.state.colors}/>
        <Trails trail={trail} forks={forks} fork={this.fork} colors={this.state.colors}/>
      </Container>
    )
  }
}

//
function mapStateToProps(state) {
  const {events, forks, trail} = state.trails
  let filteredforks = {}
  _.forEach(forks, (f, k) => {
    if(f.isfork) filteredforks[k] = f
  })

  return {
    events,
    trail,
    forks: filteredforks
  }
}

export default connect(mapStateToProps)(Trail)