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

export default class Story extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this._fullsections = {}
  }

  static propTypes = {
    story: PropTypes.object.isRequired
  }

  state = {
    selected: 0
  }

  ////////////////////
  // Render Helpers //
  ////////////////////

  mkSectionSummary(sections) {
    const section = _.maxBy(_.toPairs(sections), (a) => a[1].mean)
    return (
      <div className={cx('section-summary')}>
        Most user visits <span>{section[1].name}</span>
      </div>)
  }

  mkActionSummary(actions) {
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

  mkStatsSummary(stat) {
    return (
      <div className={cx('stat-summary')}>
        <p><span>{stat.reach}</span> users reached</p>
        <p><span>{stat.drop}</span> users dropped</p>
      </div>
    )
  }

  mkSection(sections, idx) {
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

  mkAction(actions) {
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

  mkInfoTagsSummary(tags) {
    const tag = _.maxBy(_.toPairs(tags), (a) => a[1].mean)
    return (
      <div className={cx('tag-summary')}>
        <p><span>{tag[1].mean + '%'}</span> interested in <span>{_.startCase(tag[0])}</span></p>
      </div>
    )
  }

  mkInfoTags(_tags) {
    const tags = _.sortBy(_.toPairs(_tags), (t) => -t[1].mean)
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

  mkInformationSummary(information) {
    return (
      <div className={cx('information-summary')}>
        <span>How users gained information</span>
        <table>
          <thead>
            <tr>
              <th>RELATIVE INTEREST BEFORE VISIT</th>
              <th></th>
              <th>INFORMATION GAINED AFTER VISIT</th>
            </tr>
          </thead>
          <tbody>
            {_.map(information, (t) =>
              <tr key={t.tag}>
                <td>
                  <div className={cx("progress")}>
                    <div className={cx("progress-bar")} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: (t.prm.mean + "%")}}>
                      {t.prm.mean}
                    </div>
                  </div>
                </td>
                <td className={cx('tag')}>{_.startCase(t.tag)}</td>
                <td>
                  <div className={cx("progress")}>
                    <div className={cx("progress-bar")} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: (t.pom.mean + "%")}}>
                      {t.pom.mean}
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }

  mkInformation(information) {
    const labels = _.map(information, (t) => _.startCase(t.tag)) || []
    const data = {
      labels,
      datasets: [
        {
          label: "Interest of users before visit",
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBackgroundColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(179,181,198,1)",
          data: _.map(information, (t) => t.prm.mean) || []
        },
        {
          label: "Information gained after visit",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(255,99,132,1)",
          data: _.map(information, (t) => t.pom.mean) || []
        }
      ]
    }
    return (
      <div className={cx('information-full')}>
        <RadarChart data={data}/>
      </div>
    )
  }

  //////////////
  // Handlers //
  //////////////

  onClick(idx) {
    const {selected} = this.state
    this.setState({selected: (selected == idx) ? -1 : idx})
  }

  render() {
    const {information, timeline} = this.props.story.story || {}
    const {prior, posterior} = information || {}
    const priors = _.keys(prior)
    const posteriors = _.keys(posterior)
    const all = _.uniq([...priors, ...posteriors])

    const merged = all.map(t => {
      return {
        tag: t,
        prm: _.get(prior, t, 0),
        pom: _.get(posterior, t, 0)
      }
    })
    const {selected} = this.state

    // const showing = { fade}
    return (
      <Widget className={cx('story')}>
        <WidgetHeading title={"Behavior Story"} subtitle={"User journey on the page"}/>
        <WidgetContent className={cx('information')}>
          {this.mkInformationSummary(merged)}
          {this.mkInformation(merged)}
        </WidgetContent>
        <WidgetContent className={cx('timeline')}>
          <div className={cx('th')}><span>TIMELINE</span></div>
          <Row className={cx('event-block', 'no-hover')}>
            <div className={cx('duration')}>
              <span>START</span>
            </div>
          </Row>
          {_.map(timeline, (event, idx) =>
            <Row key={idx}
                 className={cx('event-block', {selected: (selected === idx)})}
                 onClick={this.onClick.bind(null, idx)}>
              <Column size='md-5' className={cx('event-information')}>
                <div className={cx('fadeIn', {hidden: (selected === idx)})}>
                  {this.mkInfoTagsSummary(event.tags)}
                  {this.mkSectionSummary(event.sections)}
                </div>
                <div className={cx('fadeIn', {hidden: (selected !== idx)})}>
                  {this.mkInfoTags(event.tags)}
                  {this.mkSection(event.sections, idx)}
                </div>
              </Column>

              <Column size='md-1' className={cx('duration')}>
                <span>{"10 secs"}</span>
              </Column>

              <Column size='md-6' className={cx('event-action')}>
                <div className={cx('fadeIn', {hidden: (selected === idx)})}>
                  {this.mkStatsSummary(event.stats)}
                  {this.mkActionSummary(event.actions)}
                </div>
                <div className={cx('fadeIn', {hidden: (selected !== idx)})}>
                  {this.mkStatsSummary(event.stats)}
                  {this.mkAction(event.actions)}
                </div>
              </Column>
            </Row>
          )}
        </WidgetContent>
      </Widget>
    )
  }
}