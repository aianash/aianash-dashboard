import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import styles from 'css/main'
import { Container, Row, Column } from 'components/commons'
import { Header, Cluster, Story } from 'components/behavior'
import { instancesCacheKey, behaviorEntityCacheKey } from 'utils'

const cx = require('classnames/bind').bind(styles)

import * as actions from 'actions'

//
class Behavior extends Component {
  constructor(props) {
    super(props)

    const {forDate, dispatch} = props
    dispatch(actions.instances.load({forDate}))

    this.refreshPages   = this.refreshPages.bind(this)
    this.selectPage     = this.selectPage.bind(this)
    this.selectForDate  = this.selectForDate.bind(this)
    this.selectInstance = this.selectInstance.bind(this)
    this.selectBehavior = this.selectBehavior.bind(this)
  }

  componentDidMount() {
    if(this.props.pages.entities.length === 0) this.refreshPages()
  }

  static propTypes = {
    tokenId: PropTypes.string.isRequired,
    forDate: PropTypes.object,
    pageId: PropTypes.string,
    pages: PropTypes.object,
    instanceConfig: PropTypes.object,
    instanceId: PropTypes.string,
    cluster: PropTypes.object,
    behaviorId: PropTypes.string,
    story: PropTypes.object,
    stat: PropTypes.object,
    dispatch: PropTypes.func.isRequired
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
    const {dispatch, pageId, instanceId} = this.props
    dispatch(actions.behavior.select({behaviorId}))
    dispatch(actions.behavior.load({pageId, instanceId, behaviorId}))
  }

  //
  render() {
    const {tokenId, forDate, pageId, instanceId, behaviorId} = this.props
    const {pages, instances} = this.props
    const {cluster, story, stat} = this.props
    return (
      <Container fluid={true}>
        <Header
          tokenId={tokenId}
          forDate={forDate}
          pageId={pageId}
          pages={pages}
          instances={instances}
          refreshPages={this.refreshPages}
          selectPage={this.selectPage}
          selectForDate={this.selectForDate}
          selectInstance={this.selectInstance}/>
        <Row column='md-12'>
          <Cluster
            instanceId={instanceId}
            cluster={cluster}
            stat={stat}
            selectBehavior={this.selectBehavior}/>
        </Row>
        <Row>
          <Column size='md-8'><Story story={story}/></Column>
        </Row>
      </Container>
    )
  }
}

//
function mapStateToProps(state) {
  const {tokenId, forDate, pageId, instanceId, pages, instances} = state.context
  const {behaviorId, clusters, stories, stats} = state.behaviors

  const cluster = clusters[instancesCacheKey(pageId, instanceId)] || {}

  const key = behaviorEntityCacheKey(pageId, instanceId, behaviorId)
  const story = stories[key] || {}
  const stat = stats[key] || {}

  return {
    tokenId,
    forDate,
    pageId,
    pages,
    instances,
    instanceId,
    cluster,
    behaviorId,
    story,
    stat
  }
}

export default connect(mapStateToProps)(Behavior)