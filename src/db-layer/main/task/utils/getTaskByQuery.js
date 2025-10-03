const { HttpServerError, BadRequestError } = require("common");

const { Task } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getTaskByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const task = await Task.findOne({
      where: query,
    });

    if (!task) return null;
    return task.getData();
  } catch (err) {
    throw new HttpServerError("errMsg_dbErrorWhenRequestingTaskByQuery", err);
  }
};

module.exports = getTaskByQuery;
