export const getInstanceConfig = (state, pageId) => state.context.instances[pageId].configs;
export const getTokenId        = (state) => state.context.tokenId;
export const getStory          = (state, key) => state.behaviors.stories[key];
export const getStat           = (state, key) => state.behaviors.stats[key];
export const getInformation    = (state, key) => state.behaviors.informations[key];
export const getPageSeq        = (state, key) => state.behaviors.pageSeqs[key];