const isValidId = require('./isValidId');
const validateBody = require('./validateBody');
const validationForUpdate = require('./validationForUpdate');
const validationForUpdateStatus = require('./validationForUpdateStatus');
const validationRegistration = require('./validationRegistration');
const authenticate = require('./authenticate');

module.exports = {
    isValidId,
    validateBody,
    validationForUpdate,
    validationForUpdateStatus,
    validationRegistration,
    authenticate,
};