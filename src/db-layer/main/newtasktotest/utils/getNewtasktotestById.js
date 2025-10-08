const { HttpServerError } = require("common");

let { Newtasktotest } = require("models");
const { hexaLogger } = require("common");
const { Op } = require("sequelize");

const getNewtasktotestById = async (newtasktotestId) => {
  try {
    const newtasktotest = Array.isArray(newtasktotestId)
      ? await Newtasktotest.findAll({
          where: {
            id: { [Op.in]: newtasktotestId },
            isActive: true,
          },
        })
      : await Newtasktotest.findOne({
          where: {
            id: newtasktotestId,
            isActive: true,
          },
        });

    if (!newtasktotest) {
      return null;
    }
    return Array.isArray(newtasktotestId)
      ? newtasktotest.map((item) => item.getData())
      : newtasktotest.getData();
  } catch (err) {
    console.log(err);
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingNewtasktotestById",
      err,
    );
  }
};

module.exports = getNewtasktotestById;
