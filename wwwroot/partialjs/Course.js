var selectedCourse;
    var selectedCourseId;
    var CourseList = {};


    $(document).ready(function () {
     

     getCourse();
     getDepartment();
     displayCourseData();



    function getCourse() {
            $.ajax("../api/adminapi/getCourse")
                .done(function (result) {
                   CourseList = result;
                   console.log(result);
                    result.forEach(function (item) {
                  //   console.log(item);

                    });

                });
        }

    function getDepartment() {
            $.ajax("../api/adminapi/getDepartment")
                .done(function (result) {

                    document.querySelector("#catSelect").innerHTML = "";

                    var template = document.querySelector("template#DepartmentOptionTemplate");
                    var parent = document.querySelectorAll("#catSelect");


                    for (i = 0; i < parent.length; i++) {
                        result.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            cloned.querySelector("option").value = item.departmentId;
                            cloned.querySelector("option").innerText = item.departmentName;

                            parent[i].prepend(cloned);
                        });
                    }

                });

        }





        $("#createCourse").click((e) => {

            console.log("yehey na click jyud ko");
            // console.log(equipname);

            var arrData = {}; //ayaw ni tan dug kani dre nga line
            var formelements = $("#createCourseForm .form-group");

            //getting the data from the form
            var formInputs = $("#createCourseForm").serializeArray();
            formInputs.forEach(function (item) {
                arrData[item.name] = item.value;
            });

            if (formInputs.length === formelements.length && formInputs[0].value !== '') {



                //AJAX ADD Equipment
                console.log(formInputs);
                $.ajax
                    ({
                        url: "../api/adminapi/AddCourse",
                        type: "POST",
                        data:
                        {
                            addCor: arrData
                        },
                    })
                    .done(function () {

                        $("#createCourseForm")[0].reset();
                        $("#modalCourseCreate").modal("toggle");
                       
                       
                        getCourse();
                        displaySavedProgress();
                        displayCourseData();

                    });

            }
            else {
                alertError();
            }
        });



       function displayCourseData() {
            $('#CourseData').DataTable().destroy();
            if (!$.fn.DataTable.isDataTable('#CourseData')) {
                $('#CourseData').DataTable({
                    ajax: {
                        url: '../api/adminapi/getCourse', // API endpoint to retrieve department
                        dataSrc: ''
                    },
                    columns:
                        [
                            { data: 'courseStrandYearId' },
                            { data: 'departmentName' },
                            { data: 'courseStrandYearName' },
                            {
                                data: 'courseStrandYearId',
                                render: function (data, type, row) {
                                    return btnAddCourse(data);
                                }
                            },
                        ]
                });
            }
            getCourse();
           
        }

        function btnAddCourse(courseStrandYearId) {
            return "<center><a class='btn btn-success CourseUpdate' data-courseStrandYearId=" + courseStrandYearId + "><i class='fa-solid fa-pen-to-square' style='color : #ffffff;'></i></a> | <a class='btn btn-danger CourseDelete' data-courseStrandYearId=" + courseStrandYearId + "><i class='fa-solid fa-trash' style='color : #ffffff;'></i></a></center>"
        }

        $("tbody").delegate(".CourseUpdate", "click", function (e) {
            console.log("I was clicked");
            var i = e.target.closest("a").getAttribute("data-courseStrandYearId");
            if (i != null) {
                $("#createCourseForm")[0].reset();
                $("#modalCourseUpdate").modal("toggle");

                selectedCourseId = i;
                selectedCourse = CourseList.find(element => element.courseStrandYearId == i);

                console.log(selectedCourse);

                oFormObject = document.forms["updateCourseForm"];
                initForm(oFormObject, selectedCourse);
            }
        });


        function initForm(form, data) {

            Object.getOwnPropertyNames(data).forEach(function (item) {

                var currentElem = form.elements[item.charAt(0).toUpperCase() + item.slice(1)];

                if (currentElem == null) { return; }

                if (currentElem.tagName == "SELECT") {
                    var selectChildren = Array.from(currentElem.children);
                    var matchedOpt = selectChildren.find(opt => opt.value == selectedCourse.departmentId);
                    console.log(selectedCourse.courseStrandYearId);
                    if (matchedOpt) {
                        matchedOpt.selected = true;
                    }
                } else {
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }


            });


        }


        $("#updateCourse").click(function () {
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

            var formelements = $("#updateCourseForm .form-group");

            var formInputs = $("#updateCourseForm").serializeArray();
            console.log(formInputs);
            formInputs.forEach(function (item) {
                arrData[item.name] = item.value;
            });

            //attempts to give value to the data
            arrData.courseStrandYearId = selectedCourseId;
            console.log(arrData);



            if (formInputs[0].value !== '') {

                $.ajax
                    ({
                        url: "../api/adminapi/updateCourse",
                        type: "POST",
                        data:
                        {
                            upCor: arrData
                        },
                    })
                    .done(function () {
                        // document.querySelector(".parent").innerHTML ="";
                     
                         $("#updateCourseForm")[0].reset();
                         $("#modalCourseUpdate").modal("toggle");


                        displayCourseData();
                        displaySavedProgress();
                        getCourse();

                    });


            } else {
                alertError();
            }



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