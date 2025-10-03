const mainFunctions = require("./main");

module.exports = {
  // main Database
  createTask: mainFunctions.createTask,
  getIdListOfTaskByField: mainFunctions.getIdListOfTaskByField,
  getTaskById: mainFunctions.getTaskById,
  getTaskAggById: mainFunctions.getTaskAggById,
  getTaskListByQuery: mainFunctions.getTaskListByQuery,
  getTaskStatsByQuery: mainFunctions.getTaskStatsByQuery,
  getTaskByQuery: mainFunctions.getTaskByQuery,
  updateTaskById: mainFunctions.updateTaskById,
  updateTaskByIdList: mainFunctions.updateTaskByIdList,
  updateTaskByQuery: mainFunctions.updateTaskByQuery,
  deleteTaskById: mainFunctions.deleteTaskById,
  deleteTaskByQuery: mainFunctions.deleteTaskByQuery,
  dbScriptCreateTask: mainFunctions.dbScriptCreateTask,
  dbScriptUpdateTask: mainFunctions.dbScriptUpdateTask,
  dbScriptDeleteTask: mainFunctions.dbScriptDeleteTask,
  dbScriptGetTask: mainFunctions.dbScriptGetTask,
  dbScriptListTasks: mainFunctions.dbScriptListTasks,
};
