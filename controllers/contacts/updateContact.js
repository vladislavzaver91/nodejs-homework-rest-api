const { Contact } = require('../../models/contact');
const { HttpError } = require('../../helpers');

const updateContact = async (req, res) => {
    const { _id: owner } = req.user;
    const { id } = req.params;
    const filter = { _id: id };
    const update = { ...req.body, owner };
    const options = { new: true };
    const result = await Contact.findOneAndUpdate(filter, update, options);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = updateContact;