import React, { PropTypes, Component } from 'react'
import styles from 'css/main'
import _ from 'lodash'
import {
  Row,
  Column,
  Widget,
  WidgetHeading,
  WidgetContent,
  Doughnut,
  RadarChart } from 'components/commons'
import {Timeline, BehaviorInformation} from 'components/behavior'

const cx = require('classnames/bind').bind(styles)

export default class Story extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    story: PropTypes.object.isRequired
  }

  render() {
    const {isFetching, story} = this.props.story
    const {information, timeline} = story || {}

    return (
      <Widget className={cx('story')}>
        <WidgetHeading title={"Behavior Story"} subtitle={"Users journey on the page"}/>
        {information && <BehaviorInformation information={information}/>}
        {timeline && <Timeline timeline={timeline}/>}
      </Widget>
    )
  }
}