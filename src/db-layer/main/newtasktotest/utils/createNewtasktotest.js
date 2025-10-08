const { HttpServerError, BadRequestError } = require("common");

const { ElasticIndexer } = require("serviceCommon");

const { Newtasktotest } = require("models");
const { hexaLogger, newUUID } = require("common");

const indexDataToElastic = async (data) => {
  const elasticIndexer = new ElasticIndexer("newtasktotest");
  await elasticIndexer.indexData(data);
};

const validateData = (data) => {
  const requiredFields = ["somenewprop"];

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

const createNewtasktotest = async (data) => {
  try {
    validateData(data);

    const current_newtasktotest = data.id
      ? await Newtasktotest.findByPk(data.id)
      : null;
    let newnewtasktotest = null;

    if (current_newtasktotest) {
      delete data.id;
      data.isActive = true;
      await current_newtasktotest.update(data);
      newnewtasktotest = current_newtasktotest;
    }

    if (!newnewtasktotest) {
      newnewtasktotest = await Newtasktotest.create(data);
    }

    const _data = newnewtasktotest.getData();
    await indexDataToElastic(_data);
    return _data;
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenCreatingNewtasktotest", err);
  }
};

module.exports = createNewtasktotest;
