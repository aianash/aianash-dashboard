import React, { PropTypes, Component } from 'react'
import _ from 'lodash'

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

const cx = require('classnames/bind').bind(styles)

//
export default class PageStats extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    pageStat: PropTypes.object.isRequired,
  }

  //////////////
  // Handlers //
  //////////////

  //
  render() {
    const { pageStat } = this.props
    const stat = pageStat.stats || {}
    const {avgDwellTime, newVisitors, pageViews, totalVisitors} = stat

    return (
      <Row>
        {/*page stats*/}
        <Column size='md-6'>
          <Row className={cx('page-stat')}>
            <Column size='md-3' key={1}>
              <CountWidget title={'TOTAL VISITORS'}
                           subtitle={['increase', '15%', 'From Last Week']}
                           count={totalVisitors}/>
            </Column>
            <Column size='md-3' key={2}>
              <CountWidget title={'INTERESTED VISITORS'}
                           subtitle={['decrease', '5%', 'From Last Week']}
                           count={newVisitors}/>
            </Column>
            <Column size='md-3' key={3}>
              <CountWidget title={'PAGE VIEWS'}
                           subtitle={['increase', '4%', 'From Last Week']}
                           count={pageViews}/>
            </Column>
            <Column size='md-3' key={4}>
              <CountWidget title={'AVG DWELL TIME'}
                           subtitle={['increase', '6%', 'From Last Week']}
                           count={avgDwellTime}/>
            </Column>
          </Row>
        </Column>
        <Column size='md-6' className={cx('page-stat')}>
          <Row>
            <Column size='md-6'>
              <Widget>
                <WidgetHeading title={"TOP PREVIOUS PAGES BY VISITS"} compressed/>
                <WidgetContent>
                  <table className={cx('table', 'table-compressed')}>
                    <tbody>
                    {_.take(_.sortBy(stat.previousPages, (p) => -p.count), 2).map((page, idx) =>
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
            <Column size='md-6'>
              <Widget>
                <WidgetHeading title={"TOP NEXT PAGES BY VISITS"} compressed/>
                <WidgetContent>
                  <table className={cx('table', 'table-compressed')}>
                    <tbody>
                    {_.take(_.sortBy(stat.nextPages, (p) => -p.count), 2).map((page, idx) =>
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
        </Column>
      </Row>
    )
  }
}