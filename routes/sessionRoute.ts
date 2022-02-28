export { }

const express = require('express');
const router = express.Router();

import { getSession, getAllSessions, newSession, saveImage, saveWord, guessSuccess, endSession } from "../controllers/sessionController"

router.get('/info/:sessionId', getSession);
router.get('/infoAll', getAllSessions);
router.post('/createSession', newSession);
router.post('/saveImage', saveImage);
router.post('/saveWord', saveWord);
router.put('/guessSuccess/:sessionId', guessSuccess);
router.put('/endSession/:sessionId', endSession);

module.exports = router;
