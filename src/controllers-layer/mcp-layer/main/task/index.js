module.exports = (headers) => {
  // Task Db Object Rest Api Router
  const taskMcpRouter = [];

  // createTask controller
  taskMcpRouter.push(require("./create-task-api")(headers));
  // updateTask controller
  taskMcpRouter.push(require("./update-task-api")(headers));
  // deleteTask controller
  taskMcpRouter.push(require("./delete-task-api")(headers));
  // getTask controller
  taskMcpRouter.push(require("./get-task-api")(headers));
  // listTasks controller
  taskMcpRouter.push(require("./list-tasks-api")(headers));

  return taskMcpRouter;
};
