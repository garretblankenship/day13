const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost/contact_app", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", (error) => console.log(error));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

app.listen(3000, () => {
    console.log(`The server is running on port 3000`);
})