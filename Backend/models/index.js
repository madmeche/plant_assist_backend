'use strict';

const User = require("./user");
const Plant = require('./plant');
const Folder = require('./folder');
const Favorite = require('./favorite')
const Recent = require('./recents')

async function init() {
  await User.sync();
  await Plant.sync();
  await Folder.sync()
  await Favorite.sync()
  await Recent.sync()
}

init();

module.exports = {
  User,
  Plant,
  Folder,
  Favorite,
  Recent
};
