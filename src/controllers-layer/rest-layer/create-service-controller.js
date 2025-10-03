const TaskManagementServiceRestController = require("./TaskManagementServiceRestController");

module.exports = (name, routeName, req, res) => {
  const restController = new TaskManagementServiceRestController(
    name,
    routeName,
    req,
    res,
  );
  return restController;
};
