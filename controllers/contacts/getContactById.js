const { Contact } = require('../../models/contact');
const { HttpError } = require('../../helpers');

const getContactById = async (req, res) => {
    const { _id: owner } = req.user;
    const { id } = req.params;
    const result = await Contact.findOne({ _id: id, owner });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = getContactById;