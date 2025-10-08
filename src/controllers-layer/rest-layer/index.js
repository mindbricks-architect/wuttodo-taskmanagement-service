const mainRouters = require("./main");

const sessionRouter = require("./session-router");

module.exports = {
  ...mainRouters,
  TaskManagementServiceRestController: require("./TaskManagementServiceRestController"),
  ...sessionRouter,
};
