var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");
/*
 * GET home page.
 */
router.get('/', ctrlMain.homePage);
router.post('/sort', ctrlMain.sort);
router.post('/search', ctrlMain.search);
module.exports = router;