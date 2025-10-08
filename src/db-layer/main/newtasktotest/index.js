const utils = require("./utils");
const dbApiScripts = require("./dbApiScripts");

module.exports = {
  createNewtasktotest: utils.createNewtasktotest,
  getIdListOfNewtasktotestByField: utils.getIdListOfNewtasktotestByField,
  getNewtasktotestById: utils.getNewtasktotestById,
  getNewtasktotestAggById: utils.getNewtasktotestAggById,
  getNewtasktotestListByQuery: utils.getNewtasktotestListByQuery,
  getNewtasktotestStatsByQuery: utils.getNewtasktotestStatsByQuery,
  getNewtasktotestByQuery: utils.getNewtasktotestByQuery,
  updateNewtasktotestById: utils.updateNewtasktotestById,
  updateNewtasktotestByIdList: utils.updateNewtasktotestByIdList,
  updateNewtasktotestByQuery: utils.updateNewtasktotestByQuery,
  deleteNewtasktotestById: utils.deleteNewtasktotestById,
  deleteNewtasktotestByQuery: utils.deleteNewtasktotestByQuery,
};
