const contacts = [];

function index(req, res) {
    res.render("contacts/index", { contacts });
}

function create(req, res) {
    const { name, email } = req.body;
    const contact = { name, email };
    contacts.push(contact);

    res.redirect("/contacts");
}

function newResource(req, res) {
    res.render("contacts/form");
}

module.exports = {
    index,
    create,
    newResource
}