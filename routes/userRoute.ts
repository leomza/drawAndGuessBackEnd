export { }

const express = require('express');
const router = express.Router();

import { createSession } from '../middlewares/createSession';
import { checkSession } from '../middlewares/checkSession';

import { getUserInfo, setUser, changeUserRole } from '../controllers/userController'

router.get('/info/:userId', getUserInfo);
router.post('/createUser', createSession, checkSession, setUser);
router.put('/changeRoles', changeUserRole);

module.exports = router;
