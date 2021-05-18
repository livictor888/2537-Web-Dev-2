let itemNumber = 1;

function addItemForm() {
    $("#form").find("#addTask").remove(); // remove the plus button

    let newItemForm = $('<div class="task">\n' +
        '            To-do Item' + ++itemNumber + ' <input class="taskInput" type="text"/>\n' +
        '            <button id="addTask" onclick="addItemForm()">+</button>\n' +
        '        </div>');
    $("#task_list").append(newItemForm); //put the new form under
}

function submit() {
    let items = [];
    // place all the inputs from each task form into the items array
    $(".taskInput").each(function () {
        items.push($(this).val().toLowerCase());
    });

    console.log(items);

    $.ajax({
        url: '/myForm',
        method: 'POST',
        data: {
            items: items
        }
    }).done(function (data) {
        if (data.toLowerCase() == "ok") {
            console.log("ajax response");
            window.location.href = '/';
        }
    }).fail(function (error) {
        console.log(error);
    })
}