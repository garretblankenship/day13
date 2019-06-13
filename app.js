const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const contacts = [];

app.listen(3000, () => {
    console.log(`The server is running on port 3000`);
})