export const getTokenId         = (state) => state.context.tokenId;
export const getPageId          = (state) => state.context.pageId;
export const getInstanceId      = (state) => state.context.instanceId;
export const getForDate         = (state) => state.context.forDate;

export const getPages           = (state) => state.context.pages.entities;
export const getInstances       = (state) => state.context.instances;
export const getPageStats       = (state, key) => state.context.pageStats[key];

export const getCluster         = (state, key) => state.behaviors.clusters[key];
export const getInformation     = (state, key) => state.behaviors.informations[key];
export const getStory           = (state, key) => state.behaviors.stories[key];
export const getStat            = (state, key) => state.behaviors.stats[key];

export const getEvent           = (state, name) => state.trails.events.entities[name];