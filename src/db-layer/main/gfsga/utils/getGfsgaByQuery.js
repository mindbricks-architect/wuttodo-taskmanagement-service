const { HttpServerError, BadRequestError } = require("common");

const { Gfsga } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getGfsgaByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const gfsga = await Gfsga.findOne({
      where: query,
    });

    if (!gfsga) return null;
    return gfsga.getData();
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenRequestingGfsgaByQuery", err);
  }
};

module.exports = getGfsgaByQuery;
