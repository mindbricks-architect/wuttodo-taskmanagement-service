const { HttpServerError, BadRequestError } = require("common");

const { Yertye } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getYertyeListByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const yertye = await Yertye.findAll({
      where: { ...query, isActive: true },
    });

    //should i add not found error or only return empty array?
    if (!yertye || yertye.length === 0) return [];

    //      if (!yertye || yertye.length === 0) {
    //      throw new NotFoundError(
    //      `Yertye with the specified criteria not found`
    //  );
    //}

    return yertye.map((item) => item.getData());
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingYertyeListByQuery",
      err,
    );
  }
};

module.exports = getYertyeListByQuery;
