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

//
export default class Cluster extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  static propTypes = {
    behaviorId: PropTypes.string.isRequired,
    instanceId: PropTypes.string.isRequired,
    cluster: PropTypes.object.isRequired,
    selectBehavior: PropTypes.func.isRequired
  }

  onClick(behaviorId, event) {
    this.props.selectBehavior(behaviorId)
    event.preventDefault()
  }

  render() {
    const {behaviorId, instanceId, cluster, selectBehavior} = this.props
    return (
      <div>
        <Widget className={cx('cluster')}>
          <ul className={cx('list-unstyled')}>
            <li className={cx({selected: ('ALL' === this.props.behaviorId)})}
                key='ALL'
                onClick={_.bind(this.onClick, this, 'ALL')}>
              <h2>ALL BEHAVIORS</h2>
            </li>
          </ul>
        </Widget>
        <Widget className={cx('cluster')}>
          <WidgetHeading title='Behavior Timelines' compressed/>
          <ul className={cx('list-unstyled')}>
            {_.map(cluster.cluster, ({behaviorId, name, visitors}, idx) =>
              <li className={cx({selected: (behaviorId === this.props.behaviorId)})}
                  key={behaviorId}
                  onClick={this.onClick.bind(null, behaviorId)}>
                <h2>{name}</h2>
                <p>{`${visitors}% of total users`}</p>
              </li>
            )}
          </ul>
        </Widget>
      </div>
    )
  }
}