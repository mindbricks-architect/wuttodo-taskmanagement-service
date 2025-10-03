const { HttpServerError } = require("common");

let { Task } = require("models");
const { hexaLogger } = require("common");
const { Op } = require("sequelize");

const getTaskById = async (taskId) => {
  try {
    const task = Array.isArray(taskId)
      ? await Task.findAll({
          where: {
            id: { [Op.in]: taskId },
            isActive: true,
          },
        })
      : await Task.findOne({
          where: {
            id: taskId,
            isActive: true,
          },
        });

    if (!task) {
      return null;
    }
    return Array.isArray(taskId)
      ? task.map((item) => item.getData())
      : task.getData();
  } catch (err) {
    console.log(err);
    throw new HttpServerError("errMsg_dbErrorWhenRequestingTaskById", err);
  }
};

module.exports = getTaskById;
