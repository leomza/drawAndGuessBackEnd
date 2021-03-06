"use strict";
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var sessionController_1 = require("../controllers/sessionController");
router.get('/info/:sessionId', sessionController_1.getSession);
router.get('/infoAll', sessionController_1.getAllSessions);
router.post('/createSession', sessionController_1.newSession);
router.post('/saveImage', sessionController_1.saveImage);
router.post('/saveWord', sessionController_1.saveWord);
router.put('/guessSuccess/:sessionId', sessionController_1.guessSuccess);
router.put('/endSession/:sessionId', sessionController_1.endSession);
module.exports = router;
