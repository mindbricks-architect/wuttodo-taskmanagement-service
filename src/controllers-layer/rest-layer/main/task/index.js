const express = require("express");

// Task Db Object Rest Api Router
const taskRouter = express.Router();

// add Task controllers

// createTask controller
taskRouter.post("/v1/tasks", require("./create-task-api"));
// updateTask controller
taskRouter.patch("/v1/tasks/:taskId", require("./update-task-api"));
// deleteTask controller
taskRouter.delete("/v1/tasks/:taskId", require("./delete-task-api"));
// getTask controller
taskRouter.get("/v1/tasks/:taskId", require("./get-task-api"));
// listTasks controller
taskRouter.get("/v1/tasks", require("./list-tasks-api"));

module.exports = taskRouter;
