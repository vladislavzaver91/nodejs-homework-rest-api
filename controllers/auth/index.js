const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const updateSubscription = require('./updateSubscription');
const updateAvatar = require('./updateAvatar');

const { controllerWrapper } = require('../../helpers');

module.exports = {
    register: controllerWrapper(register),
    login: controllerWrapper(login),
    logout: controllerWrapper(logout),
    getCurrent: controllerWrapper(getCurrent),
    updateSubscription: controllerWrapper(updateSubscription),
    updateAvatar: controllerWrapper(updateAvatar),
};