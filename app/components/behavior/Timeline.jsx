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

const cx = require('classnames/bind').bind(styles)

//
const SectionSummary = ({sections}) => {
  const section = _.maxBy(_.toPairs(sections), (a) => a[1].mean)
  console.log('section summary updated')
  return (
    <div className={cx('section-summary')}>
      Most user visits <span>{section[1].name}</span>
    </div>
  )
}

SectionSummary.propTypes = {
  sections: PropTypes.object.isRequired
}

//
const ActionSummary = ({actions}) => {
  return (
    <div className={cx('action-summary')}>
      <span>Action summary</span>
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
    <div className={cx('stat-summary')}>
      <p><span>{stats.reach}</span> users reached</p>
      <p><span>{stats.drop}</span> users dropped</p>
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
    <div className={cx('tag-summary')}>
      <p><span>{tag[1].mean + '%'}</span> interested in <span>{_.startCase(tag[0])}</span></p>
    </div>
  )
}

InfoTagsSummary.propTypes = {
  tags: PropTypes.object.isRequired
}

//
const InfoTags = ({tags}) => {
  tags = _.sortBy(_.toPairs(tags), (t) => -t[1].mean)
  return (
    <div className={cx('infotags-full')}>
      <span>Information</span>
      <table className={cx('table')}>
        <thead>
          <tr>
            <th>% Interested in</th>
            <th>Topic</th>
          </tr>
        </thead>
        <tbody>
          {_.map(tags, (tag, idx) =>
            <tr key={idx}>
              <td>
                <div className={cx("progress")}>
                  <div className={cx("progress-bar")} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: (tag[1].mean + "%")}}>
                    {tag[1].mean}
                  </div>
                </div>
              </td>
              <td>{_.startCase(tag[0])}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

InfoTags.propTypes = {
  tags: PropTypes.object.isRequired
}

//
const Section = ({sections}) => {
  const data = {
    labels: _.map(sections, (sec) => sec.name),
    datasets: [
      {
        data: _.map(sections, (sec) => sec.mean),
        backgroundColor: _.map(sections, (sec) => '#1abc9c'),
        hoverBackgroundColor: _.map(sections, (sec) => '#16a085')
      }
    ]
  }

  return (
    <div className={cx('section-full')}>
      <span>Section Visits</span>
      <div><Doughnut data={data}/></div>
    </div>)
}

Section.propTypes = {
  sections: PropTypes.array.isRequired
}

//
const Action = ({actions}) => {
  const rows = []
  var count = 0
  _.forEach(actions, (action, idx) => {
    rows.push(
      <tr key={idx}><td colSpan={3} className={cx('h')}>{action.category}:{action.name} ({action.label})</td></tr>)
    _.forEach(action.stats, (values, prop) => {
      count += 1
      rows.push(
        <tr key={count + 'h'}>
          <td>1</td>
          <td colSpan={2}>{prop}</td>
        </tr>)
      _.forEach(values, (stat, value) => {
        count += 1
        rows.push(
          <tr key={count + 's'}>
            <td></td>
            <td>{value}</td>
            <td>{stat}</td>
          </tr>)
      })
    })
  })

  return (
    <div className={cx('action-full')}>
      <span>Action Stats</span>
      <table className={cx('table', 'table-bordered')}>
        <tbody>
          {rows}
        </tbody>
      </table>
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
      <Row className={cx('event-block', {selected: expanded})}
           onClick={onClick}>
        <Column size='md-5' className={cx('event-information')}>
          <div className={cx('fadeIn', {hidden: expanded})}>
            <InfoTagsSummary tags={event.tags}/>
            <SectionSummary sections={event.sections}/>
          </div>
          <div className={cx('fadeIn', {hidden: !expanded})}>
            <InfoTags tags={event.tags}/>
            <Section sections={event.sections}/>
          </div>
        </Column>

        <Column size='md-1' className={cx('duration')}>
          <span>{"10 secs"}</span>
        </Column>

        <Column size='md-6' className={cx('event-action')}>
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
      <WidgetContent className={cx('timeline')}>
        <div className={cx('th')}><span>TIMELINE</span></div>
        <Row className={cx('event-block', 'no-hover')}>
          <div className={cx('duration')}>
            <span>START</span>
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