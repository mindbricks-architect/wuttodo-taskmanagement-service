const { HttpServerError, BadRequestError } = require("common");

const { Task } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getTaskListByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const task = await Task.findAll({
      where: { ...query, isActive: true },
    });

    //should i add not found error or only return empty array?
    if (!task || task.length === 0) return [];

    //      if (!task || task.length === 0) {
    //      throw new NotFoundError(
    //      `Task with the specified criteria not found`
    //  );
    //}

    return task.map((item) => item.getData());
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingTaskListByQuery",
      err,
    );
  }
};

module.exports = getTaskListByQuery;
