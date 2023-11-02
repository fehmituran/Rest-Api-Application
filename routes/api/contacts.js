const express = require('express');
const ctrlContact = require('../../controller/ctrlContact');

const router = express.Router();

router.get('/', ctrlContact.get)

router.get('/:id', ctrlContact.getById)

router.post('/', ctrlContact.create)

router.put('/:id', ctrlContact.update)

router.patch('/:id/favorite', ctrlContact.updateStatusContact)

router.delete('/:id', ctrlContact.remove)

module.exports = router
