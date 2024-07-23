const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Book = sequelize.define('book', {
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
        defaultValue: 0,
        allowNull: false,
    },
    returnDate: {
        type: Sequelize.DATE,
        allowNull: false,
    }
});

module.exports = Book;
