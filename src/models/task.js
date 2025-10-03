const { sequelize } = require("common");
const { DataTypes } = require("sequelize");

//A single todo task with a required title. Represents a minimal to-do item for a personal list.
const Task = sequelize.define(
  "task",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    title: {
      // The main description or name of the todo item. Required and must be non-empty.
      type: DataTypes.STRING,
      allowNull: false,
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

module.exports = Task;
