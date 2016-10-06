import React, { Component, PropTypes } from 'react'
import styles from 'css/main'
import _ from 'lodash'
import fuzzy from 'fuzzy'
import { Container, Row, Column, Separator } from 'components/commons'
import { Widget, WidgetContent } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

//
class ActionSearchBox extends Component {
  constructor(props) {
    super(props)
    this.onQuery = this.onQuery.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.selectAction = this.selectAction.bind(this)
  }

  static propTypes = {
    updateResult: PropTypes.func.isRequired,
    onActionSelection: PropTypes.func.isRequired
  }

  state = {
    actions: {},
    suggestions: false
  }

  onFocus(event) {
    const query = event.target.value
    const result = this.props.updateResult(query)
    this.setState({actions: result, suggestions: true})
    event.preventDefault()
  }

  onQuery(event) {
    const query = event.target.value
    const result = this.props.updateResult(query)
    this.setState({actions: result})
    event.preventDefault()
  }

  selectAction(action, event) {
    this.refs.queryInput.value = _.startCase(action.name)
    this.setState({suggestions: false})
    this.props.onActionSelection(action)
    event.preventDefault()
  }

  render() {
    const {actions, suggestions} = this.state

    return (
      <div className={cx('select-action')}>
        <input
          type='text'
          className={cx('form-control')}
          placeholder='Search Event'
          onFocus={this.onFocus}
          onChange={this.onQuery}
          ref='queryInput'/>
        <ol className={cx('list-unstyled action-options', {'hide-suggestions': !suggestions})}>
          {_.map(actions, (action, idx) =>
            <li key={idx} value={action.name} onClick={this.selectAction.bind(this, action)}>
              {_.startCase(action.name)}
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
    this.elementForValue = this.elementForValue.bind(this)
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
    this.setState({key, value: ''})
    this.props.onChange({key, value: ''})
  }

  onValueSelection(event) {
    const value = event.target.value
    this.setState({value})
    this.props.onChange({key: this.state.key, value})
  }

  elementForValue(selectedprop) {
    switch(selectedprop.type) {
      case 'Categorical':
        return (
          <select className={cx('prop-value')} value={this.state.value} onChange={this.onValueSelection}>
            <option value=''>--Select--</option>
            {_.map(selectedprop.values, (value, idx) =>
              <option key={idx} value={value}>{_.startCase(value)}</option>
            )}
          </select>
        )

      case 'String':
        return <input type='text' className={cx('prop-value')} value={this.state.value} placeholder='Value' onChange={this.onValueSelection}/>

      default:
        return <input type='text' className={cx('prop-value')} placeholder='Value' disabled/>
    }
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
        {this.elementForValue(selectedprop)}
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
    loadActionProperties: PropTypes.func.isRequired
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
    this.props.loadActionProperties(action.name)
    const state = {name: action.name, props: []}
    this.setState(state)
    this.props.updateQuery(state)
  }

  addActionProperty(event) {
    let {name, props} = this.state
    props = props.concat({key: '', value: ''})
    this.setState({props})
    this.props.updateQuery({name, props})
    event.preventDefault()
  }

  updateActionProperty(idx, newprop) {
    let {name, props} = this.state
    props[idx] = newprop
    this.setState({props})
    this.props.updateQuery({name, props})
  }

  render() {
    const action = this.props.actions[this.state.name] || {}

    return (
      <div>
        <ActionSearchBox
          updateResult={this.updateResult}
          onActionSelection={this.onActionSelection}/>
        <div className={cx('add-item')} onClick={this.addActionProperty}>
          <i className='icon-add'></i>
          <span>Add a Property</span>
        </div>
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
    actions: PropTypes.object.isRequired,
    mapper: PropTypes.func,
    onShowTrail: PropTypes.func.isRequired,
    loadActionProperties: PropTypes.func.isRequired
  }

  state = {
    query: {}
  }

  addIncludeActionBox(event) {
    const query = this.state.query
    query.includes = query.includes || []
    query.includes = query.includes.concat({name: '', props: []})
    this.setState({query})
    event.preventDefault()
  }

  updateSelect(newselect) {
    const query = this.state.query
    query.select = newselect
    this.setState({query})
  }

  updateIncludes(idx, newwhere) {
    const query = this.state.query
    query.includes[idx] = newwhere
    this.setState({query})
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
        if(!_.isEmpty(prop.key)) res[prop.key] = prop.value
        return res
      }, {})

    // includes
    queryobj.includes = {}
    _.forEach(query.includes, (w, idx) => {
      if(_.isEmpty(w.name)) return {}
      else
      return queryobj.includes[w.name] = _.reduce(w.props, (res, prop) => {
        if(!_.isEmpty(prop.key)) res[prop.key] = prop.value
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
    const {actions, mapper, onShowTrail} = this.props
    const {query} = this.state

    return (
      <Widget>
        <WidgetContent className={cx('trail-query')}>
          <Column key='action-select' className={cx('action-select')} size='md-2'>
            <h4>Select an Event</h4>
            <ActionSelect
              actions={actions.entities}
              mapper={mapper}
              updateQuery={this.updateSelect}
              loadActionProperties={this.props.loadActionProperties}/>
            <button onClick={this.showTrail}>Show</button>
          </Column>
          <Column key='action-includes' className={cx('action-includes')} size='md-10'>
            <h4>Include Events in Trail</h4>
            {_.map(query.includes, (action, idx) =>
              <Column key={idx} size='md-2'>
                <ActionSelect
                  actions={actions.entities}
                  mapper={mapper}
                  updateQuery={this.updateIncludes.bind(this, idx)}
                  loadActionProperties={this.props.loadActionProperties}/>
              </Column>
            )}
            <div className={cx('add-item', 'add-action')} onClick={this.addIncludeActionBox}>
              <i className={cx('icon-add')}></i>
              <span>Add an Event</span>
            </div>
            <br/>
          </Column>
        </WidgetContent>
      </Widget>
    )
  }
}