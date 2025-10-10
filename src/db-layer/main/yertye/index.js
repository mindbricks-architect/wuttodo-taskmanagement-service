const utils = require("./utils");
const dbApiScripts = require("./dbApiScripts");

module.exports = {
  createYertye: utils.createYertye,
  getIdListOfYertyeByField: utils.getIdListOfYertyeByField,
  getYertyeById: utils.getYertyeById,
  getYertyeAggById: utils.getYertyeAggById,
  getYertyeListByQuery: utils.getYertyeListByQuery,
  getYertyeStatsByQuery: utils.getYertyeStatsByQuery,
  getYertyeByQuery: utils.getYertyeByQuery,
  updateYertyeById: utils.updateYertyeById,
  updateYertyeByIdList: utils.updateYertyeByIdList,
  updateYertyeByQuery: utils.updateYertyeByQuery,
  deleteYertyeById: utils.deleteYertyeById,
  deleteYertyeByQuery: utils.deleteYertyeByQuery,
};
