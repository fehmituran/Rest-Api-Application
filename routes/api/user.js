const express = require('express');
const ctrlUser = require('../../controller/ctrlUser');
const userAuth = require("../../middleware/authUser")
const upload = require("../../middleware/uploadFile")


const router = express.Router();


router.post('/signup', ctrlUser.registration);
router.post('/login', ctrlUser.login);
router.post('/logout', userAuth.auth, ctrlUser.logout);
router.get('/current', userAuth.auth, ctrlUser.current);
router.patch('/', userAuth.auth, ctrlUser.updateSubscription)
router.patch("/avatars", userAuth.auth,  upload.single("avatar"), ctrlUser.updateAvatar)



module.exports = router