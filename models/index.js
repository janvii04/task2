const Sequelize = require('sequelize');
const sequelize = require('../dbconnection').sequelize

module.exports={
    userModel : require('./userModel')(Sequelize, sequelize, Sequelize.DataTypes)
};