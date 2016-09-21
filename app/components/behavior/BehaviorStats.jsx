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
  WidgetContent,
  InlineStat } from 'components/commons'
import {
  isInstancesValid,
  createInstanceId
} from 'utils'

const cx = require('classnames/bind').bind(styles)

//
const BehaviorStats = (props) => {
  const stat = props.stat.stat || {}
  const {avgDwellTime, newVisitors, pageViews, totalVisitors, previousPages, nextPages} = stat
  return (
    <Row>
      <Column size='md-6' key={1}>
        <CountWidget title={'TOTAL VISITORS'}
                     subtitle={['increase', '15%', 'From Yesterday']}
                     count={totalVisitors}/>
      </Column>
      <Column size='md-6' key={2}>
        <CountWidget title={'INTERESTED VISITORS'}
                     subtitle={['decrease', '5%', 'From Yesterday']}
                     count={newVisitors}/>
      </Column>
      <Column size='md-6' key={3}>
        <CountWidget title={'PAGE VIEWS'}
                     subtitle={['increase', '4%', 'From Yesterday']}
                     count={pageViews}/>
      </Column>
      <Column size='md-6' key={4}>
        <CountWidget title={'AVG DWELL TIME'}
                     subtitle={['increase', '6%', 'From Yesterday']}
                     count={avgDwellTime}/>
      </Column>
      <Column size='md-12' key={5}>
        <Widget>
          <WidgetHeading title={"TOP PREVIOUS PAGES"} compressed/>
          <WidgetContent>
            <table className={cx('table', 'table-compressed')}>
              <tbody>
              {_.map(previousPages, (page, idx) =>
                <tr key={idx}>
                  <td>{page.url.replace('http://', '')}</td>
                  <td>{page.count}</td>
                </tr>
              )}
              </tbody>
            </table>
          </WidgetContent>
        </Widget>
        <Widget>
          <WidgetHeading title={"TOP NEXT PAGES"} compressed/>
          <WidgetContent>
            <table className={cx('table', 'table-compressed')}>
              <tbody>
              {_.map(nextPages, (page, idx) =>
                <tr key={idx}>
                  <td>{page.url.replace('http://', '')}</td>
                  <td>{page.count}</td>
                </tr>
              )}
              </tbody>
            </table>
          </WidgetContent>
        </Widget>
      </Column>
    </Row>
  )
}

BehaviorStats.propTypes = {
  stat: PropTypes.object.isRequired
}

export default BehaviorStats