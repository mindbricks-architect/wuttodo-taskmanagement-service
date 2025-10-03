const TaskManagementServiceMcpController = require("./TaskManagementServiceMcpController");

module.exports = (name, routeName, params) => {
  const mcpController = new TaskManagementServiceMcpController(
    name,
    routeName,
    params,
  );
  return mcpController;
};
