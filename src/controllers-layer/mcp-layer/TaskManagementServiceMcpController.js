const McpController = require("./McpController");

class TaskManagementServiceMcpController extends McpController {
  constructor(name, routeName, req, res) {
    super(name, routeName, req, res);
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

module.exports = TaskManagementServiceMcpController;
