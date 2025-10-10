const { HttpServerError } = require("common");

const { Gfsga } = require("models");
const { Op } = require("sequelize");

const updateGfsgaByIdList = async (idList, dataClause) => {
  try {
    let rowsCount = null;
    let rows = null;

    const options = {
      where: { id: { [Op.in]: idList }, isActive: true },
      returning: true,
    };

    [rowsCount, rows] = await Gfsga.update(dataClause, options);
    const gfsgaIdList = rows.map((item) => item.id);
    return gfsgaIdList;
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenUpdatingGfsgaByIdList", err);
  }
};

module.exports = updateGfsgaByIdList;
