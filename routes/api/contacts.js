const express = require('express');
const controller = require('../../controllers/contacts');
const { schemas } = require('../../models/contact');
const { isValidId, validateBody, validationForUpdate, validationForUpdateStatus } = require('../../middlewares');

const router = express.Router()

router.get('/', controller.listContacts);

router.get('/:id', isValidId, controller.getContactById);

router.post('/', validateBody(schemas.addSchema), controller.addContact);

router.put('/:id', isValidId, validationForUpdate(), controller.updateContact);

router.patch('/:id/favorite', isValidId, validationForUpdateStatus(schemas.updateFavoriteSchema), controller.updateStatusContact);

router.delete('/:id', isValidId, controller.removeContact);

module.exports = router