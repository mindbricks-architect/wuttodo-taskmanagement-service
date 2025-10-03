const utils = require("./utils");
const dbApiScripts = require("./dbApiScripts");

module.exports = {
  createTask: utils.createTask,
  getIdListOfTaskByField: utils.getIdListOfTaskByField,
  getTaskById: utils.getTaskById,
  getTaskAggById: utils.getTaskAggById,
  getTaskListByQuery: utils.getTaskListByQuery,
  getTaskStatsByQuery: utils.getTaskStatsByQuery,
  getTaskByQuery: utils.getTaskByQuery,
  updateTaskById: utils.updateTaskById,
  updateTaskByIdList: utils.updateTaskByIdList,
  updateTaskByQuery: utils.updateTaskByQuery,
  deleteTaskById: utils.deleteTaskById,
  deleteTaskByQuery: utils.deleteTaskByQuery,
  dbScriptCreateTask: dbApiScripts.dbScriptCreateTask,
  dbScriptUpdateTask: dbApiScripts.dbScriptUpdateTask,
  dbScriptDeleteTask: dbApiScripts.dbScriptDeleteTask,
  dbScriptGetTask: dbApiScripts.dbScriptGetTask,
  dbScriptListTasks: dbApiScripts.dbScriptListTasks,
};
