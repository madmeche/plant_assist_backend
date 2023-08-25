const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
// const Schema = dbConnect.connectMysql.Schema;

const sequelizeInstance = dbConnect.Sequelize;

class Recent extends Model {}

Recent.init(
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
    modelName: "recent",
    timestamps: true,
  }
);

module.exports = Recent;
