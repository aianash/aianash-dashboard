// import { Schema, arrayOf, normalize } from 'normalizr';
import 'isomorphic-fetch';

const API_ROOT = 'http://aianash.com/api/';

function callApi(method, endpoint, body) {
  const url = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  const options = {method, body};

  return fetch(url, options)
    .then(response =>
      response.json().then(json => ({json, response }))
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

export const fetchInstances = (tokenId, {pageId, forDate}) => callApi('GET', `instances/${tokenId}/${pageId}`, {forDate});
export const fetchClusters = (tokenId, {pageId, instanceId}) => callApi('GET', `clusters/${tokenId}/${pageId}/${instanceId}`);

function fetchBehaviorEntities(name) {
  return (tokenId, {pageId, instanceId, behaviorId}) =>
    callApi('GET', `${name}/${tokenId}/${pageId}/${instanceId}/${behaviorId}`)
}

export const fetchStory = fetchBehaviorEntities('stories');
export const fetchStat = fetchBehaviorEntities('stats');
export const fetchInformation = fetchBehaviorEntities('informations');
export const fetchPageSeq = fetchBehaviorEntities('pageSeqs');