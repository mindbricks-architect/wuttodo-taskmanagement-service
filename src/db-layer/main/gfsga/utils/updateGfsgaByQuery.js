const { HttpServerError, BadRequestError } = require("common");

const { Gfsga } = require("models");
const { Op } = require("sequelize");

const updateGfsgaByQuery = async (dataClause, query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }
    let rowsCount = null;
    let rows = null;

    const options = { where: { query, isActive: true }, returning: true };

    [rowsCount, rows] = await Gfsga.update(dataClause, options);

    if (!rowsCount) return [];
    return rows.map((item) => item.getData());
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenUpdatingGfsgaByQuery", err);
  }
};

module.exports = updateGfsgaByQuery;
