$(document).ready(function() {








$("#scraper").on("click", (event) => {
    console.log("clicked")

    event.preventDefault()

    $.ajax({
        method: "GET",
        url: "/api/articles"
      })
        .then(response => {
            window.location.reload()

            
  
        })
        .catch(err => {
          throw err;
        })





})


$(".saveButton").on("click", (event => {

    // console.log(modal)

    $("#modal").css("display", "block")

    console.log(event.target.id)

    // $.ajax({
    //     method: "POST",
    //     url: "/api/add/note",
    //     data: {
    //         id: event.target.id
    //     }
    // })



    // $.ajax({
    //     method: "POST",
    //     url: "/api/add/note",
    //     body: {

    //     }
    // })
}))

$(window).on("click", (event) => {
    console.log(event.target)
    console.log($("#modal")[0])
    if (event.target == $("#modal")[0]) {
        $("#modal").css("display", "none")
    }

}) 
$("#closeModal").on("click", (event) => {
    $("#modal").css("display", "none")
})


})


