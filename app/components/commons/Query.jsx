import React, {PropTypes, Component} from 'react'
import _ from 'lodash'
import fuzzy from 'fuzzy'

import styles from 'css/main'
import {
  Widget,
  WidgetContent } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

//
export default class Query extends Component {
  constructor(props) {
    super(props)
    this.updateResult = _.debounce(this.updateResult, 500)
    this.onClick = this.onClick.bind(this)
    this.onQuery = this.onQuery.bind(this)
  }

  static propTypes = {
    isSelected: PropTypes.func.isRequired,
    entries: PropTypes.array.isRequired,
    mapper: PropTypes.func,
    formatter: PropTypes.func,
    onSelectEntry: PropTypes.func
  }

  state = {
    result: this.props.entries
  }

  //////////////
  // Handlers //
  //////////////

  onClick(selected, event) {
    const {entries, onSelectEntry} = this.props
    onSelectEntry(entries[selected])
    event.preventDefault()
  }

  updateResult(query) {
    const {entries, mapper} = this.props
    const opts = {extract: mapper}
    const result = fuzzy.filter(query, entries, opts)
                        .map(r => r.original)
    this.setState({result})
  }

  onQuery(event) {
    const query = event.target.value
    this.updateResult(query)
    event.preventDefault()
  }

  //
  render() {
    const {isSelected, entries, mapper, formatter, onSelectEntry, ...others} = this.props
    const result = _.isEmpty(this.state.result) ? entries : this.state.result
    return (
      <Widget {...others}>
        <input type="search" className={cx('form-control')} placeholder="Search webpages" onChange={this.onQuery}/>
        <ol className={cx('list-unstyled')}>
          {_.map(result, (entry, idx) => {
            return (
              <li key={idx}
                  onClick={this.onClick.bind(null, idx)}>
                {formatter(entry, isSelected(entry))}
              </li>
            )
          })}
        </ol>
      </Widget>
    )
  }
}