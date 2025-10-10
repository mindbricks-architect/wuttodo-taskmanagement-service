const { HttpServerError } = require("common");

let { Gfsga } = require("models");
const { hexaLogger } = require("common");
const { Op } = require("sequelize");

const getGfsgaById = async (gfsgaId) => {
  try {
    const gfsga = Array.isArray(gfsgaId)
      ? await Gfsga.findAll({
          where: {
            id: { [Op.in]: gfsgaId },
            isActive: true,
          },
        })
      : await Gfsga.findOne({
          where: {
            id: gfsgaId,
            isActive: true,
          },
        });

    if (!gfsga) {
      return null;
    }
    return Array.isArray(gfsgaId)
      ? gfsga.map((item) => item.getData())
      : gfsga.getData();
  } catch (err) {
    console.log(err);
    throw new HttpServerError("errMsg_dbErrorWhenRequestingGfsgaById", err);
  }
};

module.exports = getGfsgaById;
