const utils = require("./utils");
const dbApiScripts = require("./dbApiScripts");

module.exports = {
  createTrewytgre: utils.createTrewytgre,
  getIdListOfTrewytgreByField: utils.getIdListOfTrewytgreByField,
  getTrewytgreById: utils.getTrewytgreById,
  getTrewytgreAggById: utils.getTrewytgreAggById,
  getTrewytgreListByQuery: utils.getTrewytgreListByQuery,
  getTrewytgreStatsByQuery: utils.getTrewytgreStatsByQuery,
  getTrewytgreByQuery: utils.getTrewytgreByQuery,
  updateTrewytgreById: utils.updateTrewytgreById,
  updateTrewytgreByIdList: utils.updateTrewytgreByIdList,
  updateTrewytgreByQuery: utils.updateTrewytgreByQuery,
  deleteTrewytgreById: utils.deleteTrewytgreById,
  deleteTrewytgreByQuery: utils.deleteTrewytgreByQuery,
};
