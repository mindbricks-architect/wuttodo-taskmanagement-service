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

const { dbScriptCreateTask } = require("dbLayer");

class CreateTaskManager extends TaskManager {
  constructor(request, controllerType) {
    super(request, {
      name: "createTask",
      controllerType: controllerType,
      pagination: false,
      crudType: "create",
      loginRequired: true,
    });

    this.dataName = "task";
  }

  parametersToJson(jsonObj) {
    super.parametersToJson(jsonObj);
    jsonObj.taskId = this.taskId;
    jsonObj.title = this.title;
    jsonObj.hik = this.hik;
  }

  async checkBasicAuth() {
    if (this.checkAbsolute()) return true;
  }

  readRestParameters(request) {
    this.taskId = request.body?.taskId;
    this.title = request.body?.title;
    this.hik = request.body?.hik;
    this.id = request.body?.id ?? request.query?.id ?? request.id;
    this.requestData = request.body;
    this.queryData = request.query ?? {};
    const url = request.url;
    this.urlPath = url.slice(1).split("/").join(".");
  }

  readMcpParameters(request) {
    this.taskId = request.mcpParams.taskId;
    this.title = request.mcpParams.title;
    this.hik = request.mcpParams.hik;
    this.id = request.mcpParams?.id;
    this.requestData = request.mcpParams;
  }

  async transformParameters() {}

  // data clause methods

  async buildDataClause() {
    const { newUUID } = require("common");

    const { hashString } = require("common");

    if (this.id) this.taskId = this.id;
    if (!this.taskId) this.taskId = newUUID(false);

    const dataClause = {
      id: this.taskId,
      title: this.title,
      hik: this.hik,
      isActive: true,
    };

    return dataClause;
  }

  checkParameters() {
    if (this.title == null) {
      throw new BadRequestError("errMsg_titleisRequired");
    }

    if (this.hik == null) {
      throw new BadRequestError("errMsg_hikisRequired");
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

  async doBusiness() {
    const task = await dbScriptCreateTask(this);
    return task;
  }

  async addToOutput() {}

  // Work Flow

  // Action Store
}

module.exports = CreateTaskManager;
