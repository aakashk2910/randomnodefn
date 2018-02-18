var express = require('express');
var router = express.Router();
var random = require("node-random");

/* GET home page. */
router.get('/', function(req, res, next) {
    var r = "";
    random.numbers({
        "number": 1,
        "minimum": 1,
        "maximum": 10000
    }, function(error, data) {
        if (error) throw error;
          res.render('index', { title: data.toString() });
          console.log(data);
    });
});



module.exports = router;
