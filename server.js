const express = require("express")

const bodyParser = require("body-parser")

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
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const MONGODB_URI = "mongodb://heroku_1p3q75q2:toef9sj05j7o2a7gfee7pilk0g@ds337418.mlab.com:37418/heroku_1p3q75q2";

console.log(MONGODB_URI);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });



apiRoutes(app)

htmlRoutes(app)


app.listen(PORT, () => console.log(`Running on port ${PORT}`))
