function CreateUniqueID() {
    const ID = Date.now();
    return ID;
}

function deleteli(TaskNumber) {
    $("#" + TaskNumber + "").remove();
}

function showEditOptions(TaskNumber) {
    console.log("show edit options")
    var TaskName = $("#" + TaskNumber + " .task").html()
    $("#" + TaskNumber + "").html("<input id='txtupdate_TaskNumber' value='" + TaskNumber + "'/>" +
        "<input id='txtupdate_TaskName' value='" + TaskName + "'/>"+
        "<button onclick = updateli('" + TaskNumber + "') > Update </button>" +
        "<button onclick = cancelupdate('" + TaskNumber + "') > Cancel </button>" +
        "<button onclick = deleteli('" + TaskNumber + "') > Delete </button>");
}


function updateli(TaskNumber) {
    var btneditId = "btnedit" + TaskNumber;
    var btndeleteId = "btndelete" + TaskNumber;

    var CurrentRow = $("#" + TaskNumber + "");
    var data = CurrentRow.querySelectorAll(".td-data");

    var TaskName = data[1].querySelector("#txtupdate_TaskName").value;
    var Status = data[2].querySelector("#txtupdate_Status").value;


    data[0].innerHTML = TaskNumber;
    data[1].innerHTML = TaskName;
    data[2].innerHTML = Status;


    var actionbtn = "<button id='" + btneditId + "' class='btn btn-info btn-xs btn-editcustomer' onclick='showeditrow(" + TaskNumber + ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
        "<button id='" + btndeleteId + "' class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" + TaskNumber + ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>"
    data[3].innerHTML = actionbtn;
}

$(document).ready(function () {
    $("#btn").click(function () {
        var x = $("#task").val()
        if (x != "") {
            var TaskNumber = CreateUniqueID();
            var btneditId = "btnedit" + TaskNumber;
            var btndeleteId = "btndelete" + TaskNumber;
            $("#myTasks").append("<li id = '" + TaskNumber + "' class = 'liItem'>" +"<div class= 'task'>"+ x +"</div>"+
                "<button id='" + btndeleteId + "' onclick =deleteli('" + TaskNumber + "')> Delete </button>" +
                "<button id='" + btneditId + "' onclick=showEditOptions('" + TaskNumber + "')>Edit</button>" +
                "</li>");
            $("#task").val("")
        }
    });
    // if(this.checkbox.value == 'checked'){

    // }

});
