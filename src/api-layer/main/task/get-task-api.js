const TaskManager = require("./TaskManager");
const { isValidObjectId, isValidUUID, PaymentGateError } = require("common");
const { hexaLogger } = require("common");
const { ElasticIndexer } = require("serviceCommon");
const { getRedisData } = require("common");

const getIntegrationClient = require("../../integrations");

const {
  HttpServerError,
  BadRequestError,
  NotAuthenticatedError,
  ForbiddenError,
  NotFoundError,
} = require("common");

const { dbScriptGetTask } = require("dbLayer");

class GetTaskManager extends TaskManager {
  constructor(request, controllerType) {
    super(request, {
      name: "getTask",
      controllerType: controllerType,
      pagination: false,
      crudType: "get",
      loginRequired: true,
    });

    this.dataName = "task";
  }

  parametersToJson(jsonObj) {
    super.parametersToJson(jsonObj);
    jsonObj.taskId = this.taskId;
  }

  async checkBasicAuth() {
    if (this.checkAbsolute()) return true;
  }

  readRestParameters(request) {
    this.taskId = request.params?.taskId;
    this.requestData = request.body;
    this.queryData = request.query ?? {};
    const url = request.url;
    this.urlPath = url.slice(1).split("/").join(".");
  }

  readMcpParameters(request) {
    this.taskId = request.mcpParams.taskId;
    this.requestData = request.mcpParams;
  }

  async transformParameters() {}

  // where clause methods

  async getRouteQuery() {
    return { $and: [{ id: this.taskId }, { isActive: true }] };

    // handle permission filter later
  }

  async buildWhereClause() {
    const { convertUserQueryToSequelizeQuery } = require("common");

    const routeQuery = await this.getRouteQuery();

    return convertUserQueryToSequelizeQuery(routeQuery);
  }

  async checkInstance() {
    if (!this.task) {
      throw new NotFoundError("errMsg_RecordNotFound");
    }
  }

  checkParameters() {
    if (this.taskId == null) {
      throw new BadRequestError("errMsg_taskIdisRequired");
    }

    // ID
    if (
      this.taskId &&
      !isValidObjectId(this.taskId) &&
      !isValidUUID(this.taskId)
    ) {
      throw new BadRequestError("errMsg_taskIdisNotAValidID");
    }
  }

  setOwnership() {
    this.isOwner = false;
    if (!this.session || !this.session.userId) return;

    this.isOwner = this.task?._owner === this.session.userId;
  }

  async doBusiness() {
    const task = await dbScriptGetTask(this);
    return task;
  }

  async addToOutput() {}

  // Work Flow

  // Action Store
}

module.exports = GetTaskManager;
