const listContacts = require('./listContacts');
const getContactById = require('./getContactById');
const addContact = require('./addContact');
const updateContact = require('./updateContact');
const updateStatusContact = require('./updateStatusContact');
const removeContact = require('./removeContact');

const { controllerWrapper } = require('../../helpers');

module.exports = {
    listContacts: controllerWrapper(listContacts),
    getContactById: controllerWrapper(getContactById),
    addContact: controllerWrapper(addContact),
    updateContact: controllerWrapper(updateContact),
    updateStatusContact: controllerWrapper(updateStatusContact),
    removeContact: controllerWrapper(removeContact),
};