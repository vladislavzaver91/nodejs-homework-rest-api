const { Contact } = require('../models/contact');
const { HttpError, controllerWrapper } = require('../helpers');

const listContacts = async (req, res) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20, favorite = '' } = req.query;
    const skip = (page - 1) * limit;

    if (favorite === '') {
        const contacts = await Contact.find({ owner }, '-createdAt -updatedAt', { skip, limit }).populate('owner', 'email subscription');
        const data = await Contact.find({ owner });
        res.json({
            total: data.length,
            data: contacts,
        });
    } else {
        const contacts = await Contact.find({ owner, favorite }, '-createdAt -updatedAt', { skip, limit }).populate('owner', 'email subscription');
        const data = await Contact.find({ owner, favorite });
        res.json({
            total: data.length,
            data: contacts,
        });
    };
};

const getContactById = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findById(id);
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
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

const updateStatusContact = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

const removeContact = async (req, res) => {
    const { id } = req.params;
    const result = await Contact.findByIdAndRemove(id);
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