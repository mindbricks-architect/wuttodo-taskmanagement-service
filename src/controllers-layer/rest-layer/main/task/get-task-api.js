const { GetTaskManager } = require("apiLayer");

const TaskManagementRestController = require("../../TaskManagementServiceRestController");

class GetTaskRestController extends TaskManagementRestController {
  constructor(req, res) {
    super("getTask", "gettask", req, res);
    this.dataName = "task";
    this.crudType = "get";
    this.status = 200;
    this.httpMethod = "GET";
  }

  createApiManager() {
    return new GetTaskManager(this._req, "rest");
  }
}

const getTask = async (req, res, next) => {
  const controller = new GetTaskRestController(req, res);
  try {
    await controller.processRequest();
  } catch (err) {
    return next(err);
  }
};

module.exports = getTask;
