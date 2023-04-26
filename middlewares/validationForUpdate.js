const { HttpError } = require('../helpers');

const validationForUpdate = () => {
    const func = (req, res, next) => {
        const { name, email, phone } = req.body;
        if (!name && !email && !phone) {
            next(HttpError(400, "missing fields"));
        };
        next();
    };
    return func;
};

module.exports = validationForUpdate;