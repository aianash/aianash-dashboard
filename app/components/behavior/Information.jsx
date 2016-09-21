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

const cx = require('classnames/bind').bind(styles)

const priorConfig = {
  label: 'Users Interest',
  backgroundColor: 'rgba(44, 62, 80,.5)',
  borderColor: 'rgba(44, 62, 80,1.0)',
  pointBackgroundColor: 'rgba(44, 62, 80,1.0)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgba(44, 62, 80,1.0)'
}

const posteriorConfig = {
  label: 'Information Lead To Conversion',
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
        ...priorConfig,
        data: _.map(information, (t) => t.prm.mean) || []
      },
      {
        ...posteriorConfig,
        data: _.map(information, (t) => t.pom.mean) || []
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

const InformationEffectiveness = () => {
  return (
    <div className={cx("stat-big")}>
      <h2>0.3</h2>
      <div>
        <h3>INFORMATION EFFECTIVENESS</h3>
        <p><i className={cx('icon-arrow-up')}/> <span className={cx('text-success')}>10%</span> From Yesterday</p>
      </div>
    </div>)
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
const Information = ({information, selectBehavior}) => {
  const behaviors = information.information
  const onClick = (behaviorId, e) => {
    selectBehavior(behaviorId)
    e.preventDefault()
  };

  return (
    <Row>
      {_.map(behaviors, (behavior, idx) =>
        <Column key={idx} size='md-4'>
          <Widget className={cx('information')}
                  onClick={_.bind(onClick, null, behavior.behaviorId)}>
            <WidgetHeading title={_.startCase(behavior.name)}/>
            <InformationEffectiveness/>
            <WidgetContent>
              <BehaviorInformation information={behavior.information}/>
            </WidgetContent>
            <InformationStats stat={behavior.stat}/>
          </Widget>
        </Column>
      )}
    </Row>
  )
}

Information.propTypes = {
  information: PropTypes.object.isRequired,
  selectBehavior: PropTypes.func.isRequired
}

export default Information