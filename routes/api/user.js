const express = require('express');
const ctrlUser = require('../../controller/ctrlUser');
const userAuth = require("../../middleware/authUser")


const router = express.Router();


router.post('/signup', ctrlUser.registration);
router.post('/login', ctrlUser.login);
router.post('/logout', userAuth.auth, ctrlUser.logout);
router.get('/current', userAuth.auth, ctrlUser.current);






module.exports = router