import React, { PropTypes, Component } from 'react'
import _ from 'lodash'
import fuzzy from 'fuzzy'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import styles from 'css/main'
import {Instances} from 'components/behavior'
import {
  Query,
  Row,
  Column,
  Widget,
  WidgetHeading,
  CountWidget,
  WidgetContent } from 'components/commons'
import {
  isInstancesValid,
  createInstanceId,
  findInstanceIdx
} from 'utils'

const cx = require('classnames/bind').bind(styles)

const pageMapper = (page) => `${page.name}-${page.url}`;
const pageEntryFormatter = (page, selected) =>
  <div className={cx('page-desc', {selected})}>
    <h2>{page.name}</h2>
    <p>{page.url}</p>
  </div>

//
export default class Header extends Component {
  constructor(props) {
    super(props)

    this.isPageSelected = this.isPageSelected.bind(this)
    this.onSelectInstance = this.onSelectInstance.bind(this)
    this.toggleSelector   = this.toggleSelector.bind(this)
  }

  static propTypes = {
    tokenId: PropTypes.string.isRequired,
    forDate: PropTypes.object,
    pageId: PropTypes.string.isRequired,
    instanceId: PropTypes.string.isRequired,
    pages: PropTypes.object.isRequired,
    instances: PropTypes.object.isRequired,
    pageStat: PropTypes.object.isRequired,
    refreshPages: PropTypes.func.isRequired,
    selectPage: PropTypes.func.isRequired,
    selectForDate: PropTypes.func.isRequired,
    selectInstance: PropTypes.func.isRequired
  }

  state = {
    collapsed: false,
    showSelector: _.isEmpty(this.props.pageId),
    result: this.props.pages.entities,
    selectedInstanceIdx: findInstanceIdx(this.props.instanceId, this.props.instances.spans)
  }

  componentWillReceiveProps(nextProps) {
    const selectedInstanceIdx = findInstanceIdx(nextProps.instanceId, nextProps.instances.spans)
    this.setState({selectedInstanceIdx})
  }

  isPageSelected(page) {
    return this.props.pageId === page.pageId
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
  onSelectInstance(idx, span) {
    const {pageId, selectInstance, forDate} = this.props
    const instanceId = createInstanceId(forDate, span)
    selectInstance(instanceId)
  }

  //
  render() {
    const {
      tokenId,
      forDate,
      pageId,
      pages,
      instances,
      pageStat,
      refreshPages,
      selectPage,
      selectForDate,
      selectInstance } = this.props

    const {
      selectedInstanceIdx,
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
    const stat = pageStat.stats || {}
    const {avgDwellTime, newVisitors, pageViews, totalVisitors} = stat

    return (
      <Row>
        <Column size='md-2'>
          <Widget className={cx('date-picker')}>
            <DatePicker fixedHeight
                        selected={forDate}
                        onChange={selectForDate}/>
            <WidgetContent>
              <Instances selected={selectedInstanceIdx}
                         instances={instances}
                         onClick={this.onSelectInstance}/>
            </WidgetContent>
          </Widget>
        </Column>

        {/*page selector*/}
        <Column size='md-4'>
          <Query isSelected={this.isPageSelected}
                 entries={pages.entities}
                 mapper={pageMapper}
                 formatter={pageEntryFormatter}
                 onSelectEntry={selectPage}
                 className={cx('page-search')}/>
        </Column>

        {/*page stats*/}
        <Column size='md-6'>
          <Row className={cx('page-stat')}>
            <Column size='md-3' key={1}>
              <CountWidget title={'VISITORS'}
                           subtitle={'decrease'}
                           count={totalVisitors}/>
            </Column>
            <Column size='md-3' key={2}>
              <CountWidget title={'NEW VISITORS'}
                           subtitle={'decrease'}
                           count={newVisitors}/>
            </Column>
            <Column size='md-3' key={3}>
              <CountWidget title={'PAGE VIEWS'}
                           subtitle={'decrease'}
                           count={pageViews}/>
            </Column>
            <Column size='md-3' key={4}>
              <CountWidget title={'AVG DWELL TIME'}
                           subtitle={'decrease'}
                           count={avgDwellTime}/>
            </Column>
          </Row>
          <Row>
            <Column size='md-6'>
              <Widget><WidgetContent>previous</WidgetContent></Widget>
            </Column>
            <Column size='md-6'>
              <Widget><WidgetContent>previous</WidgetContent></Widget>
            </Column>
          </Row>
        </Column>
      </Row>
    )
  }
}