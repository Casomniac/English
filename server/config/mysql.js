const Sequalize = require('sequelize')
const db = new Sequalize('sql_store', 'root', '1q2a3z',{
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 1,
        acquire: 300000,
        idle: 30000
    }
})
module.exports = db