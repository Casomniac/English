const Sequelize = require('sequelize')
const db = require('../config/mysql')

const User = db.define('user', {
    user_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_vk_id:{
        type: Sequelize.INTEGER
    },
    first_name:{
        type: Sequelize.STRING
    },
    last_name:{
        type: Sequelize.STRING
    },
    avatar:{
        type: Sequelize.STRING
    },
    english_level:{
        type: Sequelize.STRING
    },
},{
    timestamps: false
})

module.exports = User