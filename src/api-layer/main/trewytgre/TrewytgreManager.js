const { HttpServerError, HttpError, PaymentGateError } = require("common");
const { hexaLogger } = require("common");
const { ElasticIndexer } = require("serviceCommon");

const TaskManagementServiceManager = require("../../service-manager/TaskManagementServiceManager");

/* Base Class For the Crud Routes Of DbObject Trewytgre */
class TrewytgreManager extends TaskManagementServiceManager {
  constructor(request, options) {
    super(request, options);
    this.objectName = "trewytgre";
    this.modelName = "Trewytgre";
  }

  toJSON() {
    const jsonObj = super.toJSON();

    return jsonObj;
  }
}

module.exports = TrewytgreManager;
