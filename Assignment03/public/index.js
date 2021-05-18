function deleteItem() {
    let itemToDelete = $("#itemToDelete").val().toString().toLowerCase();

    $.ajax({
        url: "/delete",
        method: "PUT",
        data: {
            item: itemToDelete,
        }
    }).done(function (data) {
        if (data.toLowerCase() == "ok") {
            window.location.href = '/';
            console.log(data);
        }
    }).fail(function (error) {
        console.log(error);
    })
}

function updateItem() {
    let originalItem = $("#originalItem").val().toString().toLowerCase();
    let newItem = $("#newItem").val().toString().toLowerCase();
    console.log("hello");
    console.log(originalItem);
    console.log(newItem);

    $.ajax({
        url: "/update",
        method: "PUT",
        data:{
            itemToReplace: originalItem,
            itemToReplaceWith: newItem,
        }
    }).done(function (data) {
        if (data.toLowerCase() == "ok") {
            window.location.href = "/";
            console.log(data);
        }
    }).fail(function (error) {
        console.log(error);
    })
}