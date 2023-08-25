const { DataTypes, Model } = require("sequelize");
const bcrypt = require('bcrypt')
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

//Sequelize will create this table if it doesn't exist on startup
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,                                                              
      required: true,
    },
    lastName: {                        
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        unique: true,
  },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    // PLURAL WILL CONTAIN A JSON OBJECT OF PLANTS IDS
    plantIds: {
      type: DataTypes.JSON,
     
    },
    //PLURAL WILL CONTAIN A JOSN OBJECT OF FOLDER IDS
    folderId: {
      type: DataTypes.JSON,
  
    },
    //SINGULAR WILL POINT TO A RECORD BY FAVORITE ID
    favoriteId: {
      type: DataTypes.STRING,

    },

    //SINGULAR WILL POINT TO A RECORD BY RECENT ID
    recentId: {
      type: DataTypes.STRING,
      timestamps: true,
    },
    
},
  {
    sequelize: sequelizeInstance,
    modelName: "users",
    timestamps: true,
    freezeTableName: true,
    defaultScope: {
      attributes: { exclude: ["password"]},
    },
    scopes: {
      withPassword: {
        attributes: {}
      }
    }

    // hooks: {
    //   beforeCreate: async (user) => {
    //     if (user.password) {
    //       const salt = await bcrypt.genSaltSync(10,a)
    //       user.password = bcrypt.hashSync(user.password, salt)
    //     }
    //   },

    //   beforeUpdate: async (user) => {
    //     if (user.password) {
    //       const salt = await bcrypt.genSaltSync(10,a)
    //       user.password = bcrypt.hashSync(user.password, salt)
    //     }
    //   }
    // },

    // instanceMethods: {
    //   validPassword: (password) => {
    //     return bcrypt.compareSync(password, this.password)
    //   }
    // }
  },
);

// User.prototype.validPassword = async (password, hash) => {
//   return await bcrypt.compareSync(password, hash);
// };

module.exports = User;
