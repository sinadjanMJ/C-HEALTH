
var selectedUnit;
var selectedUnitId;
var UnitList = {};
var unitsname;


$(document).ready(function () {

    getUnit();
    displayUnitData();

    function getUnit() {
        $.ajax("../api/adminapi/getUnit")
            .done(function (result) {
                UnitList = result;
                result.forEach(function (item) {
                  //  console.log(item);
                    unitsname = item.unitname;
                });

            });
    }


    $("#createUnit").click((e) => {

        console.log("yehey na click jyud ko");
        //     console.log(catname);

        var arrData = {}; //ayaw ni tan dug kani dre nga line
        var formelements = $("#createUnitForm .form-group");

        //getting the data from the form
        var formInputs = $("#createUnitForm").serializeArray();
        formInputs.forEach(function (item) {
            arrData[item.name] = item.value;
        });

        if (formInputs.length === formelements.length && formInputs[0].value !== '') {

            if (formInputs[0].value != unitsname) {
                //AJAX ADD DEPARTMENT
                $.ajax
                    ({
                        url: "../api/adminapi/AddUnit",
                        type: "POST",
                        data:
                        {
                            addun: arrData
                        },
                    })
                    .done(function () {

                        $("#createUnitForm")[0].reset();
                        $("#modalUnitCreate").modal("toggle");
                        getUnit();
                        displaySavedProgress();
                        displayUnitData();

                    });
            } else {
                vol1();
            }


        }
        else {
            alertError();
        }
    });
    

    function displayUnitData() {
        $('#UnitData').DataTable().destroy();
        if (!$.fn.DataTable.isDataTable('#UnitData')) {
            $('#UnitData').DataTable({
                ajax: {
                    url: '../api/adminapi/getUnit', // API endpoint to retrieve department
                    dataSrc: ''
                },
                columns:
                    [
                        { data: 'unitId' },
                        { data: 'unitname' },
                        {
                            data: 'unitId',
                            render: function (data, type, row) {
                                return btnAddUnit(data);
                            }
                        },
                    ]
            });
        }
        getUnit();
    }

    function btnAddUnit(id) {
        return "<center><a style='color : #ffffff;' class='btn btn-success UnitUpdate' data-unitId=" + id + "><i class='fa-solid fa-pen-to-square' style='color : #ffffff;' ></i>&nbsp;Update</a> | <a   class='btn btn-danger UnitDelete' data-unitId=" + id + "  style='color : #ffffff;><i class='fa-solid fa-trash' style='color : #ffffff;'></i>&nbsp;Delete</a></center>"
    }

    $("tbody").delegate(".UnitUpdate", "click", function (e) {
        console.log("I was clicked");
        var i = e.target.closest("a").getAttribute("data-unitId");
        if (i != null) {
            $("#createUnitForm")[0].reset();
            $("#modalUnitUpdate").modal("toggle");

            selectedUnitId = i;
            selectedUnit = UnitList.find(element => element.unitId == i);

            console.log(selectedUnit);

            oFormObject = document.forms["updateUnitForm"];
            initForm(oFormObject, selectedUnit);
        }
    });

    function initForm(form, data) {

        Object.getOwnPropertyNames(data).forEach(function (item) {
            var currentElem = form.elements[item.charAt(0).toUpperCase() + item.slice(1)];

            if (currentElem == null) { return; }
            form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);

        });
    }

    $("#updateUnit").click(function () {
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
                updateUnitHolder();
            }
        })
    }

    function updateUnitHolder() {
        
        var arrData = {};
        var formelements = $("#updateUnitForm .form-group");

        //getting the data from the form
        var formInputs = $("#updateUnitForm").serializeArray();
        formInputs.forEach(function (item) {
            arrData[item.name] = item.value;
        });
        arrData.unitId = selectedUnitId;

        if (formInputs.length === formelements.length && formInputs[0].value !== '') {
             if (formInputs[0].value != unitsname) {
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
                url: "../api/adminapi/updateUnit",
                type: "POST",
                data:
                {
                    upun: arrData,
                },
            })
            .done(function () {
                $("#updateUnitForm")[0].reset();
                $("#modalUnitUpdate").modal("toggle");
                displayUnitData();
                displaySavedProgress();
                getUnit();
            });
    }

$("tbody").delegate(".UnitDelete", "click", function (e) {
        var i = e.target.closest("a").getAttribute("data-unitId");
        if (i != null) {
            //Insert code here for the delete
            selectedUnitId = i;
            console.log(selectedUnitId + "mao ni siya");
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
        console.log(selectedUnitId + "proceed");
        //AJAX DELETE DEPARTMENT
        $.ajax
            ({
                url: "../api/adminapi/deleteUnit",
                type: "POST",
                data:
            
    {
                    id: selectedUnitId
                },
            })
            .done(function () {
                displayUnitData();
                getUnit();
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