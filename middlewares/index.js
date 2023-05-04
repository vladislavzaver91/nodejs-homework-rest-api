const isValidId = require('./isValidId');
const validateBody = require('./validateBody');
const validationForUpdate = require('./validationForUpdate');
const validationForUpdateStatus = require('./validationForUpdateStatus');
const validationRegistration = require('./validationRegistration');
const authenticate = require('./authenticate');
const upload = require('./upload');

module.exports = {
    isValidId,
    validateBody,
    validationForUpdate,
    validationForUpdateStatus,
    validationRegistration,
    authenticate,
    upload,
};