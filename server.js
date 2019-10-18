const express = require("express")

const app = express();

const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3000; 

const db = require("./models")

app.use()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));





mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });


app.listen(PORT, () => console.log(`Running on port ${PORT}`))



