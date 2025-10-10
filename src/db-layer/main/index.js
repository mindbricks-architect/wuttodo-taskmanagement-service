const taskFunctions = require("./task");
const newtasktotestFunctions = require("./newtasktotest");
const rfewtgwreFunctions = require("./rfewtgwre");
const trewytgreFunctions = require("./trewytgre");

module.exports = {
  // main Database
  createTask: taskFunctions.createTask,
  getIdListOfTaskByField: taskFunctions.getIdListOfTaskByField,
  getTaskById: taskFunctions.getTaskById,
  getTaskAggById: taskFunctions.getTaskAggById,
  getTaskListByQuery: taskFunctions.getTaskListByQuery,
  getTaskStatsByQuery: taskFunctions.getTaskStatsByQuery,
  getTaskByQuery: taskFunctions.getTaskByQuery,
  updateTaskById: taskFunctions.updateTaskById,
  updateTaskByIdList: taskFunctions.updateTaskByIdList,
  updateTaskByQuery: taskFunctions.updateTaskByQuery,
  deleteTaskById: taskFunctions.deleteTaskById,
  deleteTaskByQuery: taskFunctions.deleteTaskByQuery,
  dbScriptCreateTask: taskFunctions.dbScriptCreateTask,
  dbScriptUpdateTask: taskFunctions.dbScriptUpdateTask,
  dbScriptDeleteTask: taskFunctions.dbScriptDeleteTask,
  dbScriptGetTask: taskFunctions.dbScriptGetTask,
  dbScriptListTasks: taskFunctions.dbScriptListTasks,
  createNewtasktotest: newtasktotestFunctions.createNewtasktotest,
  getIdListOfNewtasktotestByField:
    newtasktotestFunctions.getIdListOfNewtasktotestByField,
  getNewtasktotestById: newtasktotestFunctions.getNewtasktotestById,
  getNewtasktotestAggById: newtasktotestFunctions.getNewtasktotestAggById,
  getNewtasktotestListByQuery:
    newtasktotestFunctions.getNewtasktotestListByQuery,
  getNewtasktotestStatsByQuery:
    newtasktotestFunctions.getNewtasktotestStatsByQuery,
  getNewtasktotestByQuery: newtasktotestFunctions.getNewtasktotestByQuery,
  updateNewtasktotestById: newtasktotestFunctions.updateNewtasktotestById,
  updateNewtasktotestByIdList:
    newtasktotestFunctions.updateNewtasktotestByIdList,
  updateNewtasktotestByQuery: newtasktotestFunctions.updateNewtasktotestByQuery,
  deleteNewtasktotestById: newtasktotestFunctions.deleteNewtasktotestById,
  deleteNewtasktotestByQuery: newtasktotestFunctions.deleteNewtasktotestByQuery,

  createRfewtgwre: rfewtgwreFunctions.createRfewtgwre,
  getIdListOfRfewtgwreByField: rfewtgwreFunctions.getIdListOfRfewtgwreByField,
  getRfewtgwreById: rfewtgwreFunctions.getRfewtgwreById,
  getRfewtgwreAggById: rfewtgwreFunctions.getRfewtgwreAggById,
  getRfewtgwreListByQuery: rfewtgwreFunctions.getRfewtgwreListByQuery,
  getRfewtgwreStatsByQuery: rfewtgwreFunctions.getRfewtgwreStatsByQuery,
  getRfewtgwreByQuery: rfewtgwreFunctions.getRfewtgwreByQuery,
  updateRfewtgwreById: rfewtgwreFunctions.updateRfewtgwreById,
  updateRfewtgwreByIdList: rfewtgwreFunctions.updateRfewtgwreByIdList,
  updateRfewtgwreByQuery: rfewtgwreFunctions.updateRfewtgwreByQuery,
  deleteRfewtgwreById: rfewtgwreFunctions.deleteRfewtgwreById,
  deleteRfewtgwreByQuery: rfewtgwreFunctions.deleteRfewtgwreByQuery,

  createTrewytgre: trewytgreFunctions.createTrewytgre,
  getIdListOfTrewytgreByField: trewytgreFunctions.getIdListOfTrewytgreByField,
  getTrewytgreById: trewytgreFunctions.getTrewytgreById,
  getTrewytgreAggById: trewytgreFunctions.getTrewytgreAggById,
  getTrewytgreListByQuery: trewytgreFunctions.getTrewytgreListByQuery,
  getTrewytgreStatsByQuery: trewytgreFunctions.getTrewytgreStatsByQuery,
  getTrewytgreByQuery: trewytgreFunctions.getTrewytgreByQuery,
  updateTrewytgreById: trewytgreFunctions.updateTrewytgreById,
  updateTrewytgreByIdList: trewytgreFunctions.updateTrewytgreByIdList,
  updateTrewytgreByQuery: trewytgreFunctions.updateTrewytgreByQuery,
  deleteTrewytgreById: trewytgreFunctions.deleteTrewytgreById,
  deleteTrewytgreByQuery: trewytgreFunctions.deleteTrewytgreByQuery,
};
