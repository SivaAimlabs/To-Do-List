function CreateUniqueEmployeeID() {
    const ID = Date.now();
    return ID;
}
document.getElementById("btnaddEmployee").addEventListener("click", function (event) {
    event.preventDefault()
    var TaskNumber = CreateUniqueEmployeeID();
    var TaskName = document.getElementById("txtTaskName").value;
    var Status = document.getElementById("txtStatus").value;
    var btneditId = "btnedit" + TaskNumber;
    var btndeleteId = "btndelete" + TaskNumber;
    var tablerow = "<tr Id='" + TaskNumber + "'   data-EmployeeID='" + TaskNumber + "'   data-TaskName='" + TaskName + "'   data-Status='" + Status + "'>"+
        "<td class='td-data'>" + TaskNumber + "</td>"+
        "<td class='td-data'>" + TaskName + "</td>" +
        "<td class='td-data'>" + Status + "</td>" +
        "<td class='td-data'>" +
        "<button id='" + btneditId + "' class='btn btn-info btn-xs btn-editcustomer' onclick='showeditrow(" + TaskNumber + ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
        "<button id='" + btndeleteId + "' class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" + TaskNumber + ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>" +
        "</td>" +
        "</tr>";
    debugger;
    document.getElementById('tblbody').innerHTML += tablerow;
    document.getElementById('txtTaskName').value = "";
    document.getElementById('txtStatus').value = "";
});

function showeditrow(EmployeeID) {
    debugger;
    var EmployeeRow = document.getElementById(EmployeeID);

    var data = EmployeeRow.querySelectorAll(".td-data");

    var TaskNumber = data[0].innerHTML;
    var TaskName = data[1].innerHTML;
    var Status = data[2].innerHTML;
    var btneditId = "btnedit" + EmployeeID;
    data[0].innerHTML = '<input name="txtupdate_EmployeeID"  disabled id="txtupdate_TaskNumber" value="' + TaskNumber + '"/>';
    data[1].innerHTML = '<input name="txtupdate_EmployeeName" id="txtupdate_TaskName" value="' + TaskName + '"/>';
    data[2].innerHTML = '<input name="txtupdate_Address" id="txtupdate_Status" value="' + Status + '"/>';

    data[3].innerHTML =
        "<button onclick=updateemployees(" + TaskNumber + ")'>Update</button>" +
        "<button onclick=cancelupdate('" + TaskNumber + "')>Cancel</button>" +
        "<button onclick='deleteEmployeeRow('" + TaskNumber + "')>Delete</button>"
}

function cancelupdate(TaskNumber) {
    debugger;
    var btneditId = "btnedit" + TaskNumber;
    var btndeleteId = "btndelete" + TaskNumber;

    var CurrentRow = document.getElementById(TaskNumber);
    var data = CurrentRow.querySelectorAll(".td-data");

    var TaskName = CurrentRow.getAttribute("data-TaskName");
    var Status = CurrentRow.getAttribute("data-Status");


    data[0].innerHTML = TaskNumber;
    data[1].innerHTML = TaskName;
    data[2].innerHTML = Status;

    var actionbtn = "<button id='" + btneditId + "' class='btn btn-info btn-xs btn-editcustomer' onclick='showeditrow(" + TaskNumber + ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
        "<button id='" + btndeleteId + "' class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" + TaskNumber + ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>"
    data[3].innerHTML = actionbtn;
}

function deleteEmployeeRow(TaskNumber) {
    document.getElementById(TaskNumber).remove();
}

function updateemployees(TaskNumber) {
    var btneditId = "btnedit" + TaskNumber;
    var btndeleteId = "btndelete" + TaskNumber;

    var CurrentRow = document.getElementById(TaskNumber);
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