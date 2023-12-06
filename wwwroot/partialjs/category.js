var selectedCategory;
var selectedCategoryId;
var categoryList = {};
var catname;


$(document).ready(function () {

    getCategory();
    displayCategoryData();

    function getCategory() {
        $.ajax("../api/adminapi/getCategory")
            .done(function (result) {
                categoryList = result;
                result.forEach(function (item) {
                    console.log(item);
                    catname = item.categoryname;
                });

            });
    }


    $("#createCategory").click((e) => {

        console.log("yehey na click jyud ko");
        //     console.log(catname);

        var arrData = {}; //ayaw ni tan dug kani dre nga line
        var formelements = $("#createCategoryForm .form-group");

        //getting the data from the form
        var formInputs = $("#createCategoryForm").serializeArray();
        formInputs.forEach(function (item) {
            arrData[item.name] = item.value;
        });

        if (formInputs.length === formelements.length && formInputs[0].value !== '') {

            if (formInputs[0].value != catname) {
                //AJAX ADD DEPARTMENT
                $.ajax
                    ({
                        url: "../api/adminapi/AddCategory",
                        type: "POST",
                        data:
                        {
                            addcat: arrData
                        },
                    })
                    .done(function () {

                        $("#createCategoryForm")[0].reset();
                        $("#modalCategoryCreate").modal("toggle");
                        getCategory();
                        displaySavedProgress();
                        displayCategoryData();

                    });
            } else {
                vol1();
            }


        }
        else {
            alertError();
        }
    });

    function displayCategoryData() {
        $('#CategoryData').DataTable().destroy();
        if (!$.fn.DataTable.isDataTable('#CategoryData')) {
            $('#CategoryData').DataTable({
                ajax: {
                    url: '../api/adminapi/getCategory', // API endpoint to retrieve department
                    dataSrc: ''
                },
                columns:
                    [
                       
                        { data: 'categoryname' },
                        {
                            data: 'id',
                            render: function (data, type, row) {
                                return btnAddCategory(data);
                            }
                        },
                    ]
            });
        }
        getCategory();
    }

    function btnAddCategory(id) {
        return "<center><a class='btn btn-success CategoryUpdate' data-id=" + id + "><i class='fa-solid fa-pen-to-square' style='color : #ffffff;'></i></a> | <a class='btn btn-danger CategoryDelete' data-id=" + id + "><i class='fa-solid fa-trash' style='color : #ffffff;'></i></a></center>"
    }

    $("tbody").delegate(".CategoryUpdate", "click", function (e) {
        console.log("I was clicked");
        var i = e.target.closest("a").getAttribute("data-id");
        if (i != null) {
            $("#createCategoryForm")[0].reset();
            $("#modalCategoryUpdate").modal("toggle");

            selectedCategoryId = i;
            selectedCategory = categoryList.find(element => element.id == i);

            console.log(selectedCategory);

            oFormObject = document.forms["updateCategoryForm"];
            initForm(oFormObject, selectedCategory);
        }
    });

    function initForm(form, data) {

        Object.getOwnPropertyNames(data).forEach(function (item) {
            var currentElem = form.elements[item.charAt(0).toUpperCase() + item.slice(1)];

            if (currentElem == null) { return; }
            form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);

        });
    }

    $("#updateCategory").click(function () {
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
                updateCategoryHolder();
            }
        })
    }

    function updateCategoryHolder() {
        
        var arrData = {};
        var formelements = $("#updateCategoryForm .form-group");

        //getting the data from the form
        var formInputs = $("#updateCategoryForm").serializeArray();
        formInputs.forEach(function (item) {
            arrData[item.name] = item.value;
        });
        arrData.id = selectedCategoryId;

        if (formInputs.length === formelements.length && formInputs[0].value !== '') {
             if (formInputs[0].value != catname) {
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
                url: "../api/adminapi/updateCategory",
                type: "POST",
                data:
                {
                    upcat: arrData,
                },
            })
            .done(function () {
                $("#updateCategoryForm")[0].reset();
                $("#modalCategoryUpdate").modal("toggle");
                displayCategoryData();
                displaySavedProgress();
            });
    }

$("tbody").delegate(".CategoryDelete", "click", function (e) {
        var i = e.target.closest("a").getAttribute("data-id");
        if (i != null) {
            //Insert code here for the delete
            selectedCategoryId = i;
            console.log(selectedCategoryId + "mao ni siya");
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
        console.log(selectedCategoryId + "proceed");
        //AJAX DELETE DEPARTMENT
        $.ajax
            ({
                url: "../api/adminapi/deleteCategory",
                type: "POST",
                data:
            
    {
                    id: selectedCategoryId
                },
            })
            .done(function () {
                displayCategoryData();
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