const { UpdateTaskManager } = require("apiLayer");

const TaskManagementRestController = require("../../TaskManagementServiceRestController");

class UpdateTaskRestController extends TaskManagementRestController {
  constructor(req, res) {
    super("updateTask", "updatetask", req, res);
    this.dataName = "task";
    this.crudType = "update";
    this.status = 200;
    this.httpMethod = "PATCH";
  }

  createApiManager() {
    return new UpdateTaskManager(this._req, "rest");
  }
}

const updateTask = async (req, res, next) => {
  const controller = new UpdateTaskRestController(req, res);
  try {
    await controller.processRequest();
  } catch (err) {
    return next(err);
  }
};

module.exports = updateTask;
