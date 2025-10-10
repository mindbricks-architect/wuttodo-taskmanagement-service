const { HttpServerError, BadRequestError } = require("common");

const { Gfsga } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getGfsgaListByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const gfsga = await Gfsga.findAll({
      where: { ...query, isActive: true },
    });

    //should i add not found error or only return empty array?
    if (!gfsga || gfsga.length === 0) return [];

    //      if (!gfsga || gfsga.length === 0) {
    //      throw new NotFoundError(
    //      `Gfsga with the specified criteria not found`
    //  );
    //}

    return gfsga.map((item) => item.getData());
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingGfsgaListByQuery",
      err,
    );
  }
};

module.exports = getGfsgaListByQuery;
