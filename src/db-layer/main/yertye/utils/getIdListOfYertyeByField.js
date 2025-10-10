const { HttpServerError, NotFoundError, BadRequestError } = require("common");

const { Yertye } = require("models");
const { Op } = require("sequelize");

const getIdListOfYertyeByField = async (fieldName, fieldValue, isArray) => {
  try {
    const options = {
      where: isArray
        ? { [fieldName]: { [Op.contains]: [fieldValue] }, isActive: true }
        : { [fieldName]: fieldValue, isActive: true },
      attributes: ["id"],
    };

    let yertyeIdList = await Yertye.findAll(options);

    if (!yertyeIdList) {
      throw new NotFoundError(`Yertye with the specified criteria not found`);
    }

    yertyeIdList = yertyeIdList.map((item) => item.id);
    return yertyeIdList;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingYertyeIdListByField",
      err,
    );
  }
};

module.exports = getIdListOfYertyeByField;
