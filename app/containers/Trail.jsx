import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Container, Row, Column, Separator } from 'components/commons'
import styles from 'css/main'
import * as actions from 'actions'
import {TrailQuery, TrailTimeseries, Trails} from 'components/trail'

const cx = require('classnames/bind').bind(styles)

const eventMapper = (event) => {
    return `${event.name}`
  }

//
class Trail extends Component {
  constructor(props) {
    super(props)

    this.refreshEvents = this.refreshEvents.bind(this)
    this.loadEventProperties = this.loadEventProperties.bind(this)
    this.onShowTrail = this.onShowTrail.bind(this)
    this.fork = this.fork.bind(this)
  }

  static propTypes = {
    events: PropTypes.object.isRequired,
    trail: PropTypes.object.isRequired,
    forks: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  state = {
    fcntr: 0,
    query: {}
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
    this.setState({fcntr})
    this.props.dispatch(actions.trail.search({query}))
  }

  //
  render() {
    const {events, trail, forks} = this.props
    const forkTimeseries = _.map(forks, f => f.timeseries)
    return (
      <Container fluid={true}>
        <TrailQuery actions={events}
                    loadActionProperties={this.loadEventProperties}
                    onShowTrail={this.onShowTrail}
                    mapper={eventMapper}/>
        <TrailTimeseries trail={trail.timeseries || []} forks={forkTimeseries}/>
        <Trails trail={trail} forks={forks} fork={this.fork}/>
      </Container>
    )
  }
}

//
function mapStateToProps(state) {
  const {events, forks, trail} = state.trails

  return {
    events,
    trail,
    forks
  }
}

export default connect(mapStateToProps)(Trail)