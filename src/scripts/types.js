/**
 * @typedef {Array<string>} JSONLayer
 * @typedef {Array<JSONLayer>} JSONLevel
 * @typedef {Array<JSONLevel>} JSONStage
 * @typedef {Array<JSONStage>} JSONStages
 * @typedef {Object} JSONPlayer
 * @property {String} spriteSheet
 * @property {Array} idle
 * @typedef {Object}  JSONTlePrefab
 * @property {string} name
 * @property {string} type
 * @property {Array<number>} sprite 
 * @typedef {Array<tilePrefab>}  JSONTilesPrefabs
 * @typedef {Object} JSONTiles
 * @property {Array<string>} spriteSheets
 * @property {JSONTilesPrefabs} tilesPrefabs
 * @typedef {Object} JSONSettings
 * @property {JSONTiles} tiles
 * @property {JSONPlayer} player
 * @typedef {Object} JSONCampaign
 * @property {JSONSettings} settings
 * @property {JSONStages} stages
 */