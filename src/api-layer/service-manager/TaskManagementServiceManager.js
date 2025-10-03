const ApiManager = require("./ApiManager");

const { md5 } = require("common");

class TaskManagementServiceManager extends ApiManager {
  constructor(request, options) {
    super(request, options);
    this.serviceCodename = "wuttodo-taskmanagement-service";
    this.membershipCache = new Map();
  }

  parametersToJson(jsonObj) {
    super.parametersToJson(jsonObj);
  }
}

module.exports = TaskManagementServiceManager;
