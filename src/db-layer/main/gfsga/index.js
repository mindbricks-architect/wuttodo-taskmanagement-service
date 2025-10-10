const utils = require("./utils");
const dbApiScripts = require("./dbApiScripts");

module.exports = {
  createGfsga: utils.createGfsga,
  getIdListOfGfsgaByField: utils.getIdListOfGfsgaByField,
  getGfsgaById: utils.getGfsgaById,
  getGfsgaAggById: utils.getGfsgaAggById,
  getGfsgaListByQuery: utils.getGfsgaListByQuery,
  getGfsgaStatsByQuery: utils.getGfsgaStatsByQuery,
  getGfsgaByQuery: utils.getGfsgaByQuery,
  updateGfsgaById: utils.updateGfsgaById,
  updateGfsgaByIdList: utils.updateGfsgaByIdList,
  updateGfsgaByQuery: utils.updateGfsgaByQuery,
  deleteGfsgaById: utils.deleteGfsgaById,
  deleteGfsgaByQuery: utils.deleteGfsgaByQuery,
};
