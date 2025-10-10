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

const getYertyeAggById = async (yertyeId) => {
  try {
    const forWhereClause = false;
    const includes = [];

    const yertye = Array.isArray(yertyeId)
      ? await Yertye.findAll({
          where: {
            id: { [Op.in]: yertyeId },
            isActive: true,
          },
          include: includes,
        })
      : await Yertye.findOne({
          where: {
            id: yertyeId,
            isActive: true,
          },
          include: includes,
        });

    if (!yertye) {
      return null;
    }

    const yertyeData =
      Array.isArray(yertyeId) && yertyeId.length > 0
        ? yertye.map((item) => item.getData())
        : yertye.getData();
    await Yertye.getCqrsJoins(yertyeData);
    return yertyeData;
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenRequestingYertyeAggById", err);
  }
};

module.exports = getYertyeAggById;
