
const scrapeData = require("./webScraper")



const db = require("../models")

console.log(Object.keys(db))

module.exports = function (app) {

    app.get("/", function (req, res) {


        db.Article.find({}).then(results => {
            res.render("articles", {
                articles: results
            })


        })





    })

    app.get("/api/articles", function (req, res) {

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


    app.post("/api/save/article", function (req, res) {
        db.Article.findOneAndUpdate({ _id: req.body.id }, { saved: true }).then((savedArticle) => {
            // console.log(savedArticle)
        })

    })


    app.post("/api/addNotes/:id", function (req, res) {
        const articleId = req.params.id

        const text = req.body

        console.log(text)


        db.Note.create(text)
            .then((note) => {
                // console.log(note)
                return db.Article.findOneAndUpdate({ _id: articleId }, {$push: { note: note._id }}, { new: true })
            })
            .then((result) => {
                // console.log(result)
                res.status(200).end()
            })
            .catch(err => {
                console.log(err)
                res.status(400).end()
            })

    })

    app.get("/api/getNotes/:id", function (req, res) {
        const articleId = req.params.id

        console.log(articleId)

            db.Article.findOne({ _id: articleId })
                .populate("note")
                .exec((err, noteData) => {
                    console.log("boogaloo")
                    console.log(noteData.note)
                    res.status(200).json(noteData.note)
                })




    })


    app.delete("/api/delete/:noteId", function(req, res) {
        db.Note.findOne({_id: req.params.noteId}).then(note => {
            note.remove()
            .then(success => console.log(success))
            .catch(err => console.log(err))
        })
    })

    app.get("/api/saved/articles", function (req, res) {

        db.Article.find({ saved: true }).then(results => {

            res.render("savedArticles", {
                articles: results
            })

        })

    })




}