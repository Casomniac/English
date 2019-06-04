var express = require('express');
var router = express.Router();
const Sequalize = require('sequelize');
var Word = require('../models/Word');


router.get('/game1', (req, res) => {
  Word.findAll({
    order: [
      [Sequalize.fn('RAND')]
    ],
    limit: 8,
  }).then(encounter => {
    let words = [];
    encounter.forEach(item => {
      words.push(item.dataValues);
    })
    res.json(words);
  })

})

module.exports = router;