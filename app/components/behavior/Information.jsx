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
  Doughnut,
  RadarChart,
  LineChart } from 'components/commons'
import {InformationExplanation} from 'components/behavior'

const cx = require('classnames/bind').bind(styles)

const priorConfig = {
  label: 'Users Interest',
  backgroundColor: 'rgba(44, 62, 80,.3)',
  borderColor: 'rgba(44, 62, 80,.6)',
  pointBackgroundColor: 'rgba(44, 62, 80,.6)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgba(44, 62, 80,.6)'
}

const posteriorConfig = {
  label: 'Information Led To Conversion',
  backgroundColor: 'rgba(52, 152, 219, 0.6)',
  borderColor: 'rgba(52, 152, 219, 1)',
  pointBackgroundColor: 'rgba(52, 152, 219, 1)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
}


const BehaviorInformation = (props) => {
  const {prior, posterior} = props.information
  const priors = _.keys(prior)
  const posteriors = _.keys(posterior)
  const all = _.uniq([...priors, ...posteriors])

  const information = all.map(t => {
    return {
      tag: t,
      prm: _.get(prior, t, 0),
      pom: _.get(posterior, t, 0)
    }
  })

  const data = {
    labels: _.map(information, (t) => _.startCase(t.tag)) || [],
    datasets: [
      {
        ...posteriorConfig,
        data: _.map(information, (t) => t.pom.mean) || []
      },
      {
        ...priorConfig,
        data: _.map(information, (t) => t.prm.mean) || []
      }
    ]
  }

  return (
    <div className={cx('behavior-information-island')}>
      <RadarChart data={data}/>
    </div>
  )
}

BehaviorInformation.propTypes = {
  information: PropTypes.object.isRequired
}


const Stat = ({name, value}) => {
  return (
    <div className={cx('stat-box')}>
      <h2>{value}</h2>
      <h3>{name}</h3>
    </div>
  )
}

Stat.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

class InformationEffectiveness extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  static propTypes = {
    information: PropTypes.object.isRequired
  }

  state = {
    showExplanation: (this.props.information.effectiveness < 0 ? true : false)
  }

  toggle(e) {
    this.setState({showExplanation: !this.state.showExplanation})
    e.preventDefault()
  }

  render() {
    const {information} = this.props
    const {incper, effectiveness, explanation} = information
    const iconcss = incper < 0 ? 'icon-arrow-down' : 'icon-arrow-up'
    const percss = incper < 0 ? 'text-danger' : 'text-success'
    const {showExplanation} = this.state
    return (
      <div className={cx('information-eff')}>
        <div className={cx("stat-big")}>
          <h2 className={cx({'text-danger': (effectiveness <= 0)})}>{effectiveness}</h2>
          <div>
            <h3>NET INFORMATION EFFECTIVENESS</h3>
            <p><i className={cx(iconcss)}/> <span className={cx(percss)}>{incper}%</span> From Yesterday</p>
          </div>
          <div className={cx('stat-button')} onClick={this.toggle}>EXPLAIN</div>
        </div>
        {showExplanation && <InformationExplanation explanation={explanation}/>}
        {!showExplanation &&
          <WidgetContent>
            <BehaviorInformation information={information}/>
          </WidgetContent>}
      </div>)
  }
}

//
const InformationStats = ({stat}) => {
  return (
    <div className={cx('stat-bar')}>
      <Column size='md-4'>
        <Stat name='TOTAL VISITORS' value={stat.totalVisitors}/>
      </Column>
      <Column size='md-4'>
        <Stat name='INTERESTED VISITORS' value={stat.newVisitors}/>
      </Column>
      <Column size='md-4'>
        <Stat name='AVG DWELL TIME' value={stat.avgDwellTime}/>
      </Column>
    </div>
  )
}

InformationStats.propTypes = {
  stat: PropTypes.object.isRequired
}

//
export default class Information extends Component {
  constructor(props) {
    super(props)
    this.onShowTimeline = this.onShowTimeline.bind(this)
  }

  static propTypes = {
    information: PropTypes.object.isRequired,
    selectBehavior: PropTypes.func.isRequired
  }

  onShowTimeline(behaviorId, e) {
    this.props.selectBehavior(behaviorId)
    e.preventDefault()
  }

  render() {
    const {information, selectBehavior} = this.props
    const behaviors = information.information

    return (
      <Row>
        {_.map(behaviors, (behavior, idx) =>
          <Column key={idx} size='md-4'>
            <Widget className={cx('information')}>
              <WidgetHeading>
                <h2 className={cx('title')}>{_.startCase(behavior.name)}</h2>
                <span className={cx('header-button-right')}
                      onClick={_.bind(this.onShowTimeline, this, behavior.behaviorId)}>TIMELINE</span>
              </WidgetHeading>
              <InformationEffectiveness information={behavior.information}/>
              <InformationStats stat={behavior.stat}/>
            </Widget>
          </Column>
        )}
      </Row>
    )
  }
}