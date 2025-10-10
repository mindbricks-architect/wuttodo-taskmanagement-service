const { HttpServerError, BadRequestError } = require("common");

const { ElasticIndexer } = require("serviceCommon");

const { Trewytgre } = require("models");
const { hexaLogger, newUUID } = require("common");

const indexDataToElastic = async (data) => {
  const elasticIndexer = new ElasticIndexer("trewytgre");
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

const createTrewytgre = async (data) => {
  try {
    validateData(data);

    const current_trewytgre = data.id
      ? await Trewytgre.findByPk(data.id)
      : null;
    let newtrewytgre = null;

    if (current_trewytgre) {
      delete data.id;
      data.isActive = true;
      await current_trewytgre.update(data);
      newtrewytgre = current_trewytgre;
    }

    if (!newtrewytgre) {
      newtrewytgre = await Trewytgre.create(data);
    }

    const _data = newtrewytgre.getData();
    await indexDataToElastic(_data);
    return _data;
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenCreatingTrewytgre", err);
  }
};

module.exports = createTrewytgre;
