const { HttpServerError, BadRequestError } = require("common");

const { ElasticIndexer } = require("serviceCommon");

const { Yertye } = require("models");
const { hexaLogger, newUUID } = require("common");

const indexDataToElastic = async (data) => {
  const elasticIndexer = new ElasticIndexer("yertye");
  await elasticIndexer.indexData(data);
};

const validateData = (data) => {
  const requiredFields = [];

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

const createYertye = async (data) => {
  try {
    validateData(data);

    const current_yertye = data.id ? await Yertye.findByPk(data.id) : null;
    let newyertye = null;

    if (current_yertye) {
      delete data.id;
      data.isActive = true;
      await current_yertye.update(data);
      newyertye = current_yertye;
    }

    if (!newyertye) {
      newyertye = await Yertye.create(data);
    }

    const _data = newyertye.getData();
    await indexDataToElastic(_data);
    return _data;
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenCreatingYertye", err);
  }
};

module.exports = createYertye;
