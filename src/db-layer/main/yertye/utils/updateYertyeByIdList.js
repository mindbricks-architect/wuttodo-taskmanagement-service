const { HttpServerError } = require("common");

const { Yertye } = require("models");
const { Op } = require("sequelize");

const updateYertyeByIdList = async (idList, dataClause) => {
  try {
    let rowsCount = null;
    let rows = null;

    const options = {
      where: { id: { [Op.in]: idList }, isActive: true },
      returning: true,
    };

    [rowsCount, rows] = await Yertye.update(dataClause, options);
    const yertyeIdList = rows.map((item) => item.id);
    return yertyeIdList;
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenUpdatingYertyeByIdList", err);
  }
};

module.exports = updateYertyeByIdList;
