var express = require('express');
var router = express.Router();

var loginController = require('../controllers/login.controller.js');
router.route('/login').post(loginController.loginAsUser);

var roomsController = require('../controllers/rooms.controller.js');
router.route('/rooms').get(roomsController.getAllRooms);

module.exports = router;
