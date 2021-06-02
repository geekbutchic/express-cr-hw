const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json("WELCOME TO MY APP");
});

module.exports = router;