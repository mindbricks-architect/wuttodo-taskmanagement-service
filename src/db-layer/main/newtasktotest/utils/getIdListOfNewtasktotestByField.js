const { HttpServerError, NotFoundError, BadRequestError } = require("common");

const { Newtasktotest } = require("models");
const { Op } = require("sequelize");

const getIdListOfNewtasktotestByField = async (
  fieldName,
  fieldValue,
  isArray,
) => {
  try {
    const options = {
      where: isArray
        ? { [fieldName]: { [Op.contains]: [fieldValue] }, isActive: true }
        : { [fieldName]: fieldValue, isActive: true },
      attributes: ["id"],
    };

    let newtasktotestIdList = await Newtasktotest.findAll(options);

    if (!newtasktotestIdList) {
      throw new NotFoundError(
        `Newtasktotest with the specified criteria not found`,
      );
    }

    newtasktotestIdList = newtasktotestIdList.map((item) => item.id);
    return newtasktotestIdList;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingNewtasktotestIdListByField",
      err,
    );
  }
};

module.exports = getIdListOfNewtasktotestByField;
