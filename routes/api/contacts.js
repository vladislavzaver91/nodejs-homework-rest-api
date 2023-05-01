const express = require('express');
const controller = require('../../controllers/contacts');
const { schemas } = require('../../models/contact');
const { isValidId, validateBody, validationForUpdate, validationForUpdateStatus, authenticate } = require('../../middlewares');

const router = express.Router()

router.get('/', authenticate, controller.listContacts);

router.get('/:id', authenticate, isValidId, controller.getContactById);

router.post('/', authenticate, validateBody(schemas.addSchema), controller.addContact);

router.put('/:id', authenticate, isValidId, validationForUpdate(), controller.updateContact);

router.patch('/:id/favorite', authenticate, isValidId, validationForUpdateStatus(schemas.updateFavoriteSchema), controller.updateStatusContact);

router.delete('/:id', authenticate, isValidId, controller.removeContact);

module.exports = router