const { HttpServerError, NotFoundError } = require("common");
const { hexaLogger } = require("common");

const { Task, Newtasktotest, Rfewtgwre, Trewytgre, Gfsga } = require("models");
const { Op } = require("sequelize");

const getGfsgaAggById = async (gfsgaId) => {
  try {
    const forWhereClause = false;
    const includes = [];

    const gfsga = Array.isArray(gfsgaId)
      ? await Gfsga.findAll({
          where: {
            id: { [Op.in]: gfsgaId },
            isActive: true,
          },
          include: includes,
        })
      : await Gfsga.findOne({
          where: {
            id: gfsgaId,
            isActive: true,
          },
          include: includes,
        });

    if (!gfsga) {
      return null;
    }

    const gfsgaData =
      Array.isArray(gfsgaId) && gfsgaId.length > 0
        ? gfsga.map((item) => item.getData())
        : gfsga.getData();
    await Gfsga.getCqrsJoins(gfsgaData);
    return gfsgaData;
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenRequestingGfsgaAggById", err);
  }
};

module.exports = getGfsgaAggById;
