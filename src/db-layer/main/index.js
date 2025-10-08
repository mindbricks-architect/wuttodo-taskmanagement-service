const taskFunctions = require("./task");
const newtasktotestFunctions = require("./newtasktotest");

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
};
