const router = require('express').Router();
const ApiController = require('../controllers');
const apiValidation = require('../middlewares/validations/api.validation');
const { validateQuery } = require('../middlewares/validate.middleware');

router.get('/', validateQuery(apiValidation.getData), ApiController.getData);

module.exports = router;