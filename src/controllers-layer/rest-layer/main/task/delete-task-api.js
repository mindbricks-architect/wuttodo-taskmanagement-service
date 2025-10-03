const { DeleteTaskManager } = require("apiLayer");

const TaskManagementRestController = require("../../TaskManagementServiceRestController");

class DeleteTaskRestController extends TaskManagementRestController {
  constructor(req, res) {
    super("deleteTask", "deletetask", req, res);
    this.dataName = "task";
    this.crudType = "delete";
    this.status = 200;
    this.httpMethod = "DELETE";
  }

  createApiManager() {
    return new DeleteTaskManager(this._req, "rest");
  }
}

const deleteTask = async (req, res, next) => {
  const controller = new DeleteTaskRestController(req, res);
  try {
    await controller.processRequest();
  } catch (err) {
    return next(err);
  }
};

module.exports = deleteTask;
