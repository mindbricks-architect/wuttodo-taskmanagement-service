const { HttpServerError } = require("common");

let { Rfewtgwre } = require("models");
const { hexaLogger } = require("common");
const { Op } = require("sequelize");

const getRfewtgwreById = async (rfewtgwreId) => {
  try {
    const rfewtgwre = Array.isArray(rfewtgwreId)
      ? await Rfewtgwre.findAll({
          where: {
            id: { [Op.in]: rfewtgwreId },
            isActive: true,
          },
        })
      : await Rfewtgwre.findOne({
          where: {
            id: rfewtgwreId,
            isActive: true,
          },
        });

    if (!rfewtgwre) {
      return null;
    }
    return Array.isArray(rfewtgwreId)
      ? rfewtgwre.map((item) => item.getData())
      : rfewtgwre.getData();
  } catch (err) {
    console.log(err);
    throw new HttpServerError("errMsg_dbErrorWhenRequestingRfewtgwreById", err);
  }
};

module.exports = getRfewtgwreById;
