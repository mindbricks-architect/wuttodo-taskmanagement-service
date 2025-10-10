const { HttpServerError, BadRequestError } = require("common");

const { ElasticIndexer } = require("serviceCommon");

const { Gfsga } = require("models");
const { hexaLogger, newUUID } = require("common");

const indexDataToElastic = async (data) => {
  const elasticIndexer = new ElasticIndexer("gfsga");
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

const createGfsga = async (data) => {
  try {
    validateData(data);

    const current_gfsga = data.id ? await Gfsga.findByPk(data.id) : null;
    let newgfsga = null;

    if (current_gfsga) {
      delete data.id;
      data.isActive = true;
      await current_gfsga.update(data);
      newgfsga = current_gfsga;
    }

    if (!newgfsga) {
      newgfsga = await Gfsga.create(data);
    }

    const _data = newgfsga.getData();
    await indexDataToElastic(_data);
    return _data;
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenCreatingGfsga", err);
  }
};

module.exports = createGfsga;
