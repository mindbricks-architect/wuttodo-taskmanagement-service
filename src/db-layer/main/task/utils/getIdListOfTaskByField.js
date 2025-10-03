const { HttpServerError, NotFoundError, BadRequestError } = require("common");

const { Task } = require("models");
const { Op } = require("sequelize");

const getIdListOfTaskByField = async (fieldName, fieldValue, isArray) => {
  try {
    const options = {
      where: isArray
        ? { [fieldName]: { [Op.contains]: [fieldValue] }, isActive: true }
        : { [fieldName]: fieldValue, isActive: true },
      attributes: ["id"],
    };

    let taskIdList = await Task.findAll(options);

    if (!taskIdList) {
      throw new NotFoundError(`Task with the specified criteria not found`);
    }

    taskIdList = taskIdList.map((item) => item.id);
    return taskIdList;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingTaskIdListByField",
      err,
    );
  }
};

module.exports = getIdListOfTaskByField;
