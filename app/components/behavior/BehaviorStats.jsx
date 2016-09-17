import React, { PropTypes, Component } from 'react'
import _ from 'lodash'
import styles from 'css/main'
import {
  Query,
  Row,
  Column,
  Widget,
  WidgetHeading,
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
    return (
      <Row>
        {_.map(this.props.stat.stat, (stat, name) =>
          <Column size='md-4' key={name}>
            <Widget><WidgetContent>{name}</WidgetContent></Widget>
          </Column>
        )}
      </Row>
    )
  }
}