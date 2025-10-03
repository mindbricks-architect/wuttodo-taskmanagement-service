const mainMcpRouters = require("./main");
const sessionRouter = require("./session-router");
module.exports = (headers) => {
  return {
    ...mainMcpRouters(headers),
    TaskManagementServiceMcpController: require("./TaskManagementServiceMcpController"),
    ...sessionRouter,
  };
};
