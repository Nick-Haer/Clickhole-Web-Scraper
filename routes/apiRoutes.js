
const scrapeData = require("./webScraper")



const db = require("../models")

console.log(Object.keys(db))

module.exports = function(app) {

    app.get("/", function (req, res) {

        res.render("articles")







    })

    app.get("/api/articles", function(req, res) {

        console.log("electric")
        scrapeData().then((results) => {
            // console.log(results)
            results.forEach(article => {
                


                db.Article.create(article)
                .then((addedArticle) => console.log(addedArticle))
                .catch((err) => console.error(err))
            });






        })
    })




}