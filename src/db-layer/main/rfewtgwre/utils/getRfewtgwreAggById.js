const { HttpServerError, NotFoundError } = require("common");
const { hexaLogger } = require("common");

const { Task, Newtasktotest, Rfewtgwre, Trewytgre, Gfsga } = require("models");
const { Op } = require("sequelize");

const getRfewtgwreAggById = async (rfewtgwreId) => {
  try {
    const forWhereClause = false;
    const includes = [];

    const rfewtgwre = Array.isArray(rfewtgwreId)
      ? await Rfewtgwre.findAll({
          where: {
            id: { [Op.in]: rfewtgwreId },
            isActive: true,
          },
          include: includes,
        })
      : await Rfewtgwre.findOne({
          where: {
            id: rfewtgwreId,
            isActive: true,
          },
          include: includes,
        });

    if (!rfewtgwre) {
      return null;
    }

    const rfewtgwreData =
      Array.isArray(rfewtgwreId) && rfewtgwreId.length > 0
        ? rfewtgwre.map((item) => item.getData())
        : rfewtgwre.getData();
    await Rfewtgwre.getCqrsJoins(rfewtgwreData);
    return rfewtgwreData;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingRfewtgwreAggById",
      err,
    );
  }
};

module.exports = getRfewtgwreAggById;
