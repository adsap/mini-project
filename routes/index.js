const router = require('express').Router();
const ApiController = require('../controllers')

router.get('/', ApiController.getData);

module.exports = router;