document.getElementById("btnaddEmployee").addEventListener("click", function (event) {
    event.preventDefault()
    var TaskName = document.getElementById("txtTaskName").value;
    var Status = document.getElementById("txtStatus").value;
    var btneditId = "btnedit" + TaskName;
    var btndeleteId = "btndelete" + TaskName;
    var tablerow = "<tr Id='" + TaskName + "'   data-TaskName='" + TaskName + "'   data-Status='" + Status + "'>" +
        "<td class='td-data'>" + TaskName + "</td>" +
        "<td class='td-data'>" + Status + "</td>" +
        "<td class='td-data'><button id='" + btneditId + "' onclick=showeditrow('" + TaskName + "')>Edit</button><button id='" + btndeleteId + "' onclick='deleteEmployeeRow(" + TaskName + ")'>Delete</button></td>" +
        "</tr>";
    debugger;
    document.getElementById('tblbody').innerHTML += tablerow;
    document.getElementById('txtTaskName').value = "";
    document.getElementById('txtStatus').value = "";
});

function showeditrow(EMPID) {
    debugger;
    var EmployeeRow = document.getElementById(EMPID);

    var data = EmployeeRow.querySelectorAll(".td-data");

    //var TaskNumber = data[0].innerHTML;
    var TaskName = data[0].innerHTML;
    var Status = data[1].innerHTML;
    var btneditId = "btnedit" + TaskName;
    // data[0].innerHTML = '<input name="txtupdate_EmployeeID"  disabled id="txtupdate_TaskNumber" value="' + TaskNumber + '"/>';
    data[0].innerHTML = '<input name="txtupdate_EmployeeName" id="txtupdate_TaskName" value="' + TaskName + '"/>';
    data[1].innerHTML = '<input name="txtupdate_Address" id="txtupdate_Status" value="' + Status + '"/>';

    data[2].innerHTML =
        "<button class='btn btn-primary btn-xs btn-updateEmployee' onclick='updateemployees(" + TaskName + ")'>" +
        "<i class='fa fa-pencil' aria-hidden='true'></i>Update</button>" +
        "<button class='btn btn-warning btn-xs btn-cancelupdate' onclick='cancelupdate(" + TaskName + ")'><i class='fa fa-times' aria-hidden='true'></i>Cancel</button>" +
        "<button class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" + TaskName + ")'>" +
        "<i class='fa fa-trash' aria-hidden='true'></i>Delete</button>"
}

function cancelupdate(TaskName) {
    debugger;
    var btneditId = "btnedit" + TaskName;
    var btndeleteId = "btndelete" + TaskName;

    var CurrentRow = document.getElementById(TaskName);
    var data = CurrentRow.querySelectorAll(".td-data");

    var TaskName = CurrentRow.getAttribute("data-TaskName");
    var Status = CurrentRow.getAttribute("data-Status");


    //data[0].innerHTML = TaskName;
    data[0].innerHTML = TaskName;
    data[1].innerHTML = Status;

    var actionbtn = "<button id='" + btneditId + "' class='btn btn-info btn-xs btn-editcustomer' onclick='showeditrow(" + TaskName + ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
        "<button id='" + btndeleteId + "' class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" + TaskName + ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>"
    data[2].innerHTML = actionbtn;
}

function deleteEmployeeRow(TaskName) {
    document.getElementById(TaskName).remove();
}

function updateemployees(TaskName) {
    var btneditId = "btnedit" + TaskName;
    var btndeleteId = "btndelete" + TaskName;

    var CurrentRow = document.getElementById(TaskName);
    var data = CurrentRow.querySelectorAll(".td-data");

    var TaskName = data[0].querySelector("#txtupdate_TaskName").value;
    var Status = data[1].querySelector("#txtupdate_Status").value;


    // data[0].innerHTML = TaskNumber;
    data[0].innerHTML = TaskName;
    data[1].innerHTML = Status;


    var actionbtn = "<button id='" + btneditId + "' class='btn btn-info btn-xs btn-editcustomer' onclick='showeditrow(" + TaskName + ")'><i class='fa fa-pencil' aria-hidden='true'></i>Edit</button>" +
        "<button id='" + btndeleteId + "' class='btn btn-danger btn-xs btn-deleteEmployee' onclick='deleteEmployeeRow(" + TaskName + ")'><i class='fa fa-trash' aria-hidden='true'>Delete</button>"
    data[2].innerHTML = actionbtn;
}