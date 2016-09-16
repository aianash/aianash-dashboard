export const getInstances       = (state, pageId) => state.context.instancesByPageId[pageId];
export const getTokenId         = (state) => state.context.tokenId;
export const getStory           = (state, key) => state.behaviors.stories[key];
export const getStat            = (state, key) => state.behaviors.stats[key];
export const getCluster         = (state, key) => state.behaviors.clusters[key];