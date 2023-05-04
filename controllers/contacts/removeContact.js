const { Contact } = require('../../models/contact');
const { HttpError } = require('../../helpers');

const removeContact = async (req, res) => {
    const { _id: owner } = req.user;
    const { id } = req.params;
    const result = await Contact.findOneAndRemove({ _id: id, owner: owner });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json({
        message: "Contact deleted"
    })
};

module.exports = removeContact;