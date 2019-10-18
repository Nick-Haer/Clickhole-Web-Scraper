
const scrapeData = require("./webScraper")



const db = require("../models")

console.log(Object.keys(db))

module.exports = function(app) {

    app.get("/", function (req, res) {


        db.Article.find({}).then(results => {
            res.render("articles", {
                articles: results
            })


        })





    })

    app.get("/api/articles", function(req, res) {

        console.log("electric")
        scrapeData().then((results) => {
            // console.log(results)
            results.forEach(article => {
                


                // db.Article.create(article)
                // .then((addedArticle) => console.log(addedArticle))
                // .catch((err) => console.error(err))
            });






        })
    })


    app.post("/api/add/note", function(req, res) {
    console.log(req.body.id)
    // db.Note.create


    })

    app.get("/api/saved/articles", function(req, res) {

        db.Article.find({saved: true}).then(results => {

            res.render("articles", {
                articles: results
            })
            
        })

    })




}