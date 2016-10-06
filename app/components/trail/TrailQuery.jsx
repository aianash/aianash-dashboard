import React, { Component, PropTypes } from 'react'
import styles from 'css/main'
import _ from 'lodash'
import fuzzy from 'fuzzy'
import { Container, Row, Column, Separator } from 'components/commons'
import { Widget, WidgetContent } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

//
class EventSearchBox extends Component {
  constructor(props) {
    super(props)
    this.onQuery = this.onQuery.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.selectEvent = this.selectEvent.bind(this)
  }

  static propTypes = {
    updateResult: PropTypes.func.isRequired,
    onEventSelection: PropTypes.func.isRequired
  }

  state = {
    events: {},
    suggestions: false
  }

  onFocus(event) {
    const query = event.target.value
    const result = this.props.updateResult(query)
    this.setState({events: result, suggestions: true})
    event.preventDefault()
  }

  onQuery(event) {
    const query = event.target.value
    const result = this.props.updateResult(query)
    this.setState({events: result})
    event.preventDefault()
  }

  selectEvent(eventD, event) {
    this.refs.queryInput.value = _.startCase(eventD.name)
    this.setState({event: eventD, suggestions: false})
    this.props.onEventSelection(eventD)
    event.preventDefault()
  }

  render() {
    const {events, suggestions} = this.state

    return (
      <div className={cx('select-event')}>
        <input
          type='text'
          className={cx('form-control')}
          placeholder='Search Event'
          onFocus={this.onFocus}
          onChange={this.onQuery}
          ref='queryInput'/>
        <ol className={cx('list-unstyled event-options', {'hide-suggestions': !suggestions})}>
          {_.map(events, (event, idx) =>
            <li key={idx} value={event.name} onClick={this.selectEvent.bind(this, event)}>
              {_.startCase(event.name)}
            </li>
          )}
        </ol>
      </div>
    )
  }
}

//
class ActionProp extends Component {
  constructor(props) {
    super(props)
    this.onKeySelection = this.onKeySelection.bind(this)
    this.onValueSelection = this.onValueSelection.bind(this)
  }

  static propTypes = {
    actionprops: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  }

  state = {
    key: '',
    value: ''
  }

  onKeySelection(event) {
    const key = event.target.value
    this.setState({key: key})
    this.props.onChange({key: key, value: this.state.value})
  }

  onValueSelection(event) {
    const value = event.target.value
    this.setState({value: value})
    this.props.onChange({key: this.state.key, value: value})
  }

  render() {
    const {actionprops} = this.props
    const selectedprop = actionprops[this.state.key] || {}

    return (
      <div className={cx('select-props')}>
        <select ref='propkey' onChange={this.onKeySelection}>
          <option value=''>--Select--</option>
          {_.map(_.keys(actionprops), (propkey, idx) =>
            <option key={idx} value={propkey}>{_.startCase(propkey)}</option>
          )}
        </select>
        {(() => {
          switch(selectedprop.type) {
            case 'Categorical':
              return (
                <select className={cx('prop-value')} onChange={this.onValueSelection}>
                  <option value=''>--Select--</option>
                  {_.map(selectedprop.values, (value, idx) =>
                    <option key={idx} value={value}>{_.startCase(value)}</option>
                  )}
                </select>
              )

            case 'String':
              return <input type='text' className={cx('prop-value')} placeholder='Value'/>

            default:
              return <input type='text' className={cx('prop-value')} placeholder='Value' disabled/>
          }
        })()}
      </div>
    )
  }
}

//
class ActionSelect extends Component {
  constructor(props) {
    super(props)
    this.updateResult = this.updateResult.bind(this)
    this.onActionSelection = this.onActionSelection.bind(this)
    this.addActionProperty = this.addActionProperty.bind(this)
    this.updateActionProperty = this.updateActionProperty.bind(this)
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    mapper: PropTypes.func.isRequired,
    updateQuery: PropTypes.func.isRequired,
    loadEventProperties: PropTypes.func.isRequired
  }

  state = {
    name: '',
    props: []
  }

  updateResult(query) {
    const {actions, mapper} = this.props
    const keys = _.keys(actions)
    const opts = {extract: mapper}
    return fuzzy.filter(query, keys)
                .reduce((res, r) =>
                  res.concat(Object.assign({}, {name: r.original}, actions[r.original])), [])
  }

