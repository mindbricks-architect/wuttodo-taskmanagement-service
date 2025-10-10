module.exports = {
  TaskManagementServiceManager: require("./service-manager/TaskManagementServiceManager"),
  // main Database Crud Object Routes Manager Layer Classes
  // Task Db Object
  CreateTaskManager: require("./main/task/create-task-api"),
  UpdateTaskManager: require("./main/task/update-task-api"),
  DeleteTaskManager: require("./main/task/delete-task-api"),
  GetTaskManager: require("./main/task/get-task-api"),
  ListTasksManager: require("./main/task/list-tasks-api"),
  // Newtasktotest Db Object
  // Rfewtgwre Db Object
  // Trewytgre Db Object
  // Gfsga Db Object
  integrationRouter: require("./integrations/testRouter"),
};
