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

export default class Story extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    story: PropTypes.object.isRequired
  }

  render() {
    const {information = {}, timeline} = this.props.story.story || {}
    const {prior, posterior} = information
    return (
      <Widget className={cx('story')}>
        <WidgetHeading title={"Behavior Story"}/>
        <WidgetContent>
          <ul className={cx('list-inline')}>
            {_.map(prior, (mv, tag) =>
              <li key={tag}>{tag}</li>
            )}
          </ul>
          <ul className={cx('list-inline')}>
            {_.map(posterior, (mv, tag) =>
              <li key={tag}>{tag}</li>
            )}
          </ul>
          <ul className={cx('list-group')}>
            {_.map(timeline, (event, idx) =>
              <li key={idx} className={cx("list-group-item")}>
                <ul className={cx('list-inline')}>
                  {_.map(event.sections, (section, id) =>
                    <li key={id}>{section.name}</li>
                  )}
                </ul>
                <ul className={cx('list-inline')}>
                  {_.map(event.tags, (mv, tag) =>
                    <li key={tag}>{tag}</li>
                  )}
                </ul>
              </li>
            )}
          </ul>
        </WidgetContent>
      </Widget>
    )
  }
}