const express = require("express")

const app = express();

const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000; 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));





