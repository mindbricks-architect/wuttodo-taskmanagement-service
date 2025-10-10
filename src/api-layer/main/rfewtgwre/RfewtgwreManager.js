const { HttpServerError, HttpError, PaymentGateError } = require("common");
const { hexaLogger } = require("common");
const { ElasticIndexer } = require("serviceCommon");

const TaskManagementServiceManager = require("../../service-manager/TaskManagementServiceManager");

/* Base Class For the Crud Routes Of DbObject Rfewtgwre */
class RfewtgwreManager extends TaskManagementServiceManager {
  constructor(request, options) {
    super(request, options);
    this.objectName = "rfewtgwre";
    this.modelName = "Rfewtgwre";
  }

  toJSON() {
    const jsonObj = super.toJSON();

    return jsonObj;
  }
}

module.exports = RfewtgwreManager;
