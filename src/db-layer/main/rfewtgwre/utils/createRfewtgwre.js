const { HttpServerError, BadRequestError } = require("common");

const { ElasticIndexer } = require("serviceCommon");

const { Rfewtgwre } = require("models");
const { hexaLogger, newUUID } = require("common");

const indexDataToElastic = async (data) => {
  const elasticIndexer = new ElasticIndexer("rfewtgwre");
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

const createRfewtgwre = async (data) => {
  try {
    validateData(data);

    const current_rfewtgwre = data.id
      ? await Rfewtgwre.findByPk(data.id)
      : null;
    let newrfewtgwre = null;

    if (current_rfewtgwre) {
      delete data.id;
      data.isActive = true;
      await current_rfewtgwre.update(data);
      newrfewtgwre = current_rfewtgwre;
    }

    if (!newrfewtgwre) {
      newrfewtgwre = await Rfewtgwre.create(data);
    }

    const _data = newrfewtgwre.getData();
    await indexDataToElastic(_data);
    return _data;
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenCreatingRfewtgwre", err);
  }
};

module.exports = createRfewtgwre;
