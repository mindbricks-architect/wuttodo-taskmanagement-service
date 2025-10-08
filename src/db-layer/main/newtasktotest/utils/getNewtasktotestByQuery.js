const { HttpServerError, BadRequestError } = require("common");

const { Newtasktotest } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getNewtasktotestByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const newtasktotest = await Newtasktotest.findOne({
      where: query,
    });

    if (!newtasktotest) return null;
    return newtasktotest.getData();
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingNewtasktotestByQuery",
      err,
    );
  }
};

module.exports = getNewtasktotestByQuery;
