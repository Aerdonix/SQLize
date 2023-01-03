const {DataTypes} = require('sequelize');
const {openSequelizeConnection} = require('../db/connection');

const Movie = openSequelizeConnection.define("Movie",{
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not Specified",
    },
    director: {
        type: DataTypes.STRING,
        defaultValue: "Not Specified"
    },
    ratings: {
        type: DataTypes.INTEGER
    }
});

module.exports = Movie;