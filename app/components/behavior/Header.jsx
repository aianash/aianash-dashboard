import React, { PropTypes, Component } from 'react'
import _ from 'lodash'
import fuzzy from 'fuzzy'

import styles from 'css/main'
import {
  Row,
  Column,
  Widget,
  WidgetHeading,
  WidgetContent } from 'components/commons'
import {
  isInstancesValid,
  createInstanceId
} from 'utils'
import {Selector} from 'components/behavior'

const cx = require('classnames/bind').bind(styles)

const fuzzyOpts = {
  extract: el => el.name + ' - ' + el.url
}

//
const Summary = ({page, forDate, instance, onClick}) => {
  return (
    <Row onClick={onClick}>
      <Column size='md-4'>
        {page ? JSON.stringify(page) : "Select page"}
      </Column>
      <Column size='md-4'>
        {forDate ? "asdf" : "Select date to view instances"}
      </Column>
      <Column size='md-4'>
        {instance ? "asdf" : "Select an instance to view behaviors"}
      </Column>
    </Row>
  )
};

Summary.propTypes = {
  page: PropTypes.object,
  forDate: PropTypes.object,
  instance: PropTypes.object,
  onClick: PropTypes.func.isRequired
}

//
export default class Header extends Component {
  constructor(props) {
    super(props)

    const {pages, refreshPages} = this.props
    _.isEmpty(pages) && refreshPages()

    this.selectPage = this.selectPage.bind(this)
    this.onDateChange = this.onDateChange.bind(this)
    this.onSelectInstance = this.onSelectInstance.bind(this)

    this.toggleSelector = this.toggleSelector.bind(this)
  }

  static propTypes = {
    tokenId: PropTypes.string.isRequired,
    pageId: PropTypes.string.isRequired,
    pages: PropTypes.object.isRequired,
    instances: PropTypes.object.isRequired,
    refreshPages: PropTypes.func.isRequired,
    selectPageForDate: PropTypes.func.isRequired,
    selectInstance: PropTypes.func.isRequired
  }

  state = {
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
  selectPage(page) {
    const {pageId} = page
    this.setState({selectedPageId: pageId})
    const {selectedForDate} = this.state
    if(selectedForDate)
      this.props.selectPageForDate(pageId, selectedForDate)
  }

  //
  onDateChange(dateString, {dateMoment}) {
    this.setState({selectedForDate: dateMoment})
    const {selectedPageId} = this.state
    if(selectedPageId)
      this.props.selectPageForDate(selectedPageId, dateMoment)
  }

  //
  onSelectInstance(idx, span, event) {
    console.log(idx, span)
    const {selectedForDate} = this.state
    const {pageId, selectInstance} = this.props
    const instanceId = createInstanceId(selectedForDate, span)
    selectInstance(instanceId)
    event.preventDefault()
  }

  //
  render() {
    const {
      tokenId,
      pageId,
      pages,
      instances,
      refreshPages,
      selectPageForDate,
      selectInstance } = this.props

    const {
      selectedPageId,
      selectedForDate,
      showSelector } = this.state

    const page = _.find(pages, {pageId})
    const instance = {}

    return (
      <Widget className={cx('header')}>
        <WidgetHeading>
          <Summary page={page} forDate={selectedForDate} instance={instance} onClick={this.toggleSelector}/>
        </WidgetHeading>
        <WidgetContent>
          {showSelector &&
            <Selector selectedPageId={selectedPageId}
                      selectedForDate={selectedForDate}
                      pages={pages}
                      instances={instances}
                      selectPage={this.selectPage}
                      onDateChange={this.onDateChange}
                      onSelectInstance={this.onSelectInstance}/>}
        </WidgetContent>
      </Widget>
    )
  }
}