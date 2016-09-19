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
  }

  static propTypes = {
    behaviorId: PropTypes.string.isRequired,
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
        <ul className={cx('list-unstyled')}>
          {_.map(cluster.cluster, ({behaviorId, name}, idx) =>
            <li className={cx({selected: (behaviorId === this.props.behaviorId)})}
                key={behaviorId}
                onClick={selectBehavior.bind(null, behaviorId)}>
                <h2>{name}</h2>
                <p>{"50% of total users"}</p>
            </li>
          )}
        </ul>
      </Widget>
    )
  }
}