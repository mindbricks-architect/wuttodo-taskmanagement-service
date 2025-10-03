const TaskManagementServiceGrpcController = require("./TaskManagementServiceGrpcController");

module.exports = (name, routeName, call, callback) => {
  const grpcController = new TaskManagementServiceGrpcController(
    name,
    routeName,
    call,
    callback,
  );
  return grpcController;
};
