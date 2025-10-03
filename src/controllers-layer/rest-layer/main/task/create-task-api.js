const { CreateTaskManager } = require("apiLayer");

const TaskManagementRestController = require("../../TaskManagementServiceRestController");

class CreateTaskRestController extends TaskManagementRestController {
  constructor(req, res) {
    super("createTask", "createtask", req, res);
    this.dataName = "task";
    this.crudType = "create";
    this.status = 201;
    this.httpMethod = "POST";
  }

  createApiManager() {
    return new CreateTaskManager(this._req, "rest");
  }
}

const createTask = async (req, res, next) => {
  const controller = new CreateTaskRestController(req, res);
  try {
    await controller.processRequest();
  } catch (err) {
    return next(err);
  }
};

module.exports = createTask;
