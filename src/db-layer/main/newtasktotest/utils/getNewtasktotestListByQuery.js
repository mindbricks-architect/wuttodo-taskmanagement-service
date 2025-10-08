const { HttpServerError, BadRequestError } = require("common");

const { Newtasktotest } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getNewtasktotestListByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const newtasktotest = await Newtasktotest.findAll({
      where: { ...query, isActive: true },
    });

    //should i add not found error or only return empty array?
    if (!newtasktotest || newtasktotest.length === 0) return [];

    //      if (!newtasktotest || newtasktotest.length === 0) {
    //      throw new NotFoundError(
    //      `Newtasktotest with the specified criteria not found`
    //  );
    //}

    return newtasktotest.map((item) => item.getData());
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingNewtasktotestListByQuery",
      err,
    );
  }
};

module.exports = getNewtasktotestListByQuery;
