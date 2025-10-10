const { HttpServerError } = require("common");

const { Trewytgre } = require("models");
const { Op } = require("sequelize");

const updateTrewytgreByIdList = async (idList, dataClause) => {
  try {
    let rowsCount = null;
    let rows = null;

    const options = {
      where: { id: { [Op.in]: idList }, isActive: true },
      returning: true,
    };

    [rowsCount, rows] = await Trewytgre.update(dataClause, options);
    const trewytgreIdList = rows.map((item) => item.id);
    return trewytgreIdList;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenUpdatingTrewytgreByIdList",
      err,
    );
  }
};

module.exports = updateTrewytgreByIdList;
