import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import styles from 'css/main'
import { Container, Row, Column, Separator } from 'components/commons'
import { Header, Cluster, Story, BehaviorStats, Information, PageStats, BehaviorTimeSeries } from 'components/behavior'
import { instancesCacheKey, behaviorEntityCacheKey } from 'utils'

const cx = require('classnames/bind').bind(styles)

import * as actions from 'actions'

//
class Behavior extends Component {
  constructor(props) {
    super(props)

    this.refreshPages   = this.refreshPages.bind(this)
    this.selectPage     = this.selectPage.bind(this)
    this.selectForDate  = this.selectForDate.bind(this)
    this.selectInstance = this.selectInstance.bind(this)
    this.selectBehavior = this.selectBehavior.bind(this)
  }

  componentDidMount() {
    if(this.props.pages.entities.length === 0) this.refreshPages()
  }

  componentWillReceiveProps(nextProps) {
    if(_.isEmpty(nextProps.behaviorId))
      this.setState({showInformation: true})
  }

  static propTypes = {
    tokenId: PropTypes.string.isRequired,
    forDate: PropTypes.object,
    pageId: PropTypes.string,
    pages: PropTypes.object,
    instances: PropTypes.object,
    pageStat: PropTypes.object,
    instanceId: PropTypes.string,
    cluster: PropTypes.object,
    information: PropTypes.object,
    behaviorId: PropTypes.string,
    story: PropTypes.object,
    stat: PropTypes.object,
    dispatch: PropTypes.func.isRequired
  }

  state = {
    showInformation: true
  }

  //
  refreshPages() {
    const {dispatch, tokenId} = this.props
    dispatch(actions.pages.load({tokenId}))
  }

  //
  selectForDate(forDate) {
    const {dispatch} = this.props
    dispatch(actions.forDate.select({forDate}))
    dispatch(actions.instances.load({forDate}))
  }

  //
  selectPage(page) {
    const {pageId} = page
    const {instanceId, dispatch} = this.props
    dispatch(actions.pages.select({pageId}))
  }

  //
  selectInstance(instanceId) {
    const {dispatch, pageId} = this.props
    dispatch(actions.instances.select({instanceId}))
  }

  //
  selectBehavior(behaviorId) {
    console.log(behaviorId)
    if(behaviorId === 'ALL') {
      this.setState({showInformation: true})
    } else {
      const {dispatch, pageId, instanceId} = this.props
      this.setState({showInformation: false})
      dispatch(actions.behavior.select({behaviorId}))
      dispatch(actions.behavior.load({pageId, instanceId, behaviorId}))
    }
  }

  //
  render() {
    const {tokenId, forDate, pageId, instanceId, behaviorId} = this.props
    const {pages, instances, pageStat} = this.props
    const {information, cluster, story, stat} = this.props
    const {showInformation} = this.state

    return (
      <Container fluid={true}>
        <Header
          tokenId={tokenId}
          forDate={forDate}
          pageId={pageId}
          instanceId={instanceId}
          pages={pages}
          instances={instances}
          refreshPages={this.refreshPages}
          selectPage={this.selectPage}
          selectForDate={this.selectForDate}
          selectInstance={this.selectInstance}/>
        <Separator title='WEB PAGE'/>
        <PageStats
          pageStat={pageStat}/>
        <Separator title='BEHAVIOR'/>
        <Row column='md-12'>
          <BehaviorTimeSeries information={information} behaviorId='ALL'/>
        </Row>
        <Row>
          <Column size='md-2'>
            <Cluster
              instanceId={instanceId}
              behaviorId={showInformation ? 'ALL' : behaviorId}
              cluster={cluster}
              stat={stat}
              selectBehavior={this.selectBehavior}/>
          </Column>
          <Column size='md-10'>
            <Row column='md-12' className={cx({hidden: !showInformation})}>
              <Information information={information} selectBehavior={this.selectBehavior}/>
            </Row>
            <Row className={cx({hidden: showInformation})}>
              <Column size='md-8'>
                <Story story={story}/>
              </Column>
              <Column size='md-4'><BehaviorStats stat={stat}/></Column>
            </Row>
          </Column>
        </Row>
      </Container>
    )
  }
}

//
function mapStateToProps(state) {
  const {tokenId, forDate, pageId, instanceId, pages, instances, pageStats} = state.context
  const {behaviorId, clusters, stories, stats, informations} = state.behaviors

  const ikey = instancesCacheKey(pageId, instanceId)
  const pageStat = pageStats[ikey] || {}
  const cluster = clusters[ikey] || {}
  const information = informations[ikey] || {}

  const key = behaviorEntityCacheKey(pageId, instanceId, behaviorId)
  const story = stories[key] || {}
  const stat = stats[key] || {}

  return {
    tokenId,
    forDate,
    pageId,
    pages,
    instances,
    pageStat,
    instanceId,
    cluster,
    information,
    behaviorId,
    story,
    stat
  }
}

export default connect(mapStateToProps)(Behavior)