const express = require('express');

const controller = require('../../controllers/auth');
const { validateBody, validationRegistration, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/user');

const router = express.Router();


// signup
router.post("/register", validationRegistration(schemas.registerSchema), controller.register);
// signin
router.post("/login", validationRegistration(schemas.loginSchema), controller.login);

router.post("/logout", authenticate, controller.logout);

router.get("/current", authenticate, controller.getCurrent);

router.patch('/', authenticate, validateBody(schemas.updateSubscriptionSchema), controller.updateSubscription);

module.exports = router;