const { User } = require('../../models/user');
const { HttpError } = require('../../helpers');

const updateSubscription = async (req, res) => {
    const { _id: id } = req.user;
    const updateStatus = await User.findByIdAndUpdate(id, req.body, { new: true });

    if (!updateStatus) {
        throw HttpError(404, 'Not Found');
    }

    res.status(200).json({
        email: updateStatus.email,
        subscription: updateStatus.subscription,
    })
};

module.exports = updateSubscription;