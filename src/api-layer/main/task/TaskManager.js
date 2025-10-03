const { HttpServerError, HttpError, PaymentGateError } = require("common");
const { hexaLogger } = require("common");
const { ElasticIndexer } = require("serviceCommon");

const TaskManagementServiceManager = require("../../service-manager/TaskManagementServiceManager");

/* Base Class For the Crud Routes Of DbObject Task */
class TaskManager extends TaskManagementServiceManager {
  constructor(request, options) {
    super(request, options);
    this.objectName = "task";
    this.modelName = "Task";
  }

  toJSON() {
    const jsonObj = super.toJSON();

    return jsonObj;
  }
}

module.exports = TaskManager;
