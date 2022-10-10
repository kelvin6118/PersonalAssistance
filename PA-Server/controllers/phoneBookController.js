const PhoneBook = require("../models/PhoneBook");

async function createRequest(req, res){
    try {
        const contact = await PhoneBook.create({
            userid: req.body.userid,
            name: req.body.name,
            title: req.body.title,
            phone: req.body.phone,
            email: req.body.email
        });
        res.status(201).send(contact)

    } catch (err) {
        res.status(422).json({message: "unable to create"})
    }
}

async function getContacts(req, res){
    try {
        const contacts = await PhoneBook.findByUserId(req.params.id);
        res.status(200).send(contacts)
    } catch (err) {
        res.status(500).json({message: "Couldn't find contacts"})
    }
}

module.exports = {createRequest, getContacts};
