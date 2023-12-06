var selectedDate;
    var selectedDateId;
    var DateList = {};
    var datesame;

    var selectedDateTime;
    var selectedDateTimeId;
    var DateTimeList = {};
    var Province = {};



    $(document).ready(function () {





        getDate();
        getDateTime();

        displayDateData();
        displayDateTimeData();





        function getDate() {
            $.ajax("../api/adminapi/getDate")
                .done(function (result) {
                    DateList = result;
                    result.forEach(function (item) {
                        //   console.log(item);
                        datesame = item.avadate;
                    });

                });
        }
        function getDateTime() {
            $.ajax("../api/adminapi/getDateTime")
                .done(function (result) {
                    DateTimeList = result;
                    result.forEach(function (item) {
                        //   console.log(item);

                    });

                });
        }







        $("#createDate").click((e) => {

            console.log("yehey na click jyud ko");
            //     console.log(catname);

            var arrData = {}; //ayaw ni tan dug kani dre nga line
            var formelements = $("#createDateForm .form-group");

            //getting the data from the form
            var formInputs = $("#createDateForm").serializeArray();

            console.log(formInputs);
            formInputs.forEach(function (item) {
                arrData[item.name] = item.value;
            });

            if (formInputs.length === formelements.length && formInputs[0].value !== '') {

                if (formInputs[0].value != datesame) {
                    //AJAX ADD DEPARTMENT
                    $.ajax
                        ({
                            url: "../api/adminapi/AddDate",
                            type: "POST",
                            data:
                            {
                                adddate: arrData
                            },
                        })
                        .done(function () {

                            $("#createDateForm")[0].reset();
                            $("#modalDateCreate").modal("toggle");
                            getDate();
                            getDates();

                            displaySavedProgress();
                            displayDateData();

                        });
                } else {
                    vol1();
                }


            }
            else {
                alertError();
            }
        });


        function displayDateData() {
            $('#DateData').DataTable().destroy();
            if (!$.fn.DataTable.isDataTable('#DateData')) {
                $('#DateData').DataTable({
                    ajax: {
                        url: '../api/adminapi/getDate', // API endpoint to retrieve department
                        dataSrc: ''
                    },
                    columns:
                        [
                          
                            { data: 'avadate' },
                            {
                                data: 'dateId',
                                render: function (data, type, row) {
                                    return btnAddDate(data);
                                }
                            },
                        ]
                });
            }
            getDate();
            getDates();
        }

        function btnAddDate(dateId) {
            return "<center><a class='btn btn-success datesUpdate' data-dateId=" + dateId + "><i class='fa-solid fa-pen-to-square' style='color : #ffffff;'></i></a> | <a class='btn btn-danger DateDelete' data-dateId=" + dateId + "><i class='fa-solid fa-trash' style='color : #ffffff;'></i></a></center>"
        }

        $("tbody").delegate(".datesUpdate", "click", function (e) {
            console.log("I was clicked");
            var i = e.target.closest("a").getAttribute("data-dateId");
            if (i != null) {
                $("#createDateForm")[0].reset();
                $("#modalDateUpdate").modal("toggle");

                selectedDateId = i;
                selectedDate = DateList.find(element => element.dateId == i);

                console.log(selectedDate);

                oFormObject = document.forms["updateDateForm"];
                initForm(oFormObject, selectedDate);


                var parts = selectedDate.avadate.split('/');
                var formattedDate = parts.join('-');
                document.getElementById("inputDateUpdate").value = formattedDate;
            }
        });

        function initForm(form, data) {

            Object.getOwnPropertyNames(data).forEach(function (item) {
                var currentElem = form.elements[item.charAt(0).toUpperCase() + item.slice(1)];

                if (currentElem == null) { return; }
                form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);

            });
        }


        $("#updateDatos").click(function () {
            SaveChanges();
        });

        function SaveChanges() {
            Swal.fire({
                title: 'Do you want to save the changes?',
                confirmButtonText: 'Save',
                showCancelButton: true,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    updateDate();
                }
            })
        }

        function updateDate() {

            var arrData = {};
            var formelements = $("#updateDateForm .form-group");

            //getting the data from the form
            var formInputs = $("#updateDateForm").serializeArray();
            formInputs.forEach(function (item) {
                arrData[item.name] = item.value;
            });
            arrData.dateId = selectedDateId;

            if (formInputs.length === formelements.length && formInputs[0].value !== '') {
                if (formInputs[0].value != datesame) {


                    var parts = arrData.Avadate.split('-');
                    var formattedDate = parts.join('/');

                    arrData.Avadate = formattedDate;


                    proceedUpdateDATOS(arrData);
                    console.log("gi click lagi ko " + arrData);
                } else {
                    vol1();
                }

            } else {
                alertError();
            }
        }

        function proceedUpdateDATOS(arrData) {



            //AJAX UPDATE DEPARTMENT
            $.ajax
                ({
                    url: "../api/adminapi/updateDate",
                    type: "POST",
                    data:
                    {
                        updat: arrData,
                    },
                })
                .done(function () {
                    $("#updateDateForm")[0].reset();
                    $("#modalDateUpdate").modal("toggle");
                    displayDateData();
                    displaySavedProgress();
                });
        }

        $("tbody").delegate(".DateDelete", "click", function (e) {
            var i = e.target.closest("a").getAttribute("data-dateId");
            if (i != null) {
                //Insert code here for the delete
                selectedDateId = i;
                console.log(selectedDateId + "mao ni siya");
                DeleteConfirmation();
            }
        });

        function DeleteConfirmation() {
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
                    proceedDeleteDATOS();
                }
            })
        }


        function proceedDeleteDATOS() {
            console.log(selectedDateId + "proceed");
            //AJAX DELETE DEPARTMENT
            $.ajax
                ({
                    url: "../api/adminapi/deleteDate",
                    type: "POST",
                    data:

                    {
                        id: selectedDateId
                    },
                })
                .done(function () {
                    displayDateData();
                    alertDeleteInfo();
                    //getDates();


                });
        }
        //end of date function create update delete /////////////////////





        function getDates() {
            $.ajax("../api/adminapi/getDate")
                .done(function (result) {

                    document.querySelector("#catSelect").innerHTML = "";

                    var template = document.querySelector("template#DateOptionTemplate");
                    var parent = document.querySelectorAll("#catSelect");


                    for (i = 0; i < parent.length; i++) {
                        result.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            cloned.querySelector("option").value = item.dateId;
                            cloned.querySelector("option").innerText = item.avadate;

                            parent[i].prepend(cloned);
                        });
                    }

                });

        }


        /// function create time
        $("#createDateTime").click((e) => {

            console.log("yehey na click jyud ko");
            // console.log(equipname);

            var arrData = {}; //ayaw ni tan dug kani dre nga line
            var formelements = $("#createDateTimeForm .form-group");

            //getting the data from the form
            var formInputs = $("#createDateTimeForm").serializeArray();
            formInputs.forEach(function (item) {
                arrData[item.name] = item.value;
            });




            const convertTimeTo12HourFormat = time24 => new Date("2000-01-01 " + time24).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

            // Example usage
            const time24Hour =  arrData.Avatime;
            const time12Hour = convertTimeTo12HourFormat(time24Hour);
            //console.log(time12Hour); // Output: 1:05 PM

            arrData.Avatime = time12Hour;


            if (formInputs.length === formelements.length && formInputs[0].value !== '') {



                //AJAX ADD Equipment
                //  console.log(formInputs);
                $.ajax
                    ({
                        url: "../api/adminapi/AddDateTime",
                        type: "POST",
                        data:
                        {
                            adddatetime: arrData
                        },
                    })
                    .done(function () {

                        $("#createDateTimeForm")[0].reset();
                        $("#modalDateTimeCreate").modal("toggle");
                        getDate();
                        getDates();

                        displaySavedProgress();
                        displayDateTimeData();

                    });

            }
            else {
                alertError();
            }
        });


        function displayDateTimeData() {
            $('#DateTimeData').DataTable().destroy();
            if (!$.fn.DataTable.isDataTable('#DateTimeData')) {
                $('#DateTimeData').DataTable({
                    ajax: {
                        url: '../api/adminapi/getDateTime', // API endpoint to retrieve department
                        dataSrc: ''
                    },
                    columns:
                        [
                           
                            { data: 'avadate' },
                            { data: 'avatime' },
                            {
                                data: 'timeId',
                                render: function (data, type, row) {
                                    return btnAddDateTime(data);
                                }
                            },
                        ]
                });
            }
            getDate();
            //  getDates();
        }

        function btnAddDateTime(timeId) {
            return "<center><a class='btn btn-success DateTimeUpdate' data-timeId=" + timeId + "><i class='fa-solid fa-pen-to-square' style='color : #ffffff;'></i></a> | <a class='btn btn-danger DateTimeDelete' data-timeId=" + timeId + "><i class='fa-solid fa-trash' style='color : #ffffff;'></i></a></center>"
        }

        $("tbody").delegate(".DateTimeUpdate", "click", function (e) {
            console.log("I was clicked");
            var i = e.target.closest("a").getAttribute("data-timeId");
            if (i != null) {
                $("#createDateTimeForm")[0].reset();
                $("#modalDateTimeUpdate").modal("toggle");

                selectedDateTimeId = i;
                selectedDateTime = DateTimeList.find(element => element.timeId == i);

             //   console.log(selectedDateTime);

                oFormObject = document.forms["updateDateTimeForm"];
                initForm(oFormObject, selectedDateTime);

              
               
                const convertTimeTo24HourFormat = time12 => new Date("2000-01-01 " + time12).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });


                // Example usage
                const time12Hour = selectedDateTime.avatime;
                const time24Hour = convertTimeTo24HourFormat(time12Hour);
             //   console.log(time24Hour); // Output: 13:23


                document.getElementById("updatetime").value = time24Hour;















            }
        });


        function initForm(form, data) {

            Object.getOwnPropertyNames(data).forEach(function (item) {

                var currentElem = form.elements[item.charAt(0).toUpperCase() + item.slice(1)];

                if (currentElem == null) { return; }

                if (currentElem.tagName == "SELECT") {
                    var selectChildren = Array.from(currentElem.children);
                    var matchedOpt = selectChildren.find(opt => opt.value == selectedDateTime.dateId);
                    console.log(selectedDateTime.dateId);
                    if (matchedOpt) {
                        matchedOpt.selected = true;
                    }
                } else {
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }


            });


        }


        $("#updateDateTime").click(function () {
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
                    updateDateTimeHolder();
                }
            })
        }

        function updateDateTimeHolder() {
            var arrData = {};

            var formelements = $("#updateDateTimeForm .form-group");

            var formInputs = $("#updateDateTimeForm").serializeArray();
          //  console.log(formInputs);
            formInputs.forEach(function (item) {
                arrData[item.name] = item.value;
            });

            //attempts to give value to the data
            arrData.timeId = selectedDateTimeId;
          //  console.log(arrData);


             const convertTimeTo12HourFormat = time24 => new Date("2000-01-01 " + time24).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

            // Example usage
            const time24Hour =  arrData.Avatime;
            const time12Hour = convertTimeTo12HourFormat(time24Hour);
            //console.log(time12Hour); // Output: 1:05 PM

            arrData.Avatime = time12Hour;



            if (formInputs[0].value !== '') {

                $.ajax
                    ({
                        url: "../api/adminapi/updateDateTime",
                        type: "POST",
                        data:
                        {
                            updatime: arrData
                        },
                    })
                    .done(function () {
                        // document.querySelector(".parent").innerHTML ="";
                        $("#updateDateTimeForm")[0].reset();
                        $("#modalDateTimeUpdate").modal("toggle");
                      

                        getDates();
                        getDateTime();
                        displayDateTimeData();
                        displaySavedProgress();
                        

                    });

                    

            } else {
                alertError();
            }



        }


        $("tbody").delegate(".DateTimeDelete", "click", function (e) {
            var i = e.target.closest("a").getAttribute("data-timeId");
            if (i != null) {
                //Insert code here for the delete
                selectedDateTimeId = i;
                console.log(selectedDateTimeId + "mao ni siya");
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
            console.log(selectedDateTimeId + "proceed");
            //AJAX DELETE DEPARTMENT
            $.ajax
                ({
                    url: "../api/adminapi/deleteDateTime",
                    type: "POST",
                    data:

                    {
                        id: selectedDateTimeId
                    },
                })
                .done(function () {
                    displayDateTimeData();
                    alertDeleteInfo();
                    getDates();


                });
        }














        ///funtion start  time ccretae update delete

















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
