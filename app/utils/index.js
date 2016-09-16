//
export function isInstancesValid(instnaces, forDate) {
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