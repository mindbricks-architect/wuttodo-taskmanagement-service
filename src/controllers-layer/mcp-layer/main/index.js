module.exports = (headers) => {
  // main Database Crud Object Mcp Api Routers
  return {
    taskMcpRouter: require("./task")(headers),
    newtasktotestMcpRouter: require("./newtasktotest")(headers),
    rfewtgwreMcpRouter: require("./rfewtgwre")(headers),
    trewytgreMcpRouter: require("./trewytgre")(headers),
  };
};
