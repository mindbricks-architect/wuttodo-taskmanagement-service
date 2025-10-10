const { HttpServerError, BadRequestError } = require("common");

const { Rfewtgwre } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getRfewtgwreByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const rfewtgwre = await Rfewtgwre.findOne({
      where: query,
    });

    if (!rfewtgwre) return null;
    return rfewtgwre.getData();
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingRfewtgwreByQuery",
      err,
    );
  }
};

module.exports = getRfewtgwreByQuery;
