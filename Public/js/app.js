$(document).ready(function() {


$("#scraper").on("click", (event) => {
    console.log("clicked")

    event.preventDefault()

    $.ajax({
        method: "GET",
        url: "/api/articles",
        data: {}
      })
        .then(response => {
          console.log(response)
  
  
        })
        .catch(err => {
          throw err;
        })





})





})


