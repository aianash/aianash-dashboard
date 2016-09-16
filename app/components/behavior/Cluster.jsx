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
          {JSON.stringify(this.props.instanceId)}<br/>
          <ol className={cx("list-unstyled")}>
            {_.map(cluster.cluster, (b, idx) =>
              <li key={idx}
                   onClick={selectBehavior.bind(null, b.behaviorId)}>{b.name}- {b.behaviorId}</li>
            )}
          </ol>
          {JSON.stringify(this.props.stat)}
        </WidgetContent>
      </Widget>
    )
  }
}