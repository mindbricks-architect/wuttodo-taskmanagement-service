const { HttpServerError } = require("common");

const { Task } = require("models");
const { Op } = require("sequelize");

const updateTaskByIdList = async (idList, dataClause) => {
  try {
    let rowsCount = null;
    let rows = null;

    const options = {
      where: { id: { [Op.in]: idList }, isActive: true },
      returning: true,
    };

    [rowsCount, rows] = await Task.update(dataClause, options);
    const taskIdList = rows.map((item) => item.id);
    return taskIdList;
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenUpdatingTaskByIdList", err);
  }
};

module.exports = updateTaskByIdList;
