var express = require('express');
var router = express.Router();
var db = require('../config/mysql');

/* GET users listing. */
router.get('/', (req, res,) => {
   let sql = 'SELECT * FROM words '
    db.query(sql, (err, result) =>{
        res.json(result)
    })
});

module.exports = router;
