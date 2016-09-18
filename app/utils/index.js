import _ from 'lodash'

//
export function isInstancesValid(instances, forDate) {
  const {activeFrom, activeTo} = instances
  if(activeTo === 'ACTIVE')
    if(forDate.isAfter(activeFrom, 'day')) return true
  else if(forDate.isBetween(activeFrom, activeTo, 'day', '[]'))
    return true
  return false
}

export function createInstanceId(forDate, span) {
  return forDate.format('YYYY-MM-DD') + '-' + span[0] + '-' + span[1]
}

export function instancesCacheKey(pageId, instanceId) {
  return `${pageId}:${instanceId}`
}

export function behaviorEntityCacheKey(pageId, instanceId, behaviorId) {
  return `${pageId}:${instanceId}:${behaviorId}`
}

export function findInstanceIdx(instanceId, spans = []) {
  const components = instanceId.split('-')
  if(components.length !== 0) {
    const start = parseInt(components[3])
    const end = parseInt(components[4])
    return _.findIndex(spans, (span) =>
      (span[0] === start && span[1] === end)
    )
  }
}