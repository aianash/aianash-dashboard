import React, { PropTypes, Component } from 'react'
import _ from 'lodash'
import styles from 'css/main'
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
  createInstanceId
} from 'utils'

const cx = require('classnames/bind').bind(styles)

//
export default class BehaviorStats extends Component {

  static propTypes = {
    stat: PropTypes.object.isRequired
  }


  render() {
    const stat = this.props.stat.stat || {}
    const {avgDwellTime, newVisitors, pageViews, totalVisitors, previousPages, nextPages} = stat
    return (
      <Row>
        <Column size='md-6' key={1}>
          <CountWidget title={'VISITORS'}
                       subtitle={'decrease'}
                       count={totalVisitors}/>
        </Column>
        <Column size='md-6' key={2}>
          <CountWidget title={'NEW VISITORS'}
                       subtitle={'decrease'}
                       count={newVisitors}/>
        </Column>
        <Column size='md-6' key={3}>
          <CountWidget title={'PAGE VIEWS'}
                       subtitle={'decrease'}
                       count={pageViews}/>
        </Column>
        <Column size='md-6' key={4}>
          <CountWidget title={'AVG DWELL TIME'}
                       subtitle={'decrease'}
                       count={avgDwellTime}/>
        </Column>
        <Column size='md-12' key={5}>
          <Widget>
            <WidgetContent>
              <ul>
                {_.map(previousPages, (page) =>
                  <li key={page.pageId}>{page.name}-{page.url}-{page.count}</li>
                )}
              </ul>
            </WidgetContent>
          </Widget>
        </Column>
        <Column size='md-12' key={6}>

        </Column>
      </Row>
    )
  }
}