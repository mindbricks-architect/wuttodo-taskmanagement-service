module.exports = (headers) => {
  // main Database Crud Object Mcp Api Routers
  return {
    taskMcpRouter: require("./task")(headers),
  };
};
