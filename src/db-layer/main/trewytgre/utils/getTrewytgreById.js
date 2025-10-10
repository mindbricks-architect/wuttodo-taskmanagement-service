const { HttpServerError } = require("common");

let { Trewytgre } = require("models");
const { hexaLogger } = require("common");
const { Op } = require("sequelize");

const getTrewytgreById = async (trewytgreId) => {
  try {
    const trewytgre = Array.isArray(trewytgreId)
      ? await Trewytgre.findAll({
          where: {
            id: { [Op.in]: trewytgreId },
            isActive: true,
          },
        })
      : await Trewytgre.findOne({
          where: {
            id: trewytgreId,
            isActive: true,
          },
        });

    if (!trewytgre) {
      return null;
    }
    return Array.isArray(trewytgreId)
      ? trewytgre.map((item) => item.getData())
      : trewytgre.getData();
  } catch (err) {
    console.log(err);
    throw new HttpServerError("errMsg_dbErrorWhenRequestingTrewytgreById", err);
  }
};

module.exports = getTrewytgreById;
