var selectedPhysician;
var selectedPhysicianId;
var PhysicianList = {};
var arr = {};
var fullname;

$(document).ready(function () {


     displayPhysicianData();
     getPhysician();

    function getPhysician() {

         $.ajax("../api/adminapi/getPhysician")
            .done(function (result) {

                PhysicianList = result;

                result.forEach(function (item) {
                  //  console.log(item);
                    fullname = item.fullname;
                });

            });

     }




      $("#createPhysician").click((e) => {

        console.log("yehey na click jyud ko");
        // console.log(equipname);

        var arrData = {}; //ayaw ni tan dug kani dre nga line
        var formelements = $("#createPhysicianForm .form-group");



        //getting the data from the form
        var formInputs = $("#createPhysicianForm").serializeArray();
        formInputs.forEach(function (item) {
            arrData[item.name] = item.value;


        });

        if (formInputs.length === formelements.length && formInputs[0].value !== '') {
           
              
            arrData.Fullname = ` ${arrData.Firstname} ${arrData.Middlename} ${arrData.Lastname}`;
              
             // console.log(arrData.Fullname);
             //  console.log(arrData);

         if (arrData.Fullname != fullname) {
          
                $.ajax
                    ({
                        url: "../api/adminapi/AddPhysician",
                        type: "POST",
                        data:
                        {
                            addPhy: arrData,
                        },
                    })
                    .done(function () {

                        $("#createPhysicianForm")[0].reset();
                        $("#modalPhysicianCreate").modal("toggle");

                        displaySavedProgress();
                        displayPhysicianData();


                    });

            } else {
            vol1();
            } 

        }else {
            alertError();
        }
    });

    



     function displayPhysicianData() {
        $('#PhysicianData').DataTable().destroy();
        if (!$.fn.DataTable.isDataTable('#PhysicianData')) {
            $('#PhysicianData').DataTable({
                ajax: {
                    url: '../api/adminapi/getPhysician', // API endpoint to retrieve department
                    dataSrc: ''
                },
                columns:
                    [
                        
                        { data: 'firstname' },
                        { data: 'middlename' },
                        { data: 'lastname' },
                        { data: 'gender' },
                        

                        {
                            data: 'physicianId',
                            render: function (data, type, row) {
                                return btnAddPhysicianData(data);
                            }
                        },
                    ]
            });
        }
        getPhysician();
    }


    function btnAddPhysicianData(id) {
        return "<center><a class='btn btn-success physicianUpdate' data-physicianId=" + id + "><i class='fa-solid fa-pen-to-square' style='color : #ffffff;'></i></a> | <a class='btn btn-danger physicianDelete' data-physicianId=" + id + "><i class='fa-solid fa-trash' style='color : #ffffff;'></i></a></center>"
    }


    $("tbody").delegate(".physicianUpdate", "click", function (e) {
      //  console.log("I was clicked");
        var i = e.target.closest("a").getAttribute("data-physicianId");
        if (i != null) {
            $("#createPhysicianForm")[0].reset();
            $("#modalPhysicianUpdate").modal("toggle");

            selectedPhysicianId = i;
            selectedPhysician = PhysicianList.find(element => element.physicianId == i);

            //var selectIdToSet = $("#Course");
            console.log(selectedPhysician);

            oFormObject = document.forms["updatePhysicianForm"];



            initForm(oFormObject, selectedPhysician);
          
        }
    });


     function initForm(form, data) {

        Object.getOwnPropertyNames(data).forEach(function (item) {

            var currentElem = form.elements[item.charAt(0).toUpperCase() + item.slice(1)];

            //  console.log(currentElem);

            if (currentElem == null) { return; }

          
            if (currentElem.tagName == "SELECT") {
                // Check the ID of the SELECT element
                if (currentElem.id == "gender") {
                    // Handle the case where the current element is a SELECT with a specific ID
                    var selectChildren = Array.from(currentElem.children);
                    var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedPhysician.gender.trim());
                    if (matchedOpt) {
                        matchedOpt.selected = true;
                    }
                }
            } else {
                // Handle the case where the current element is not a SELECT with the specific ID
                form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
            }

        });
    }


   $("#updatePhysician").click(function () {
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
                updatePhysicianHolder();
            }
        })
    }

    function updatePhysicianHolder() {

        var arrData = {};
        var formelements = $("#updatePhysicianForm .form-group");

        //getting the data from the form
        var formInputs = $("#updatePhysicianForm").serializeArray();
        formInputs.forEach(function (item) {
            arrData[item.name] = item.value;
        });
        arrData.physicianId = selectedPhysicianId;
    
        arrData.Fullname = ` ${arrData.Firstname} ${arrData.Middlename} ${arrData.Lastname}`;
           
     // console.log(arrData);
      
            if (arrData.Fullname != fullname) {
                proceedUpdate(arrData);

            } else {
                vol1();
            }

    }
    

    function proceedUpdate(arrData) {

        $.ajax
            ({
                url: "../api/adminapi/updatePhysician",
                type: "POST",
                data:
                {
                    upPhy: arrData,
                },
            })
            .done(function () {
                $("#updatePhysicianForm")[0].reset();
                $("#modalPhysicianUpdate").modal("toggle");
                displayPhysicianData();
                displaySavedProgress();
            });
    }

      $("tbody").delegate(".physicianDelete", "click", function (e) {
        var i = e.target.closest("a").getAttribute("data-physicianId");
        if (i != null) {
            //Insert code here for the delete
            selectedPhysicianId = i;
          //  console.log(selectedPhysicianId + "mao ni siya");
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
       // console.log(selectedStudentId + "proceed");
        //AJAX DELETE DEPARTMENT
        $.ajax
            ({
                url: "../api/adminapi/deletePhysician",
                type: "POST",
                data:

                {
                    id: selectedPhysicianId
                },
            })
            .done(function () {
                displayPhysicianData();
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





});//end of this whole funcion dont touch it