var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');
const { authenticateJWT } = require('../middlewares/auth')

/*
 * GET
 */
router.get('/', authenticateJWT, userController.list);

/*
 * GET
 */
router.get('/:id', userController.show);

/*
 * POST
 */
router.post('/', userController.create);

/*
 * PUT
 */
router.put('/', authenticateJWT, userController.update);

/*
 * DELETE
 */
router.delete('/:id', userController.remove);

module.exports = router;
