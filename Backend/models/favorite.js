const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
// const Schema = dbConnect.connectMysql.Schema;

const sequelizeInstance = dbConnect.Sequelize;

class Favorite extends Model {}

Favorite.init(
// const newFolder = new Schema(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    plantIds: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "favorite",
    timestamps: true,
  }
);

module.exports = Favorite;
