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

const { dbScriptUpdateTask } = require("dbLayer");

class UpdateTaskManager extends TaskManager {
  constructor(request, controllerType) {
    super(request, {
      name: "updateTask",
      controllerType: controllerType,
      pagination: false,
      crudType: "update",
      loginRequired: true,
    });

    this.dataName = "task";
  }

  parametersToJson(jsonObj) {
    super.parametersToJson(jsonObj);
    jsonObj.taskId = this.taskId;
    jsonObj.title = this.title;
    jsonObj.hik = this.hik;
    jsonObj.djnshdffhiew = this.djnshdffhiew;
  }

  async checkBasicAuth() {
    if (this.checkAbsolute()) return true;
  }

  readRestParameters(request) {
    this.taskId = request.params?.taskId;
    this.title = request.body?.title;
    this.hik = request.body?.hik;
    this.djnshdffhiew = request.body?.djnshdffhiew;
    this.requestData = request.body;
    this.queryData = request.query ?? {};
    const url = request.url;
    this.urlPath = url.slice(1).split("/").join(".");
  }

  readMcpParameters(request) {
    this.taskId = request.mcpParams.taskId;
    this.title = request.mcpParams.title;
    this.hik = request.mcpParams.hik;
    this.djnshdffhiew = request.mcpParams.djnshdffhiew;
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

  // data clause methods

  async buildDataClause() {
    const { hashString } = require("common");

    const dataClause = {
      title: this.title,
      hik: this.hik,
      djnshdffhiew: this.djnshdffhiew,
    };

    let isEmpty = true;
    for (const key of Object.keys(dataClause)) {
      if (dataClause[key] !== undefined) {
        isEmpty = false;
        break;
      }
    }

    if (isEmpty) {
      throw new BadRequestError("errMsg_UpdateDataClauseCanNotBeEmpty");
    }

    return dataClause;
  }

  async fetchInstance() {
    const { getTaskByQuery } = require("dbLayer");
    this.task = await getTaskByQuery(this.whereClause);
    if (!this.task) {
      throw new NotFoundError("errMsg_RecordNotFound");
    }
    this._instance = this.task;
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
    const task = await dbScriptUpdateTask(this);
    return task;
  }

  async addToOutput() {}

  // Work Flow

  // Action Store
}

module.exports = UpdateTaskManager;
