"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var createSession_1 = require("../middlewares/createSession");
var checkSession_1 = require("../middlewares/checkSession");
var userController_1 = require("../controllers/userController");
router.get('/info/:userId', userController_1.getUserInfo);
router.post('/createUser', createSession_1.createSession, checkSession_1.checkSession, userController_1.setUser);
router.put('/changeRoles', userController_1.changeUserRole);
module.exports = router;