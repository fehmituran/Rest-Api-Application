const express = require('express');
const ctrlContact = require('../../controller/ctrlContact');
const userAuth = require("../../middleware/authUser")

const router = express.Router();

router.get('/', userAuth.auth, ctrlContact.get)

router.get('/:id', userAuth.auth, ctrlContact.getById)

router.post('/', userAuth.auth, ctrlContact.create)

router.put('/:id', userAuth.auth, ctrlContact.update)

router.patch('/:id/favorite', userAuth.auth, ctrlContact.updateStatusContact)

router.delete('/:id', userAuth.auth, ctrlContact.remove)

module.exports = router
