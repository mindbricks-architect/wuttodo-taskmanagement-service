const { HttpServerError } = require("common");

const { Rfewtgwre } = require("models");
const { Op } = require("sequelize");

const updateRfewtgwreByIdList = async (idList, dataClause) => {
  try {
    let rowsCount = null;
    let rows = null;

    const options = {
      where: { id: { [Op.in]: idList }, isActive: true },
      returning: true,
    };

    [rowsCount, rows] = await Rfewtgwre.update(dataClause, options);
    const rfewtgwreIdList = rows.map((item) => item.id);
    return rfewtgwreIdList;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenUpdatingRfewtgwreByIdList",
      err,
    );
  }
};

module.exports = updateRfewtgwreByIdList;
