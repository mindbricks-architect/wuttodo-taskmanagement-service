const { HttpServerError } = require("common");

let { Yertye } = require("models");
const { hexaLogger } = require("common");
const { Op } = require("sequelize");

const getYertyeById = async (yertyeId) => {
  try {
    const yertye = Array.isArray(yertyeId)
      ? await Yertye.findAll({
          where: {
            id: { [Op.in]: yertyeId },
            isActive: true,
          },
        })
      : await Yertye.findOne({
          where: {
            id: yertyeId,
            isActive: true,
          },
        });

    if (!yertye) {
      return null;
    }
    return Array.isArray(yertyeId)
      ? yertye.map((item) => item.getData())
      : yertye.getData();
  } catch (err) {
    console.log(err);
    throw new HttpServerError("errMsg_dbErrorWhenRequestingYertyeById", err);
  }
};

module.exports = getYertyeById;
