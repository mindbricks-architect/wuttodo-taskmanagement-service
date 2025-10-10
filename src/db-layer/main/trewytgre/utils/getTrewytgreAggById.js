const { HttpServerError, NotFoundError } = require("common");
const { hexaLogger } = require("common");

const {
  Task,
  Newtasktotest,
  Rfewtgwre,
  Trewytgre,
  Gfsga,
  Yertye,
} = require("models");
const { Op } = require("sequelize");

const getTrewytgreAggById = async (trewytgreId) => {
  try {
    const forWhereClause = false;
    const includes = [];

    const trewytgre = Array.isArray(trewytgreId)
      ? await Trewytgre.findAll({
          where: {
            id: { [Op.in]: trewytgreId },
            isActive: true,
          },
          include: includes,
        })
      : await Trewytgre.findOne({
          where: {
            id: trewytgreId,
            isActive: true,
          },
          include: includes,
        });

    if (!trewytgre) {
      return null;
    }

    const trewytgreData =
      Array.isArray(trewytgreId) && trewytgreId.length > 0
        ? trewytgre.map((item) => item.getData())
        : trewytgre.getData();
    await Trewytgre.getCqrsJoins(trewytgreData);
    return trewytgreData;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingTrewytgreAggById",
      err,
    );
  }
};

module.exports = getTrewytgreAggById;
