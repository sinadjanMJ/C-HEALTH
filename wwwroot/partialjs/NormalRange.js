var selectedNR;
var selectedNRId;
var NRList = {};


$(document).ready(function () {
 

 getNR();
 getUnit();
 displayNRData();



function getNR() {
        $.ajax("../api/adminapi/getNR")
            .done(function (result) {
               NRList = result;
             
              console.log(result);
                result.forEach(function (item) {
              //   console.log(item);

                });

            });
    }

function getUnit() {
        $.ajax("../api/adminapi/getUnit")
            .done(function (result) {

                document.querySelector("#catSelect").innerHTML = "";

                var template = document.querySelector("template#NROptionTemplate");
                var parent = document.querySelectorAll("#catSelect");


                for (i = 0; i < parent.length; i++) {
                    result.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }

            });

    }





    $("#createNR").click((e) => {

        console.log("yehey na click jyud ko");
        // console.log(equipname);

        var arrData = {}; //ayaw ni tan dug kani dre nga line
        var formelements = $("#createNRForm .form-group");

        //getting the data from the form
        var formInputs = $("#createNRForm").serializeArray();
        formInputs.forEach(function (item) {
            arrData[item.name] = item.value;
        });

       



            //AJAX ADD Equipment
            console.log(formInputs);
            $.ajax
                ({
                    url: "../api/adminapi/AddNR",
                    type: "POST",
                    data:
                    {
                        addNR: arrData
                    },
                })
                .done(function () {

                    $("#createNRForm")[0].reset();
                    $("#modalNRCreate").modal("toggle");
                   
                   
                    getNR();
                    displaySavedProgress();
                   displayNRData();

                });

      
       
    });



   function displayNRData() {
        $('#NRData').DataTable().destroy();
        if (!$.fn.DataTable.isDataTable('#NRData')) {
            $('#NRData').DataTable({
                ajax: {
                    url: '../api/adminapi/getNR', // API endpoint to retrieve department
                    dataSrc: ''
                },
                columns:
                    [
                        { data: 'normalrangeId' },
                        { data: 'test' },
                        { data: 'minRange' },
                        { data: 'maxRange' },
                        { data: 'unitname' },
                        { data: 'minAge' },
                        { data: 'maxAge' },
                        { data: 'gender' },
                        {
                            data: 'normalrangeId',
                            render: function (data, type, row) {
                                return btnAddNR(data);
                            }
                        },
                    ]
            });
        }
        getNR();
       
    }

    function btnAddNR(normalrangeId) {
        return "<center><a class='btn btn-success NRUpdate' data-normalrangeId=" + normalrangeId + "><i class='fa-solid fa-pen-to-square' style='color : #ffffff;'></i></a> | <a class='btn btn-danger NRDelete' data-normalrangeId=" + normalrangeId + "><i class='fa-solid fa-trash' style='color : #ffffff;'></i></a></center>"
    }

     $("tbody").delegate(".NRUpdate", "click", function (e) {
        console.log("I was clicked");
        var i = e.target.closest("a").getAttribute("data-normalrangeId");
        if (i != null) {
            $("#createNRForm")[0].reset();
            $("#modalNRUpdate").modal("toggle");

            selectedNRId = i;
            selectedNR = NRList.find(element => element.normalrangeId == i);

            console.log(selectedNR);

            oFormObject = document.forms["updateNRForm"];
            initForm(oFormObject, selectedNR);
        }
    });


    function initForm(form, data) {

        Object.getOwnPropertyNames(data).forEach(function (item) {

            var currentElem = form.elements[item.charAt(0).toUpperCase() + item.slice(1)];

            if (currentElem == null) { return; }

            if (currentElem.tagName == "SELECT") {
                var selectChildren = Array.from(currentElem.children);
                var matchedOpt = selectChildren.find(opt => opt.value == selectedNR.unitId);
              //  console.log(selectedNR.normalrangeId);
                if (matchedOpt) {
                    matchedOpt.selected = true;
                }
            } else {
                form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
            }


        });


    }


    $("#updateNR").click(function () {
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
                updateNRHolder();
            }
        })
    }

    function updateNRHolder() {
        var arrData = {};

        var formelements = $("#updatNRForm .form-group");

        var formInputs = $("#updateNRForm").serializeArray();
        console.log(formInputs);
        formInputs.forEach(function (item) {
            arrData[item.name] = item.value;
        });

        //attempts to give value to the data
        arrData.normalrangeId = selectedNRId;
        console.log(arrData);



        if (formInputs[0].value !== '') {

            $.ajax
                ({
                    url: "../api/adminapi/updateNR",
                    type: "POST",
                    data:
                    {
                        upNR: arrData
                    },
                })
                .done(function () {
                    // document.querySelector(".parent").innerHTML ="";
                 
                     $("#updateNRForm")[0].reset();
                     $("#modalNRUpdate").modal("toggle");


                    displayNRData();
                    displaySavedProgress();
                    getNR();

                });


        } else {
            alertError();
        }



    }


    $("tbody").delegate(".NRDelete", "click", function (e) {
        var i = e.target.closest("a").getAttribute("data-normalrangeId");
        if (i != null) {
            //Insert code here for the delete
            selectedNRId = i;
            console.log(selectedNRId + "mao ni siya");
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
        console.log(selectedNRId + "proceed");
        //AJAX DELETE DEPARTMENT
        $.ajax
            ({
                url: "../api/adminapi/deleteNR",
                type: "POST",
                data:
            
    {
                    id: selectedNRId
                },
            })
            .done(function () {
                displayNRData();
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






});//end of this function dont touch it