const { HttpServerError, HttpError, PaymentGateError } = require("common");
const { hexaLogger } = require("common");
const { ElasticIndexer } = require("serviceCommon");

const TaskManagementServiceManager = require("../../service-manager/TaskManagementServiceManager");

/* Base Class For the Crud Routes Of DbObject Gfsga */
class GfsgaManager extends TaskManagementServiceManager {
  constructor(request, options) {
    super(request, options);
    this.objectName = "gfsga";
    this.modelName = "Gfsga";
  }

  toJSON() {
    const jsonObj = super.toJSON();

    return jsonObj;
  }
}

module.exports = GfsgaManager;
