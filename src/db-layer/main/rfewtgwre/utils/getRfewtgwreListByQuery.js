const { HttpServerError, BadRequestError } = require("common");

const { Rfewtgwre } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getRfewtgwreListByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const rfewtgwre = await Rfewtgwre.findAll({
      where: { ...query, isActive: true },
    });

    //should i add not found error or only return empty array?
    if (!rfewtgwre || rfewtgwre.length === 0) return [];

    //      if (!rfewtgwre || rfewtgwre.length === 0) {
    //      throw new NotFoundError(
    //      `Rfewtgwre with the specified criteria not found`
    //  );
    //}

    return rfewtgwre.map((item) => item.getData());
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingRfewtgwreListByQuery",
      err,
    );
  }
};

module.exports = getRfewtgwreListByQuery;
