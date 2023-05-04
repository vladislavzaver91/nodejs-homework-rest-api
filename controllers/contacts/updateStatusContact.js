const { Contact } = require('../../models/contact');
const { HttpError } = require('../../helpers');

const updateStatusContact = async (req, res) => {
    const { _id: owner } = req.user;
    const { id } = req.params;
    const { favorite } = req.body;
    const filter = { _id: id, owner};
    const update = { favorite };
    const options = { new: true };
    const result = await Contact.findOneAndUpdate(filter, update, options);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = updateStatusContact;