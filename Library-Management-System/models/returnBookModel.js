const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const ReturnedBook = sequelize.define('returnedBook', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    bookName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fine: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    returnedAt: {
        type: Sequelize.DATE,
        allowNull: false,
    }
});

module.exports = ReturnedBook;
