const GrpcController = require("./GrpcController");

class TaskManagementServiceGrpcController extends GrpcController {
  constructor(name, routeName, call, callback) {
    super(name, routeName, call, callback);
    this.projectCodename = "wuttodo";
    this.isMultiTenant = false;
    this.tenantName = "";
    this.tenantId = "";
    this.tenantCodename = null;
    this.isLoginApi = false;
  }

  createApiManager() {
    return null;
  }
}

module.exports = TaskManagementServiceGrpcController;
