import React, { PropTypes, Component } from 'react'
import styles from 'css/main'
import _ from 'lodash'
import {
  Row,
  Column,
  Widget,
  WidgetHeading,
  WidgetContent } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

export default class Cluster extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    instanceId: PropTypes.string.isRequired,
    cluster: PropTypes.object.isRequired,
    stat: PropTypes.object.isRequired,
    selectBehavior: PropTypes.func.isRequired,
  }

  render() {
    const {instanceId, cluster, stat, selectBehavior} = this.props
    return (
      <Widget className={cx('cluster')}>
        <WidgetHeading title='Behaviors' subtitle='List of user behaviors'/>
        <WidgetContent>
          <table className={cx('table', 'table-hover', 'table-bordered')}>
            <thead>
              <tr>
                <th>Behavior Cluster</th>
              </tr>
            </thead>
            <tbody>
              {_.map(cluster.cluster, ({behaviorId, name}, idx) =>
                <tr key={behaviorId}>
                  <td key={behaviorId}
                      onClick={selectBehavior.bind(null, behaviorId)}>{name}</td>
                </tr>
              )}
            </tbody>
          </table>
        </WidgetContent>
      </Widget>
    )
  }
}