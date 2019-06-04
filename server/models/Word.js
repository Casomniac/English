const Sequalize = require('sequelize');
const db = require('../config/mysql');

const Word = db.define('word',{
    word_id:{
      type: Sequalize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    word: {
      type: Sequalize.STRING
    },
    word_translation:{
      type: Sequalize.STRING
    }
},{
  timestamps: false
});

module.exports = Word;