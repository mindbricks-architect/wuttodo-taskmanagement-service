const { ListTasksManager } = require("apiLayer");

const TaskManagementRestController = require("../../TaskManagementServiceRestController");

class ListTasksRestController extends TaskManagementRestController {
  constructor(req, res) {
    super("listTasks", "listtasks", req, res);
    this.dataName = "tasks";
    this.crudType = "list";
    this.status = 200;
    this.httpMethod = "GET";
  }

  createApiManager() {
    return new ListTasksManager(this._req, "rest");
  }
}

const listTasks = async (req, res, next) => {
  const controller = new ListTasksRestController(req, res);
  try {
    await controller.processRequest();
  } catch (err) {
    return next(err);
  }
};

module.exports = listTasks;
