const { HttpServerError, NotFoundError, BadRequestError } = require("common");

const { Trewytgre } = require("models");
const { Op } = require("sequelize");

const getIdListOfTrewytgreByField = async (fieldName, fieldValue, isArray) => {
  try {
    const options = {
      where: isArray
        ? { [fieldName]: { [Op.contains]: [fieldValue] }, isActive: true }
        : { [fieldName]: fieldValue, isActive: true },
      attributes: ["id"],
    };

    let trewytgreIdList = await Trewytgre.findAll(options);

    if (!trewytgreIdList) {
      throw new NotFoundError(
        `Trewytgre with the specified criteria not found`,
      );
    }

    trewytgreIdList = trewytgreIdList.map((item) => item.id);
    return trewytgreIdList;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingTrewytgreIdListByField",
      err,
    );
  }
};

module.exports = getIdListOfTrewytgreByField;
