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
      refreshPages,
      selectPage,
      selectForDate,
      selectInstance } = this.props

    const {
      selectedInstanceIdx,
      collapsed,
      selectedPageId,
      showSelector } = this.state

    const page = _.find(pages.entities, {pageId})

    let selector
    if(selectedInstanceIdx !== -1 && page) {
      const span = instances.spans[selectedInstanceIdx]
      const fromHr = span[0] <= 12 ? span[0] + ' AM' : span[0] + ' PM'
      const toHr = span[1] <= 12 ? span[1] + ' AM' : span[1] + ' PM'
      selector =
        <ol className={cx('selector-summary')}
            onClick={this.toggleSelector}>
          <li>{_.startCase(page.name)} ({page.url})</li>
          <li>{forDate.format('Do MMM YYYY')}</li>
          <li>{_.startCase(span[2])} ({fromHr} to {toHr})</li>
        </ol>
    } else {
      selector = <span>Select page and instance for a date</span>
    }

    return (
      <Row>
        <Column size='md-12'>
          <Widget className={cx('selector-cont')}>{selector}</Widget>
        </Column>
        <Column size='md-2' className={cx({'hidden': showSelector})}>
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
        <Column size='md-4' className={cx({'hidden': showSelector})}>
          <Query isSelected={this.isPageSelected}
                 entries={pages.entities}
                 mapper={pageMapper}
                 formatter={pageEntryFormatter}
                 onSelectEntry={selectPage}
                 className={cx('page-search')}/>
        </Column>
      </Row>
    )
  }
}