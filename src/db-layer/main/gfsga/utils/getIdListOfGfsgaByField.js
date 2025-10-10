const { HttpServerError, NotFoundError, BadRequestError } = require("common");

const { Gfsga } = require("models");
const { Op } = require("sequelize");

const getIdListOfGfsgaByField = async (fieldName, fieldValue, isArray) => {
  try {
    const options = {
      where: isArray
        ? { [fieldName]: { [Op.contains]: [fieldValue] }, isActive: true }
        : { [fieldName]: fieldValue, isActive: true },
      attributes: ["id"],
    };

    let gfsgaIdList = await Gfsga.findAll(options);

    if (!gfsgaIdList) {
      throw new NotFoundError(`Gfsga with the specified criteria not found`);
    }

    gfsgaIdList = gfsgaIdList.map((item) => item.id);
    return gfsgaIdList;
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingGfsgaIdListByField",
      err,
    );
  }
};

module.exports = getIdListOfGfsgaByField;
