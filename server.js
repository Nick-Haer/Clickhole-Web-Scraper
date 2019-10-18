const express = require("express")

const app = express();

const exphbs = require('express-handlebars');

const mongoose = require("mongoose")

const PORT = process.env.PORT || 3000;

const db = require("./models")

const apiRoutes = require("./routes/apiRoutes")

const htmlRoutes = require("./routes/apiRoutes")


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");





mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });



apiRoutes(app)

htmlRoutes(app)


app.listen(PORT, () => console.log(`Running on port ${PORT}`))
