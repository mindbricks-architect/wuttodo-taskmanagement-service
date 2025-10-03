const taskFunctions = require("./task");

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
};
