const { HttpServerError, BadRequestError } = require("common");

const { Trewytgre } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getTrewytgreListByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const trewytgre = await Trewytgre.findAll({
      where: { ...query, isActive: true },
    });

    //should i add not found error or only return empty array?
    if (!trewytgre || trewytgre.length === 0) return [];

    //      if (!trewytgre || trewytgre.length === 0) {
    //      throw new NotFoundError(
    //      `Trewytgre with the specified criteria not found`
    //  );
    //}

    return trewytgre.map((item) => item.getData());
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingTrewytgreListByQuery",
      err,
    );
  }
};

module.exports = getTrewytgreListByQuery;
