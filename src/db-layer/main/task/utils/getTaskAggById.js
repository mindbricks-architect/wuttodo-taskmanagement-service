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

const getTaskAggById = async (taskId) => {
  try {
    const forWhereClause = false;
    const includes = [];

    const task = Array.isArray(taskId)
      ? await Task.findAll({
          where: {
            id: { [Op.in]: taskId },
            isActive: true,
          },
          include: includes,
        })
      : await Task.findOne({
          where: {
            id: taskId,
            isActive: true,
          },
          include: includes,
        });

    if (!task) {
      return null;
    }

    const taskData =
      Array.isArray(taskId) && taskId.length > 0
        ? task.map((item) => item.getData())
        : task.getData();
    await Task.getCqrsJoins(taskData);
    return taskData;
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenRequestingTaskAggById", err);
  }
};

module.exports = getTaskAggById;
