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
                     subtitle={['increase', `${_.random(1, 15)}%`, 'From Last Week']}
                     count={totalVisitors}/>
      </Column>
      <Column size='md-6' key={2}>
        <CountWidget title={'INTERESTED VISITORS'}
                     subtitle={['decrease', `${_.random(1, 15)}%`, 'From Last Week']}
                     count={newVisitors}/>
      </Column>
      <Column size='md-6' key={3}>
        <CountWidget title={'PAGE VIEWS'}
                     subtitle={['increase', `${_.random(1, 15)}%`, 'From Last Week']}
                     count={pageViews}/>
      </Column>
      <Column size='md-6' key={4}>
        <CountWidget title={'AVG DWELL TIME'}
                     subtitle={['increase', `${_.random(1, 15)}%`, 'From Last Week']}
                     count={avgDwellTime}/>
      </Column>
      <Column size='md-12' key={5}>
        <Widget>
          <WidgetHeading title={"TOP PREVIOUS PAGES BY VISITS"} compressed/>
          <WidgetContent>
            <table className={cx('table', 'table-compressed')}>
              <tbody>
              {_.sortBy(previousPages, (p) => -p.count).map((page, idx) =>
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
          <WidgetHeading title={"TOP NEXT PAGES BY VISITS"} compressed/>
          <WidgetContent>
            <table className={cx('table', 'table-compressed')}>
              <tbody>
              {_.sortBy(nextPages, (p) => -p.count).map((page, idx) =>
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