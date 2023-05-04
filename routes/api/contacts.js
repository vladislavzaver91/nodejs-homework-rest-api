const express = require('express');

const { ctrlContacts: {
    listContacts,
    getContactById,
    addContact,
    updateContact,
    updateStatusContact,
    removeContact,
}, } = require('../../controllers');
const {
    isValidId,
    validateBody,
    validationForUpdate,
    validationForUpdateStatus,
    authenticate,
} = require('../../middlewares');
const { schemas } = require('../../models/contact');

const router = express.Router()

router.get('/', authenticate, listContacts);

router.get('/:id', authenticate, isValidId, getContactById);

router.post('/', authenticate, validateBody(schemas.addSchema), addContact);

router.put('/:id', authenticate, isValidId, validationForUpdate(), updateContact);

router.patch('/:id/favorite', authenticate, isValidId, validationForUpdateStatus(schemas.updateFavoriteSchema), updateStatusContact);

router.delete('/:id', authenticate, isValidId, removeContact);

module.exports = router