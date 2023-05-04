const { Contact } = require('../../models/contact');
const { HttpError } = require('../../helpers');

const listContacts = async (req, res) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20, favorite = '' } = req.query;
    const skip = (page - 1) * limit;
    if (favorite === 'true') {
        const result = await Contact.find({ owner, favorite: { $eq: true } }, "-createdAt -updatedAt", { skip, limit }).populate("owner", "email subscription");
        res.json(result);
    } if (favorite === 'false') {
        const result = await Contact.find({ owner, favorite: { $eq: false } }, "-createdAt -updatedAt", { skip, limit }).populate("owner", "email subscription");
        res.json(result);
    } else {
        const result = await Contact.find({ owner }, "-createdAt -updatedAt", { skip, limit }).populate("owner", "email subscription");
    if (!result) {
        throw HttpError(404, "Not fount");
    }
    res.json(result);
    };
};

module.exports = listContacts;