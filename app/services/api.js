import 'isomorphic-fetch';

const API_ROOT = 'http://localhost:9000/api/';

function callApi(method, endpoint, body) {
  const url = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  const options = { method }
  if(body) {
    options.body = JSON.stringify(body)
    options.headers = {
      'content-type': 'text/json'
    }
  }

  return fetch(url, options)
    .then(response =>
      response.json().then(json => ({json, response}))
    ).then(({json, response}) => {
      if(!response.ok) {
        return Promise.reject(json)
      }
      return json;
    })
    .then(
      response => ({response}),
      error => ({error: error.message || 'Some internal error'})
    )
}

export const fetchPages = (tokenId) => callApi('GET', `pages/${tokenId}`);
export const fetchInstances = (tokenId, {forDate}) => callApi('GET', `instances/${tokenId}/${forDate.format('YYYY-MM-DD')}`);
export const fetchCluster = (tokenId, {pageId, instanceId}) => callApi('GET', `clusters/${tokenId}/${pageId}/${instanceId}`);
export const fetchPageStats = (tokenId, {pageId, instanceId}) => callApi('GET', `stats/${tokenId}/${pageId}/${instanceId}`);
export const fetchInformation = (tokenId, {pageId, instanceId}) => callApi('GET', `informations/${tokenId}/${pageId}/${instanceId}`);

//
function fetchBehaviorEntities(name) {
  return (tokenId, {pageId, instanceId, behaviorId}) =>
    callApi('GET', `${name}/${tokenId}/${pageId}/${instanceId}/${behaviorId}`)
}
export const fetchStory = fetchBehaviorEntities('stories')
export const fetchStat = fetchBehaviorEntities('stats')

export const searchTrail = (tokenId, {query}) => callApi('POST', `trail/${tokenId}`, query)
export const forkTrail = (tokenId, {query}) => callApi('POST', `fork/${tokenId}`, query)
export const fetchEvents = (tokenId) => callApi('GET', `events/${tokenId}`)
export const fetchEventProperties = (tokenId, {name}) => callApi('GET', `events/properties/${tokenId}/${name}`)