const { HttpServerError, BadRequestError } = require("common");

const { Trewytgre } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getTrewytgreByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const trewytgre = await Trewytgre.findOne({
      where: query,
    });

    if (!trewytgre) return null;
    return trewytgre.getData();
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingTrewytgreByQuery",
      err,
    );
  }
};

module.exports = getTrewytgreByQuery;
