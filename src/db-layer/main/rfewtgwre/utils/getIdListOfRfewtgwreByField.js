const { HttpServerError, NotFoundError, BadRequestError } = require("common");

const { Rfewtgwre } = require("models");
const { Op } = require("sequelize");

const getIdListOfRfewtgwreByField = async (fieldName, fieldValue, isArray) => {
  try {
    const options = {
      where: isArray
        ? { [fieldName]: { [Op.contains]: [fieldValue] }, isActive: true }
        : { [fieldName]: fieldValue, isActive: true },
      attributes: ["id"],
    };

    let rfewtgwreIdList = await Rfewtgwre.findAll(options);

    if (!rfewtgwreIdList) {
      throw new NotFoundError(
        `Rfewtgwre with the specified criteria not found`,
      );
    }

    rfewtgwreIdList = rfewtgwreIdList.map((item) => item.id);
    return rfewtgwreIdList;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingRfewtgwreIdListByField",
      err,
    );
  }
};

module.exports = getIdListOfRfewtgwreByField;
