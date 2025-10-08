const { HttpServerError } = require("common");

const { Newtasktotest } = require("models");
const { Op } = require("sequelize");

const updateNewtasktotestByIdList = async (idList, dataClause) => {
  try {
    let rowsCount = null;
    let rows = null;

    const options = {
      where: { id: { [Op.in]: idList }, isActive: true },
      returning: true,
    };

    [rowsCount, rows] = await Newtasktotest.update(dataClause, options);
    const newtasktotestIdList = rows.map((item) => item.id);
    return newtasktotestIdList;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenUpdatingNewtasktotestByIdList",
      err,
    );
  }
};

module.exports = updateNewtasktotestByIdList;
