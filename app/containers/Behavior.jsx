import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import styles from 'css/main'
import { Container, Row, Column } from 'components/commons'
import { Header, Cluster, Story } from 'components/behavior'

const cx = require('classnames/bind').bind(styles)

import * as actions from 'actions'
const { instances, pages, cluster, behavior } = actions

class Behavior extends Component {
  constructor(props) {
    super(props)

    this.refreshPages = this.refreshPages.bind(this)
    this.selectPageForDate = this.selectPageForDate.bind(this)
    this.selectInstance = this.selectInstance.bind(this)
    this.selectBehavior = this.selectBehavior.bind(this)
  }

  componentDidMount() {
    if(this.props.pages.entities.length === 0)
      this.refreshPages()
  }

  static propTypes = {
    tokenId: PropTypes.string.isRequired,
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
    dispatch(pages.load({tokenId}))
  }

  //
  selectPageForDate(pageId, forDate) {
    const {dispatch} = this.props
    dispatch(pages.select({pageId}))
    dispatch(instances.load({pageId, forDate}))
  }

  //
  selectInstance(instanceId) {
    const {dispatch, pageId} = this.props
    dispatch(instances.select({instanceId}))
    dispatch(cluster.load({pageId, instanceId}))
  }

  //
  selectBehavior(behaviorId) {
    const {dispatch, pageId, instanceId} = this.props
    dispatch(behavior.select({behaviorId}))
    dispatch(behavior.load({pageId, instanceId, behaviorId}))
  }

  //
  render() {
    const {tokenId, pageId, instanceId, behaviorId} = this.props
    const {pages, instances} = this.props
    const {cluster, story, stat, information, pageSeq} = this.props

    return (
      <Container fluid={true}>
        <Row>
          <Header
            tokenId={tokenId}
            pageId={pageId}
            pages={pages}
            instances={instances}
            refreshPages={this.refreshPages}
            selectPageForDate={this.selectPageForDate}
            selectInstance={this.selectInstance}/>
        </Row>
        <Row>
          <Cluster
            instanceId={instanceId}
            cluster={cluster}
            stat={stat}
            selectBehavior={this.selectBehavior}/>
        </Row>
        <Row>
          <Column size='md-8'><Story story={story} information={information}/></Column>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  const {tokenId, pageId, instanceId, pages, instancesByPageId} = state.context
  const {behaviorId, clusters, stories, stats} = state.behaviors

  const instances = instancesByPageId[pageId] || {}
  const cluster = clusters[`${pageId}:${instanceId}`] || {}

  const key = `${pageId}:${instanceId}:${behaviorId}`
  const story = stories[key] || {}
  const stat = stats[key] || {}

  return {
    tokenId,
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