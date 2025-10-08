const { HttpServerError, NotFoundError } = require("common");
const { hexaLogger } = require("common");

const { Task, Newtasktotest } = require("models");
const { Op } = require("sequelize");

const getNewtasktotestAggById = async (newtasktotestId) => {
  try {
    const forWhereClause = false;
    const includes = [];

    const newtasktotest = Array.isArray(newtasktotestId)
      ? await Newtasktotest.findAll({
          where: {
            id: { [Op.in]: newtasktotestId },
            isActive: true,
          },
          include: includes,
        })
      : await Newtasktotest.findOne({
          where: {
            id: newtasktotestId,
            isActive: true,
          },
          include: includes,
        });

    if (!newtasktotest) {
      return null;
    }

    const newtasktotestData =
      Array.isArray(newtasktotestId) && newtasktotestId.length > 0
        ? newtasktotest.map((item) => item.getData())
        : newtasktotest.getData();
    await Newtasktotest.getCqrsJoins(newtasktotestData);
    return newtasktotestData;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingNewtasktotestAggById",
      err,
    );
  }
};

module.exports = getNewtasktotestAggById;
