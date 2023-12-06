var selectedDoctor;
    var selectedDoctorId;
    var DoctorList = {};
    var docfname;
    var doclname;

    var TotalArr = [];

    $(document).ready(function () {


        displayDoctorData();
        getDoctor();


        function getDoctor() {
            $.ajax("../api/adminapi/getDoctor")
                .done(function (result) {
                    DoctorList = result;

                    TotalArr = result;
                    $("#total").html( TotalArr.length );
                    result.forEach(function (item) {
                        // console.log(item);
                        docfname = item.doctorFirstName;
                        doclname = item.doctorLastName;


                        
                    });

                });
        }

        $("#createDoctor").click((e) => {

            console.log("yehey na click jyud ko");
            // console.log(equipname);

            var arrData = {}; //ayaw ni tan dug kani dre nga line
            var formelements = $("#createDoctorForm .form-group");

            //getting the data from the form
            var formInputs = $("#createDoctorForm").serializeArray();
            formInputs.forEach(function (item) {
                arrData[item.name] = item.value;
            });
            console.log(formInputs);
            //if (formInputs.length === formelements.length && formInputs[0].value !== '') 
            if (formInputs[0].value !== '') {

                if (formInputs[0].value != docfname && formInputs[1].value != doclname) {
                    //AJAX ADD Equipment
                    $.ajax
                        ({
                            url: "../api/adminapi/AddDoctor",
                            type: "POST",
                            data:
                            {
                                adddoc: arrData
                            },
                        })
                        .done(function () {

                            $("#createDoctorForm")[0].reset();
                            $("#modalDoctorCreate").modal("toggle");
                            getDoctor();
                            displaySavedProgress();
                            displayDoctorData();

                        });
                } else {
                    vol1();
                }


            }
            else {
                alertError();
            }
        });

        function displayDoctorData() {
            $('#DoctorData').DataTable().destroy();
            if (!$.fn.DataTable.isDataTable('#DoctorData')) {
                $('#DoctorData').DataTable({
                    ajax: {
                        url: '../api/adminapi/getDoctor',
                        dataSrc: ''
                    },
                    columns:
                        [
                            { data: 'doctorId' },
                            { data: 'doctorFirstName' },
                            { data: 'doctorLastName' },
                            { data: 'doctorAddress' },
                            { data: 'doctorGmailAcc' },
                            { data: 'status' },
                            {
                                data: 'doctorId',
                                render: function (data, type, row) {
                                    return btnAddDoctor(data);
                                }
                            },
                        ]
                });
            }
            getDoctor();
        }

        function btnAddDoctor(doctorId) {
            return "<center><a class='btn btn-success DoctorUpdate' data-doctorId=" + doctorId + "><i class='fa-solid fa-pen-to-square' style='color : #ffffff;'></i></a> | <a class='btn btn-danger DoctorDelete' data-doctorId=" + doctorId + "><i class='fa-solid fa-trash' style='color : #ffffff;'></i></a></center>"
        }


        $("tbody").delegate(".DoctorUpdate", "click", function (e) {
            console.log("I was clicked");
            var i = e.target.closest("a").getAttribute("data-doctorId");
            if (i != null) {
                $("#createDoctorForm")[0].reset();
                $("#modalDoctorUpdate").modal("toggle");

                selectedDoctorId = i;
                selectedDoctor = DoctorList.find(element => element.doctorId == i);

                oFormObject = document.forms["updateDoctorForm"];
                initForm(oFormObject, selectedDoctor);
            }
        });

        function initForm(form, data) {

            Object.getOwnPropertyNames(data).forEach(function (item) {
                var currentElem = form.elements[item.charAt(0).toUpperCase() + item.slice(1)];

                if (currentElem == null) { return; }
                form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                if (data.status == "Active") {
                    $('.stat').prop('checked', true);
                }

                else {
                    $('.stat').prop('checked', false);
                }
            });
        }

        $("#updateDoctors").click(function () {
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
                    updateDoctorHolder();
                }
            })
        }

        function updateDoctorHolder() {
            console.log(arrData);
            var arrData = {};
            var formelements = $("#updateDoctorForm .form-group");

            //getting the data from the form
            var formInputs = $("#updateDoctorForm").serializeArray();
            formInputs.forEach(function (item) {
                arrData[item.name] = item.value;
            });
            arrData.doctorId = selectedDoctorId; //check this area kay kung masayop kas id mo duplicate siya

            if (formInputs[0].value !== '') {
                proceedUpdate(arrData);
                console.log("gi click lagi ko " + arrData);
            } else {
                alertError();
            }
        }
        function proceedUpdate(arrData) {
            //AJAX UPDATE DEPARTMENT
            $.ajax
                ({
                    url: "../api/adminapi/updateDoctor",
                    type: "POST",
                    data:
                    {
                        updoc: arrData,
                    },
                })
                .done(function () {
                    $("#updateDoctorForm")[0].reset();
                    $("#modalDoctorUpdate").modal("toggle");
                    displayDoctorData();
                    displaySavedProgress();
                });
        }



        $("tbody").delegate(".DoctorDelete", "click", function (e) {
            var i = e.target.closest("a").getAttribute("data-doctorId");
            if (i != null) {
                //Insert code here for the delete
                selectedDoctorId = i;
                console.log(selectedDoctorId + "mao ni siya");
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
            console.log(selectedDoctorId + "proceed");
            //AJAX DELETE DEPARTMENT
            $.ajax
                ({
                    url: "../api/adminapi/deleteDoctor",
                    type: "POST",
                    data:
                    {
                        id: selectedDoctorId
                    },
                })
                .done(function () {
                    displayDoctorData();
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

    }); //dont touch this