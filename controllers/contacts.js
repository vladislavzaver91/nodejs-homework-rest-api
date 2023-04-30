const { Contact } = require('../models/contact');
const { HttpError, controllerWrapper } = require('../helpers');

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

const getContactById = async (req, res) => {
    const { _id: owner } = req.user;
    const { id } = req.params;
    const result = await Contact.findOne({ id, owner });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

const addContact = async (req, res) => {
    const { _id: owner } = req.user;
    const result = await Contact.create({...req.body, owner});
    res.status(201).json(result);
};

const updateContact = async (req, res) => {
    const { _id: owner } = req.user;
    const { id } = req.params;
    const result = await Contact.findOneAndUpdate(id, {...req.body, owner}, { new: true });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

const updateStatusContact = async (req, res) => {
    const { _id: owner } = req.user;
    const { id } = req.params;
    const result = await Contact.findOneAndUpdate(id, {...req.body, owner}, { new: true });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

const removeContact = async (req, res) => {
    const { _id: owner } = req.user;
    const { id } = req.params;
    const result = await Contact.findOneAndRemove(id, owner);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json({
        message: "Contact deleted"
    })
};

module.exports = {
    listContacts: controllerWrapper(listContacts),
    getContactById: controllerWrapper(getContactById),
    addContact: controllerWrapper(addContact),
    updateContact: controllerWrapper(updateContact),
    updateStatusContact: controllerWrapper(updateStatusContact),
    removeContact: controllerWrapper(removeContact),
}