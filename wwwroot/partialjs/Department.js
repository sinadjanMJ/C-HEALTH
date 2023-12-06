var selectedDepartment;
var selectedDepartmentId;
var DepartmentList = {};
var Departmentname;


$(document).ready(function () {

    getDepartment();
    displayDepartmentData();

    function getDepartment() {
        $.ajax("../api/adminapi/getDepartment")
            .done(function (result) {
                DepartmentList = result;
                result.forEach(function (item) {
                    console.log(item);
                    Departmentname = item.departmentname;
                });

            });
    }




    $("#createDepartment").click((e) => {

        console.log("yehey na click jyud ko");
        //     console.log(catname);

        var arrData = {}; //ayaw ni tan dug kani dre nga line
        var formelements = $("#createDepartmentForm .form-group");

        //getting the data from the form
        var formInputs = $("#createDepartmentForm").serializeArray();
        formInputs.forEach(function (item) {
            arrData[item.name] = item.value;
        });

        if (formInputs.length === formelements.length && formInputs[0].value !== '') {

            if (formInputs[0].value != Departmentname) {
                //AJAX ADD DEPARTMENT
                $.ajax
                    ({
                        url: "../api/adminapi/AddDepartment",
                        type: "POST",
                        data:
                        {
                            adddep: arrData
                        },
                    })
                    .done(function () {

                        $("#createDepartmentForm")[0].reset();
                        $("#modalDepartmentCreate").modal("toggle");
                        getDepartment();
                         displaySavedProgress();
                        displayDepartmentData();

                    });
            } else {
                vol1();
            }


        }
        else {
            alertError();
        }
    });




  function displayDepartmentData() {
        $('#DepartmentData').DataTable().destroy();
        if (!$.fn.DataTable.isDataTable('#DepartmentData')) {
            $('#DepartmentData').DataTable({
                ajax: {
                    url: '../api/adminapi/getDepartment', // API endpoint to retrieve department
                    dataSrc: ''
                },
                columns:
                    [
                        { data: 'departmentId' },
                        { data: 'departmentName' },
                        {
                            data: 'departmentId',
                            render: function (data, type, row) {
                                return btnAddDepartment(data);
                            }
                        },
                    ]
            });
        }
        getDepartment();
    }

    function btnAddDepartment(departmentId) {
        return "<center><a class='btn btn-success DepartmentUpdate' data-departmentId=" + departmentId + "><i class='fa-solid fa-pen-to-square' style='color : #ffffff;'></i></a> | <a class='btn btn-danger DepartmentDelete' data-departmentId=" + departmentId + "><i class='fa-solid fa-trash' style='color : #ffffff;'></i></a></center>"
    }

     $("tbody").delegate(".DepartmentUpdate", "click", function (e) {
        console.log("I was clicked");
        var i = e.target.closest("a").getAttribute("data-departmentId");
        if (i != null) {
            $("#createDepartmentForm")[0].reset();
            $("#modalDepartmentUpdate").modal("toggle");

            selectedDepartmentId = i;
            selectedDepartment = DepartmentList.find(element => element.departmentId == i);

            console.log(selectedDepartment);

            oFormObject = document.forms["updateDepartmentForm"];
            initForm(oFormObject, selectedDepartment);
        }
    });

    function initForm(form, data) {

        Object.getOwnPropertyNames(data).forEach(function (item) {
            var currentElem = form.elements[item.charAt(0).toUpperCase() + item.slice(1)];

            if (currentElem == null) { return; }
            form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);

        });
    }


    $("#updateDepartment").click(function () {
        alertSaveChanges();
    });

    function alertSaveChanges() {
        Swal.fire({
            title: 'Do you want to save the changes?',
            confirmButtonText: 'Save',
            showCancelButton: true,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                updateDepartmentHolder();
            }
        })
    }

    function updateDepartmentHolder() {
        
        var arrData = {};
        var formelements = $("#updateDepartmentForm .form-group");

        //getting the data from the form
        var formInputs = $("#updateDepartmentForm").serializeArray();
        formInputs.forEach(function (item) {
            arrData[item.name] = item.value;
        });
        arrData.departmentId = selectedDepartmentId;

        if (formInputs.length === formelements.length && formInputs[0].value !== '') {
             if (formInputs[0].value != Departmentname) {
              proceedUpdate(arrData);
             console.log("gi click lagi ko " + arrData);
             }else{
              vol1();
             }
          
        } else {
            alertError();
        }
    }

    function proceedUpdate(arrData) {
        //AJAX UPDATE DEPARTMENT
        $.ajax
            ({
                url: "../api/adminapi/updateDepartment",
                type: "POST",
                data:
                {
                    updep: arrData,
                },
            })
            .done(function () {
                $("#updateDepartmentForm")[0].reset();
                $("#modalDepartmentUpdate").modal("toggle");
                displayDepartmentData();
                displaySavedProgress();
                getDepartment();
            });
    }

     $("tbody").delegate(".DepartmentDelete", "click", function (e) {
        var i = e.target.closest("a").getAttribute("data-departmentId");
        if (i != null) {
            //Insert code here for the delete
            selectedDepartmentId = i;
            console.log(selectedDepartmentId + "mao ni siya");
            alertDeleteConfirmation();
        }
    });

    function alertDeleteConfirmation() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to Delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                proceedDelete();
            }
        })
    }

    function proceedDelete() {
        console.log(selectedDepartmentId + "proceed");
        //AJAX DELETE DEPARTMENT
        $.ajax
            ({
                url: "../api/adminapi/deleteDepartment",
                type: "POST",
                data:
            
    {
                    id: selectedDepartmentId
                },
            })
            .done(function () {
                displayDepartmentData();
                getDepartment();
                alertDeleteInfo();
            });
    }


    










    function alertDeleteInfo() {
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        )
    }


    function vol1() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Inputted name is already in the data',
        })
    }
    function alertError() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Input the necessary elements!',
        })
    }

    function displaySavedProgress() {
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })

    }

}); //Don't touch this putang ina mo ka