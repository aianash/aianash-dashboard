import React, { PropTypes, Component } from 'react'
import styles from 'css/main'
import _ from 'lodash'
import {
  Row,
  Column,
  Heading,
  Widget,
  WidgetHeading,
  WidgetContent,
  HorizontalChart,
  InlineStat,
  RadarChart } from 'components/commons'

const cx = require('classnames/bind').bind(styles)

//
const SectionSummary = ({sections}) => {
  const section = _.maxBy(_.toPairs(sections), (a) => a[1].mean)
  return <p className={cx('stat-msg')}>Most user visits <span className={cx('name')}>{_.startCase(section[1].name)}</span></p>
}

SectionSummary.propTypes = {
  sections: PropTypes.object.isRequired
}

//
const ActionSummary = ({actions}) => {
  return (
    <div className={cx('timeline-action-summary')}>
      <span className={cx('sm-hd', 'hd-hg')}>Action summary</span>
      <table >
        <tbody>
          {_.take(actions, 2).map((action, idx) =>
            <tr key={idx}>
              <td className={cx('c')}>{action.category}</td>
              <td className={cx('n')}>:{action.name}</td>
              <td>({action.label})</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

ActionSummary.propTypes = {
  actions: PropTypes.array.isRequired
}

//
const StatsSummary = ({stats}) => {
  return (
    <div>
      <p className={cx('stat-msg')}><span className={cx('value')}>{stats.reach}</span> users reached</p>
      <p className={cx('stat-msg')}><span className={cx('value', 'warn')}>{stats.drop}</span> users dropped</p>
    </div>
  )
}

StatsSummary.propTypes = {
  stats: PropTypes.object.isRequired
}

//
const InfoTagsSummary = ({tags}) => {
  const tag = _.maxBy(_.toPairs(tags), (a) => a[1].mean)
  return (
    <p className={cx('stat-msg')}>
      <span className={cx('name')}>{tag[1].mean + '%'}</span> interested in <span className={cx('value')}>{_.startCase(tag[0])}</span>
    </p>
  )
}

InfoTagsSummary.propTypes = {
  tags: PropTypes.object.isRequired
}

//
const InfoTags = ({tags}) => {
  tags = _.sortBy(_.toPairs(tags), (t) => -t[1].mean)
  const data = _.map(tags, (tag) => {return {label: tag[0], value: tag[1].mean}})
  return (
    <div className={cx('timeline-infotags')}>
      <span className={cx('sm-hd', 'hd-hg')}>Information</span>
      <HorizontalChart data={data}
                          titles={['% Interested', 'Information']}
                          left/>
    </div>)
}

InfoTags.propTypes = {
  tags: PropTypes.object.isRequired
}

//
const Section = ({sections}) => {
  const data =
    _.map(sections, (sec) => {
      return {
        label: sec.name,
        value: sec.mean
      }
    })

  return (
    <div className={cx('timeline-section-visits')}>
      <span className={cx('sm-hd', 'hd-hg')}>Section Visits</span>
      <HorizontalChart data={data}
                          titles={['% Visits', 'Section']}/>
    </div>)
}

Section.propTypes = {
  sections: PropTypes.object.isRequired
}

//
const Action = ({actions}) => {
  let count = 1
  const actionStats =
    _.flatMap(actions, (action, idx) =>
      _.flatMap(action.stats, (values, prop) =>
        _.map(values, (stat, value) => {
          count = count + 1
          console.log("asdfsd")
          return <InlineStat  key={count + ''}
                              count={stat}
                              title={`${action.category} > ${action.name}`}
                              subtitle={`${action.label} ${value}`}
                              compared={['increase', '15%', 'From Yesterday']}/>
        })
      )
    )

  return (
    <div className={cx('timeline-action')}>
      <span className={cx('sm-hd', 'hd-hg')}>Action Stats</span>
      <div>{actionStats}</div>
    </div>
  )
}

Action.propTypes = {
  actions: PropTypes.array.isRequired
}

//
class TimelineEvent extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    event: PropTypes.object.isRequired,
    expanded: PropTypes.bool,
    onClick: PropTypes.func
  }

  render() {
    const {event, expanded, onClick} = this.props
    return (
      <Row className={cx('timeline-event-block', {selected: expanded})}
           onClick={onClick}>
        <Column size='md-5' className={cx('timeline-left-cont')}>
          <div className={cx('fadeIn', {hidden: expanded})}>
            <InfoTagsSummary tags={event.tags}/>
            <SectionSummary sections={event.sections}/>
          </div>
          <div className={cx('fadeIn', {hidden: !expanded})}>
            <InfoTags tags={event.tags}/>
            <Section sections={event.sections}/>
          </div>
        </Column>

        <Column size='md-1' className={cx('timeline-duration')}>
          <span>{'10 secs'}</span>
          {Math.random() > 0.5
              ? <span className={cx('anom-good')}><i className={cx('icon-trending_up')}/></span>
              : <span className={cx('anom-bad')}><i className={cx('icon-trending_down')}/></span>}
        </Column>

        <Column size='md-6' className={cx('timeline-right-cont')}>
          <div className={cx('fadeIn', {hidden: expanded})}>
            <StatsSummary stats={event.stats}/>
            <ActionSummary actions={event.actions}/>
          </div>
          <div className={cx('fadeIn', {hidden: !expanded})}>
            <StatsSummary stats={event.stats}/>
            <Action actions={event.actions}/>
          </div>
        </Column>
      </Row>
    )
  }
}

//
export default class Timeline extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    timeline: PropTypes.array.isRequired
  }

  state = {
    selected: 0
  }

  onClick(idx, event) {
    const {selected} = this.state
    this.setState({selected: (selected == idx) ? -1 : idx})
    event.preventDefault()
  }

  render() {
    const {timeline} = this.props
    const {selected} = this.state
    return (
      <WidgetContent className={cx('story-timeline-cont')}>
        <Heading title='TIMELINE'/>
        <Row className={cx('timeline-event-block', 'no-hover')}>
          <div className={cx('timeline-duration', 'center-block')}>
            <span className={cx('bg-bright-red')}>START</span>
          </div>
        </Row>
        {_.map(timeline, (event, idx) =>
          <TimelineEvent key={idx}
                         event={event}
                         expanded={selected === idx}
                         onClick={_.bind(this.onClick, this, idx)}/>
        )}
      </WidgetContent>
    )
  }
}