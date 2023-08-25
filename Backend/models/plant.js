const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class Plant extends Model {}

//Sequelize will create this table if it doesn't exist on startup
Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    sunExposure: {
      type: DataTypes.JSON,
      allowNull: false,
      required: true,
    },
    season: {
      type: DataTypes.JSON,
      allowNull: false,
      required: true,
    },
    moistureLevel: {
      type: DataTypes.STRING,
      allowNull: true,
      required: true,
    },
    zone: {
      type: DataTypes.JSON,
      allowNull: false,
      required: true,
    },
    indoor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      required: false,
    },
    outoor: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      required: false,
    },
    toxic: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      required: false,
    },
    width: {
      type: DataTypes.FLOAT,
      allowNull: true,
      required: true,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true,
      required: false,
    },
    flowering: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      required: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "plant",
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Plant;
