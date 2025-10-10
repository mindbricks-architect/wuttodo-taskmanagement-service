const { HttpServerError, BadRequestError } = require("common");

const { Yertye } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getYertyeByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const yertye = await Yertye.findOne({
      where: query,
    });

    if (!yertye) return null;
    return yertye.getData();
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenRequestingYertyeByQuery", err);
  }
};

module.exports = getYertyeByQuery;
