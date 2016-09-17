import React, { PropTypes, Component } from 'react'
import _ from 'lodash'
import fuzzy from 'fuzzy'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import styles from 'css/main'
import {
  Query,
  Row,
  Column,
  Widget,
  WidgetHeading,
  WidgetContent } from 'components/commons'
import {
  isInstancesValid,
  createInstanceId
} from 'utils'

const cx = require('classnames/bind').bind(styles)

const pageMapper = (page) => `${page.name}-${page.url}`;
const pageEntryFormatter = (page) => `${page.name}-${page.url}`

//
export default class Header extends Component {
  constructor(props) {
    super(props)

    const {forDate, pages, refreshPages, instances, dispatch} = this.props
    _.isEmpty(pages) && refreshPages()

    this.onSelectInstance = this.onSelectInstance.bind(this)
    this.toggleSelector   = this.toggleSelector.bind(this)
  }

  static propTypes = {
    tokenId: PropTypes.string.isRequired,
    forDate: PropTypes.object,
    pageId: PropTypes.string.isRequired,
    pages: PropTypes.object.isRequired,
    instances: PropTypes.object.isRequired,
    refreshPages: PropTypes.func.isRequired,
    selectPage: PropTypes.func.isRequired,
    selectForDate: PropTypes.func.isRequired,
    selectInstance: PropTypes.func.isRequired
  }

  state = {
    collapsed: false,
    showSelector: _.isEmpty(this.props.pageId),
    result: this.props.pages.entities
  }

  //////////////
  // Handlers //
  //////////////

  //
  toggleSelector(e) {
    this.setState({showSelector: !this.state.showSelector})
    e.preventDefault()
  }

  //
  onSelectInstance(idx, span, event) {
    const {pageId, selectInstance, forDate} = this.props
    const instanceId = createInstanceId(forDate, span)
    selectInstance(instanceId)
    event.preventDefault()
  }

  //
  render() {
    const {
      tokenId,
      forDate,
      pageId,
      pages,
      instances,
      refreshPages,
      selectPage,
      selectForDate,
      selectInstance } = this.props

    const {
      collapsed,
      selectedPageId,
      showSelector } = this.state

    let instanceRndr
    if(instances) {
      const {spans} = instances
      instanceRndr =
        <ol className={cx('list-unstyled')}>
          {_.map(spans, (span, idx) =>
            <li key={idx}
                onClick={_.bind(this.onSelectInstance, null, idx, span)}>
              {span[2]}: {span[0]} - {span[1]}
            </li>
          )}
        </ol>
    }

    return (
      <Row>
        <div className={cx('calendar')}>
          <Widget>
            <WidgetContent>
              <DatePicker inline
                          fixedHeight
                          selected={forDate}
                          onChange={selectForDate}/>
            </WidgetContent>
          </Widget>
        </div>
        <Column size='md-2'>
          <Widget className={cx('header')}>
            <WidgetContent>
              {instanceRndr}
            </WidgetContent>
          </Widget>
        </Column>
        {/*page selector*/}
        <Column size='md-4'>
          <Widget className={cx('header')}>
            <WidgetContent>
              <Query collapsed={collapsed}
                     entries={pages.entities}
                     mapper={pageMapper}
                     formatter={pageEntryFormatter}
                     onSelectEntry={selectPage}/>
            </WidgetContent>
          </Widget>
        </Column>
      </Row>
    )
  }
}