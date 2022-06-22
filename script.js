function CreateUniqueID() {
    const ID = Date.now();
    return ID;
}

function deleteli(TaskNumber) {
    $("#" + TaskNumber + "").remove();
}

function showEditOptions(TaskNumber) {
    var TaskName = $("#" + TaskNumber + " .task").html()

    $("#" + TaskNumber + "").html("<input id='txtupdate_TaskName' value='" + TaskName + "'/>" +
        "<button onclick = updateli('" + TaskNumber + "') > Update </button>" +
        "<button onclick = cancelupdate('" + TaskNumber + "') > Cancel </button>" +
        "<button onclick = deleteli('" + TaskNumber + "') > Delete </button>");
}


function updateli(TaskNumber) {
    var btneditId = "btnedit" + TaskNumber;
    var btndeleteId = "btndelete" + TaskNumber;

    var x = $("#txtupdate_TaskName").val()

    $("#myTasks").append("<li id = '" + TaskNumber + "' class = 'liItem' prevTask = '" + x + "'>" + "<div class= 'task'>" + x + "</div>" +
        "<button id='" + btndeleteId + "' onclick =deleteli('" + TaskNumber + "')> Delete </button>" +
        "<button id='" + btneditId + "' onclick=showEditOptions('" + TaskNumber + "')>Edit</button>" +
        "</li>");
    deleteli(TaskNumber)
}


function cancelupdate(TaskNumber) {
    var btneditId = "btnedit" + TaskNumber;
    var btndeleteId = "btndelete" + TaskNumber;

    var x = $("#" + TaskNumber + "").attr("prevTask")

    $("#myTasks").append("<li id = '" + TaskNumber + "' class = 'liItem' prevTask = '" + x + "'>" + "<div class= 'task'>" + x + "</div>" +
        "<button id='" + btndeleteId + "' onclick =deleteli('" + TaskNumber + "')> Delete </button>" +
        "<button id='" + btneditId + "' onclick=showEditOptions('" + TaskNumber + "')>Edit</button>" +
        "</li>");
    deleteli(TaskNumber)

}


$(document).ready(function () {
    $("#btn").click(function () {
        var x = $("#task").val()
        if (x != "") {
            var TaskNumber = CreateUniqueID();
            var btneditId = "btnedit" + TaskNumber;
            var btndeleteId = "btndelete" + TaskNumber;
            $("#myTasks").append("<li id = '" + TaskNumber + "' class = 'liItem' prevTask = '" + x + "'>" + "<div class= 'task'>" + x + "</div>" +
                "<button id='" + btndeleteId + "' onclick =deleteli('" + TaskNumber + "')> Delete </button>" +
                "<button id='" + btneditId + "' onclick=showEditOptions('" + TaskNumber + "')>Edit</button>" +
                "</li>");
            $("#task").val("")
        }
    });


});