  onActionSelection(action) {
    this.props.loadEventProperties(action.name)
    const state = {name: action.name, props: []}
    this.setState(state)
    this.props.updateQuery(state)
  }

  addActionProperty(event) {
    var {name, props} = this.state
    props = props.concat({key: '', value: ''})
    this.setState({props: props})
    this.props.updateQuery({name: name, props: props})
    event.preventDefault()
  }

  updateActionProperty(idx, newprop) {
    var {name, props} = this.state
    props[idx] = newprop
    this.setState({props: props})
    this.props.updateQuery({name: name, props: props})
  }

  render() {
    const action = this.props.actions[this.state.name] || {}

    return (
      <div>
        <EventSearchBox
          updateResult={this.updateResult}
          onEventSelection={this.onActionSelection}/>
        <i className='icon-add' onClick={this.addActionProperty}></i>
        <span>Add a Property</span>
        {_.map(this.state.props, (property, idx) =>
          <ActionProp
            key={idx}
            actionprops={action.props || {}}
            property={property}
            onChange={this.updateActionProperty.bind(this, idx)}/>
        )}
      </div>
    )
  }
}

export default class TrailQuery extends Component {
  constructor(props) {
    super(props)
    this.addIncludeActionBox = this.addIncludeActionBox.bind(this)
    this.showTrail = this.showTrail.bind(this)
    this.updateSelect = this.updateSelect.bind(this)
    this.createQueryString = this.createQueryString.bind(this)
  }

  static propTypes = {
    events: PropTypes.object.isRequired,
    mapper: PropTypes.func,
    onShowTrail: PropTypes.func.isRequired,
    loadEventProperties: PropTypes.func.isRequired
  }

  state = {
    query: {}
  }

  addIncludeActionBox(event) {
    const query = this.state.query
    query.includes = query.includes || []
    query.includes = query.includes.concat({name: '', props: []})
    this.setState({query: query})
    event.preventDefault()
  }

  updateSelect(newselect) {
    const query = this.state.query
    query.select = newselect
    this.setState({query: query})
  }

  updateWhere(idx, newwhere) {
    const query = this.state.query
    query.includes[idx] = newwhere
    this.setState({query: query})
  }

  createQueryString() {
    const queryobj = {}
    const {query} = this.state
    if(_.isEmpty(query) || _.isEmpty(query.select)) {
      return {}
    }
    // select
    queryobj.select = query.select.name
    queryobj.where =
      _.reduce(query.select.props, (res, prop) => {
        if(_.isEmpty(prop.key)) res[prop.key] = prop.value
        return res
      }, {})

    // includes
    queryobj.includes = {}
    _.forEach(query.includes, (w, idx) => {
      if(_.isEmpty(w.name)) return {}
      else
      return queryobj.includes[w.name] = _.reduce(w.props, (res, prop) => {
        if(_.isEmpty(prop.key)) res[prop.key] = prop.value
        return res
      }, {})
    })

    return queryobj
  }

  showTrail(event) {
    const query = this.createQueryString()
    this.props.onShowTrail(query)
  }

  render() {
    const {events, mapper, onShowTrail} = this.props
    const {query} = this.state

    return (
      <Widget>
        <WidgetContent className={cx('trail-query')}>
          <Column key='action-select' className={cx('action-select')} size='md-2'>
            <h4>Select an Event</h4>
            <ActionSelect
              actions={events.entities}
              mapper={mapper}
              updateQuery={this.updateSelect}
              loadEventProperties={this.props.loadEventProperties}/>
          </Column>
          <Column key='action-includes' className={cx('action-includes')} size='md-10'>
            <h4>Include Events</h4>
            {_.map(query.includes, (action, idx) =>
              <Column key={idx} size='md-2'>
                <ActionSelect
                  actions={events.entities}
                  mapper={mapper}
                  updateQuery={this.updateWhere.bind(this, idx)}
                  loadEventProperties={this.props.loadEventProperties}/>
              </Column>
            )}
            <i className={cx('icon-add')} onClick={this.addIncludeActionBox}></i>
            <span>Add an intermediary Action</span>
            <br/>
            <button onClick={this.showTrail}>Show</button>
          </Column>
        </WidgetContent>
      </Widget>
    )
  }
}