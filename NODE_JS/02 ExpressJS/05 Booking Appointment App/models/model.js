const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Appointment = sequelize.define('appointment',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
      },
      username: {
        type: Sequelize.STRING,
        allowNull : false
      },
      email: {
        type: Sequelize.STRING,
        allowNull : false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull : false
      }
})

module.exports=Appointment;