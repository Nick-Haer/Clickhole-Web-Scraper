const axios = require("axios");
const cheerio = require("cheerio")



async function scrapeData() {

    const articleInfo = []
    const articleUrls = []
    const pendingArticlesArray = [];
    await axios.get("https://www.clickhole.com")
        .then((response) => {
            const $ = cheerio.load(response.data)
            $("article.js_post_item").each((i, element) => {
                const url = $(element)
                .children()
                .last()
                .find("a")
                .attr("href")

                articleUrls.push(url)

                let articlePending = axios.get(url)
                pendingArticlesArray.push(articlePending)
            })
        })

      return Promise.all(pendingArticlesArray).then((results) => {
        let counter = 0;
        // console.log(results)
        results.forEach((articlesHTML) => {
            const $ = cheerio.load(articlesHTML.data)
            let summary = $("div.js_expandable-container")
                .children()
                .first()
                .text();
            articleInfo.push({
                url: articleUrls[counter],
                title: $("header").children("h1").text(),
                summary: summary,
                saved: false

            })
            counter++;
        })



        return articleInfo
    })

}

module.exports = scrapeData
// scrapeData().then(results => console.log(results))
// console.log(scrapeData())














