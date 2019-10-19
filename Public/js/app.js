$(document).ready(function () {








    $("#scraper").on("click", (event) => {
        console.log("clicked")

        event.preventDefault()

        $.ajax({
            method: "GET",
            url: "/api/articles"
        })
            .then(response => {
                window.location.replace("/")



            })
            .catch(err => {
                throw err;
            })





    })


    $(".saveButton").on("click", (event => {

        // console.log(modal)

        $("#modal").css("display", "block")

        console.log(event.target.id)

        $.ajax({
            method: "POST",
            url: "/api/save/article",
            data: {
                id: event.target.id
            }
        })
            .catch(err => console.log(err))


    }))





    $(".notesButton").on("click", (event) => {

        let articleId = event.target.id

        $(".addNoteButton").attr("id", articleId)

        $("#noteModal").css("display", "block")

        $.ajax({
            method: "GET",
            url: `/api/getNotes/${articleId}`
        }).then((notesData) => {
            console.log(notesData)


            for (let note of notesData) {
                $("#notesHere").empty()
                const noteHolder = $("<div>")
                const noteText = $("<span>").text(note.body)
                const deleteButton = $(`<button id="${note._id}"class="btn btn-primary deleteButton">Delete</button>`)
                noteHolder.append(noteText)
                    .append(deleteButton)
                    .appendTo($("#notesHere"))

            }
        })





        // $.ajax({
        //     method: "GET"
        // })
    })


    $(document).on("click", ".deleteButton", (event) => {
        console.log("boogaloog")
        const noteId = event.target.id
        console.log(noteId)
        event.target.remove()
 

        $.ajax({
            url: `/api/delete/${noteId}`,
            method: "DELETE",
        }).then((result) => console.log(result))
        .catch(err => console.log(err))
    })

    $(".addNoteButton").on("click", (event) => {

        const articleId = $(".addNoteButton").attr("id")

        const text = $("#noteText").val().trim()

        console.log(articleId)

        $.ajax({
            method: "POST",
            url: `/api/addNotes/${articleId}`,
            data: {
                body: text
            }
        })
    })








    $(window).on("click", (event) => {
        console.log(event.target)
        console.log($("#modal")[0])
        if (event.target == $("#modal")[0]) {
            $("#modal").css("display", "none")
        }

        console.log($("#noteModal")[0])

        if (event.target == $("#noteModal")[0]) {
            $("#noteModal").css("display", "none")
        }

    })



    $("#closeModal").on("click", (event) => {
        $("#modal").css("display", "none")
    })


})


