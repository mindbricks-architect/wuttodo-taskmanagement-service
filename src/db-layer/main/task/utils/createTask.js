const { HttpServerError, BadRequestError } = require("common");

const { ElasticIndexer } = require("serviceCommon");

const { Task } = require("models");
const { hexaLogger, newUUID } = require("common");

const indexDataToElastic = async (data) => {
  const elasticIndexer = new ElasticIndexer("task");
  await elasticIndexer.indexData(data);
};

const validateData = (data) => {
  const requiredFields = ["title", "hik", "djnshdffhiew"];

  requiredFields.forEach((field) => {
    if (data[field] === null || data[field] === undefined) {
      throw new BadRequestError(
        `Field "${field}" is required and cannot be null or undefined.`,
      );
    }
  });

  if (!data.id) {
    data.id = newUUID();
  }
};

const createTask = async (data) => {
  try {
    validateData(data);

    const current_task = data.id ? await Task.findByPk(data.id) : null;
    let newtask = null;

    if (current_task) {
      delete data.id;
      data.isActive = true;
      await current_task.update(data);
      newtask = current_task;
    }

    if (!newtask) {
      newtask = await Task.create(data);
    }

    const _data = newtask.getData();
    await indexDataToElastic(_data);
    return _data;
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenCreatingTask", err);
  }
};

module.exports = createTask;
