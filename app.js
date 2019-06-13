const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const contacts = [];

app.get("/contacts", (req, res) => {
    res.render("contacts/index", { contacts })
});

app.post("/contacts", (req, res) => {
    const { name, email } = req.body;
    const contact = { name, email };
    contacts.push(contact);

    res.redirect("/contacts");
});

app.get("/contacts/new", (req, res) => {
    res.render("contacts/form");
});

app.listen(3000, () => {
    console.log(`The server is running on port 3000`);
})