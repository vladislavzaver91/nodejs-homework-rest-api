const express = require('express');

const { ctrlUsers: {
    register,
    login,
    logout,
    getCurrent,
    updateSubscription,
    updateAvatar,
}, } = require('../../controllers');
const { validateBody, validationRegistration, authenticate, upload } = require('../../middlewares');
const { schemas } = require('../../models/user');

const router = express.Router();


// signup
router.post("/register", validationRegistration(schemas.registerSchema), register);
// signin
router.post("/login", validationRegistration(schemas.loginSchema), login);

router.post("/logout", authenticate, logout);

router.get("/current", authenticate, getCurrent);

router.patch('/', authenticate, validateBody(schemas.updateSubscriptionSchema), updateSubscription);

router.patch('/avatars', authenticate, upload.single('avatar'), updateAvatar);

module.exports = router;