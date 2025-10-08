const { sequelize } = require("common");
const { DataTypes } = require("sequelize");

//
const Newtasktotest = sequelize.define(
  "newtasktotest",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    somenewprop: {
      //
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "text",
    },
    isActive: {
      // isActive property will be set to false when deleted
      // so that the document will be archived
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: true,
    },
  },
  {
    indexes: [],
  },
);

module.exports = Newtasktotest;
