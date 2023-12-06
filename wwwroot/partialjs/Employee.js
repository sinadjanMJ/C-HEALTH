var selectedEmployee;
var selectedEmployeeId;
var EmployeeList = {};
var arr = {};
var gmailaddress;

$(document).ready(function () {


    getEmployee();
    displayEmployeeData();


    AddSelectDepartment();
    UpdateSelectDepartments();
    getUnits();
   


    AddSelectPrabens();
    address();

   
    new MultiSelectTag('physicians')  // id


    function getUnits() {
        $.ajax("../api/adminapi/getNR")
            .done(function (result) {


                var a = [];
                a = result.filter(function (item) {
                    return item.test === "WBC";
                });

                var b = [];
                b = result.filter(function (item) {
                    return item.test === "Neutrophils";
                });

                var c = [];
                c = result.filter(function (item) {
                    return item.test === "Lymphocyte";
                });

                var d = [];
                d = result.filter(function (item) {
                    return item.test === "Monocyte";
                });

                var e = [];
                e = result.filter(function (item) {
                    return item.test === "Eosinophil";
                });

                var f = [];
                f = result.filter(function (item) {
                    return item.test === "Basophil";
                });

                var g = [];
                g = result.filter(function (item) {
                    return item.test === "Hemoglobin";
                });

                var h = [];
                h = result.filter(function (item) {
                    return item.test === "Hematocrit";
                });

                var ii = [];
                ii = result.filter(function (item) {
                    return item.test === "RBC";
                });

                console.log(ii);

                var j = [];
                j = result.filter(function (item) {
                    return item.test === "MCV";
                });


                var k = [];
                k = result.filter(function (item) {
                    return item.test === "MCH";
                });


                var l = [];
                l = result.filter(function (item) {
                    return item.test === "MCHC";
                });

                var m = [];
                m = result.filter(function (item) {
                    return item.test === "RCDW";
                });


                var n = [];
                n = result.filter(function (item) {
                    return item.test === "Platelet Count";
                });

                var o = [];
                o = result.filter(function (item) {
                    return item.test === "MPV";
                });



                var template = document.querySelector("template#unitsOptionTemplate");


                var parent = document.querySelectorAll("#wbc");
                for (i = 0; i < parent.length; i++) {
                    a.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }



                var parent = document.querySelectorAll("#Neutrophils");
                for (i = 0; i < parent.length; i++) {
                    b.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }



                var parent = document.querySelectorAll("#Lymphocyte");
                for (i = 0; i < parent.length; i++) {
                    c.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }






                var parent = document.querySelectorAll("#Monocyte");
                for (i = 0; i < parent.length; i++) {
                    d.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }





                var parent = document.querySelectorAll("#Eosinophil");
                for (i = 0; i < parent.length; i++) {
                    e.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }




                var parent = document.querySelectorAll("#Basophil");
                for (i = 0; i < parent.length; i++) {
                    f.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }





                var parent = document.querySelectorAll("#Hemoglobin");
                for (i = 0; i < parent.length; i++) {
                    g.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }





                var parent = document.querySelectorAll("#Hematocrit");
                for (i = 0; i < parent.length; i++) {
                    h.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }





                var parent = document.querySelectorAll("#RBC");
                for (i = 0; i < parent.length; i++) {
                    ii.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }





                var parent = document.querySelectorAll("#MCV");
                for (i = 0; i < parent.length; i++) {
                    j.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }





                var parent = document.querySelectorAll("#MCH");
                for (i = 0; i < parent.length; i++) {
                    k.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }




                var parent = document.querySelectorAll("#MCHC");
                for (i = 0; i < parent.length; i++) {
                    l.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }



                var parent = document.querySelectorAll("#RCDW");
                for (i = 0; i < parent.length; i++) {
                    m.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }



                var parent = document.querySelectorAll("#PlateletCount");
                for (i = 0; i < parent.length; i++) {
                    n.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }



                var parent = document.querySelectorAll("#MPV");
                for (i = 0; i < parent.length; i++) {
                    o.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.unitId;
                        cloned.querySelector("option").innerText = item.unitname;

                        parent[i].prepend(cloned);
                    });
                }


            });

    }



    function AddSelectPrabens() {

        fetch("../../js/province.js")
            .then(response => response.json())
            .then(result => {



                var template = document.querySelector("template#prabensOptionTemplate");
                var parent = document.querySelectorAll("#prabens");


                for (i = 0; i < parent.length; i++) {
                    result.forEach(function (item) {
                        var cloned = template.content.cloneNode(true);
                        cloned.querySelector("option").value = item.code;
                        cloned.querySelector("option").innerText = item.name;

                        parent[i].prepend(cloned);
                    });
                }

            });
    }


    function address() {


        const munSelect = document.querySelector("#muni");
        const barSelect = document.querySelector("#barang");

        // Function to populate the result select with data
        function populateResultSelects(selectedValues) {




            fetch("../../js/baranggay.js")
                .then(response => response.json())
                .then(data => {




                    // Filter the data based on the selected category
                    const datos = data.filter(item => item.municipalityCode == selectedValues || item.cityCode == selectedValues);

                    // Clear the existing options in the result select
                    barSelect.innerHTML = "";



                    // Populate the result select with the filtered data
                    datos.forEach((item) => {
                        const option = document.createElement("option");
                        option.value = item.code;
                        option.innerText = item.name;
                        barSelect.appendChild(option);
                    });


                });
        }



        // Initial population of the result select based on the default selected value
        populateResultSelects(munSelect.value);

        // Event listener to update the result select when the category select changes
        munSelect.addEventListener("change", function () {
            const selectedValues = this.value;
            populateResultSelects(selectedValues);
        });


        const depSelect = document.querySelector("#prabens");
        const courseSelect = document.querySelector("#muni");

        // Function to populate the result select with data
        function populateResultSelect(selectedValue) {


            fetch("../../js/municipality.js")
                .then(response => response.json())
                .then(data => {


                    // Filter the data based on the selected category
                    const datos = data.filter(item => item.provinceCode == selectedValue);

                    // Clear the existing options in the result select
                    courseSelect.innerHTML = "";

                    // Populate the result select with the filtered data
                    datos.forEach((item) => {
                        const option = document.createElement("option");
                        option.value = item.code;
                        option.innerText = item.name;
                        courseSelect.appendChild(option);
                    });


                });
        }



        // Initial population of the result select based on the default selected value
        populateResultSelect(depSelect.value);

        // Event listener to update the result select when the category select changes
        depSelect.addEventListener("change", function () {
            const selectedValue = this.value;
            populateResultSelect(selectedValue);
        });

    }








    function AddSelectDepartment() {

        $.ajax("../api/adminapi/getDepartment")
            .done(function (result) {



                var template = document.querySelector("template#departmentOptionTemplate");
                var parent = document.querySelectorAll("#Department");


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

    function UpdateSelectDepartments() {

        $.ajax("../api/adminapi/getDepartment")
            .done(function (result) {



                var template = document.querySelector("template#departmentOptionTemplate");
                var parent = document.querySelectorAll("#DepartmentUpdate");


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








    ////


    /* this line represent for fetching data to select box and showing to other select equal to selected value*/

    ///

    const depSelect = document.querySelector("#Department");
    const courseSelect = document.querySelector("#Course");

    // Function to populate the result select with data
    function populateResultSelect(selectedValue) {


        $.ajax("../api/adminapi/getCourse")
            .done(function (data) {


                // Filter the data based on the selected category
                const datos = data.filter(item => item.departmentId == selectedValue);

                // Clear the existing options in the result select
                courseSelect.innerHTML = "";

                // Populate the result select with the filtered data
                datos.forEach((item) => {
                    const option = document.createElement("option");
                    option.value = item.courseStrandYearId;
                    option.innerText = item.courseStrandYearName;
                    courseSelect.appendChild(option);
                });


            });
    }

    // Initial population of the result select based on the default selected value
    populateResultSelect(depSelect.value);

    // Event listener to update the result select when the category select changes
    depSelect.addEventListener("change", function () {
        const selectedValue = this.value;
        populateResultSelect(selectedValue);
    });








































    function getEmployee() {
        $.ajax("../api/adminapi/getEmployeeJoin")
            .done(function (result) {
                EmployeeList = result;
                console.log(result);


                result.forEach(function (item) {
                    gmailaddress = item.gmailaddress;

                    arr = item;
                    //    console.log(arr.age);
                    //   console.log(arr.spiCode);

                });



                var dateRegex = /^\d{4}-\d{2}-\d{2}$/;

                if (dateRegex.test(arr.age)) {
                    var yearsDifference = new Date().getFullYear() - parseInt(arr.age.slice(0, 4));
                    console.log(yearsDifference);
                    return yearsDifference;
                } else {
                    return "Invalid date format. Please enter a date in the format YYYY-MM-DD.";
                }




                $.ajax
                    ({
                        url: "../api/adminapi/updateEmployee",
                        type: "POST",
                        data:
                        {
                            upEmp: arr,
                            age: arr.age,

                            fullname: ` ${arr.Firstname}  ${arr.Middlename}  ${arr.Lastname}`,

                            addrs: `Purok ${arr.AddressPurok}, ${arr.AddressBarangay}, ${arr.AddressMunicipality}, ${arr.AddressProvince}`

                        },
                    })
                    .done(function () {

                        // displayEmployeeData();

                    });


            });
    }


    //////calculate number of years 
    function calculateYearsDifference(userDateInput) {
        var dateRegex = /^\d{4}-\d{2}-\d{2}$/;

        if (dateRegex.test(userDateInput)) {
            var yearsDifference = new Date().getFullYear() - parseInt(userDateInput.slice(0, 4));
            console.log(yearsDifference);
            return yearsDifference;
        } else {
            return "Invalid date format. Please enter a date in the format YYYY-MM-DD.";
        }
    }





    $("#createEmployee").click((e) => {

        console.log("yehey na click jyud ko");
        // console.log(equipname);

        var arrData = {}; //ayaw ni tan dug kani dre nga line
        var formelements = $("#createEmployeeForm .form-group");



        //getting the data from the form
        var formInputs = $("#createEmployeeForm").serializeArray();
        formInputs.forEach(function (item) {
            arrData[item.name] = item.value;


        });









        //////// function random number
        var random8DigitNumber = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
        console.log(random8DigitNumber);


        // Example usage:
        var userDateInput = formInputs[3].value; // Replace with the user's input
        var result = calculateYearsDifference(userDateInput);
        console.log("mao nis siya ang result" + result); // This will either print the years difference or an error message




        if (formInputs.length === formelements.length && formInputs[0].value !== '') {
            // if (formInputs[0].value !== '' && formInputs[1].value !== '' && formInputs[2].value !== '' && formInputs[3].value !== '' && formInputs[4].value !== '' && formInputs[5].value !== '' && formInputs[6].value !== '') {

            if (formInputs[0].value != gmailaddress) {


                /// pagkuha sa data instead value  ang text kuhaon

                var prabens = $('#prabens option:selected').text();
                var muni = $('#muni option:selected').text();
                var barang = $('#barang option:selected').text();




                $.ajax
                    ({
                        url: "../api/adminapi/AddEmployee",
                        type: "POST",
                        data:
                        {
                            addEmployee: arrData,
                            randompass: random8DigitNumber,
                            age: result,
                            province: prabens,
                            municipal: muni,
                            baranggay: barang,

                            fullname: ` ${arrData.Firstname}  ${arrData.Middlename}  ${arrData.Lastname}`,


                            address: `Purok ${arrData.AddressPurok}, ${barang}, ${muni}, ${prabens}`



                        },
                    })
                    .done(function () {

                        $("#createEmployeeForm")[0].reset();
                        $("#modalEmployeeCreate").modal("toggle");

                        displaySavedProgress();
                        displayEmployeeData();


                    });
            } else {
                vol1();
            }


        }
        else {
            alertError();
        }
    });

     function displayEmployeeData() {
        $('#EmployeeData').DataTable().destroy();
        if (!$.fn.DataTable.isDataTable('#EmployeeData')) {
            $('#EmployeeData').DataTable({
                ajax: {
                    url: '../api/adminapi/getEmployeeJoin', // API endpoint to retrieve department
                    dataSrc: ''
                },
                columns:
                    [
                        { data: 'epiId' },
                        { data: 'fullname' },
                        { data: 'birthdate' },
                        { data: 'gender' },
                        { data: 'age' },
                        { data: 'address' },
                        { data: 'courseStrandYearName' },

                        {
                            data: 'epiId',
                            render: function (data, type, row) {
                                return btnAddEmployeeData(data);
                            }
                        },
                    ]
            });
        }
        getEmployee();
    }

    function btnAddEmployeeData(id) {
        return "<center><a style='color : #ffffff;' class='btn btn-warning EmployeeUpdate' data-epiId=" + id + "><i title='Update Employee Information' class='fa-solid fa-pen-to-square'></i> Update</a> <br><br> <a style='color : #ffffff;' class='btn btn-danger EmployeeDelete' data-epiId=" + id + "><i title='Delete Employee Information' class='fa-solid fa-trash' ></i>  Delete</a> <br> <br>  <a  style='color : #ffffff;'   class='btn btn-info EmployeeHIInfo' data-epiId=" + id + "> <i  class='fa fa-medkit'  title='Add Employee Health Information'></i> Health </a> <br><br> <a style='color : #ffffff;' class='btn btn-success EmployeeInfo' data-epiId=" + id + "><i title=' Employee Information' class='fa-solid fa-circle-info'></i>&emsp;Info&emsp;</a></center>"
    }


    
    $("tbody").delegate(".EmployeeInfo", "click", function (e) {
        var i = e.target.closest("a").getAttribute("data-epiId");
        console.log(i);

        if (i != null) {
            selectedEmployeeId = i;
            selectedEmployee = EmployeeList.find(element => element.epiId == i);
          
            $("#modalEmployeeInfo").modal("toggle");

            console.log(selectedEmployee);
            $(".cardInfo .info-Fullname").html('Fullname : ' + selectedEmployee.fullname);
            $(".cardInfo .info-Birthdate").html('Birthdate : ' + selectedEmployee.birthdate);
            $(".cardInfo .info-Gender").html('Gender : ' + selectedEmployee.gender);
            $(".cardInfo .info-Age").html('Age : ' + selectedEmployee.age);
            $(".cardInfo .info-Department").html('Department : ' + selectedEmployee.departmentName);
            $(".cardInfo .info-Course").html('Course : ' + selectedEmployee.courseStrandYearName);
            $(".cardInfo .info-EmailAdd").html('Email Address : ' + selectedEmployee.gmailaddress);
            $(".cardInfo .info-Address").html('Address : ' + selectedEmployee.address);


        }
    });



      $("tbody").delegate(".EmployeeUpdate", "click", function (e) {
        console.log("I was clicked");
        var i = e.target.closest("a").getAttribute("data-epiId");
        if (i != null) {
            $("#createEmployeeForm")[0].reset();
            $("#modalEmployeeUpdate").modal("toggle");

            selectedEmployeeId = i;
            selectedEmployee = EmployeeList.find(element => element.epiId == i);

            //var selectIdToSet = $("#Course");
            console.log(selectedEmployee);

            oFormObject = document.forms["updateEmployeeForm"];



            initForm(oFormObject, selectedEmployee);
            //initFormC(oFormObject, selectedEmployee, selectIdToSet);
            populateResultSelects(selectedEmployee.departmentId);

            console.log(selectedEmployee.gender);
            $("#gend").val(selectedEmployee.gender);
        }
    });


    
    const deSelct = document.querySelector("#DepartmentUpdate");
    const courseSelects = document.querySelector("#CourseUpdate");


    // Function to populate the result select with data
    function populateResultSelects(depSelects) {


        $.ajax("../api/adminapi/getCourse")
            .done(function (data) {


                // Filter the data based on the selected category
                const datos = data.filter(item => item.departmentId == depSelects);


                // Clear the existing options in the result select
                courseSelects.innerHTML = "";

                // Populate the result select with the filtered data
                datos.forEach((item) => {
                    const option = document.createElement("option");
                    option.value = item.courseStrandYearId;
                    option.innerText = item.courseStrandYearName;
                    courseSelects.appendChild(option);
                });


            });

    }


    // Initial population of the result select based on the default selected value
    populateResultSelects(deSelct.value);

    // Event listener to update the result select when the category select changes
    deSelct.addEventListener("change", function () {
        const depSelects = this.value;
        populateResultSelects(depSelects);
    });




      function initForm(form, data) {

        Object.getOwnPropertyNames(data).forEach(function (item) {

            var currentElem = form.elements[item.charAt(0).toUpperCase() + item.slice(1)];

            //  console.log(currentElem);

            if (currentElem == null) { return; }

            if (currentElem.tagName == "SELECT") {
                var selectChildren = Array.from(currentElem.children);
                var matchedOpt = selectChildren.find(opt => opt.value == selectedEmployee.departmentId);
                console.log("i selected" + selectedEmployee.departmentId);
                if (matchedOpt) {
                    matchedOpt.selected = true;
                }
            } else {
                form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
            }


            // Assuming currentElem is a reference to the DOM element

            if (currentElem.tagName == "SELECT") {
                // Check the ID of the SELECT element
                if (currentElem.id == "gender") {
                    // Handle the case where the current element is a SELECT with a specific ID
                    var selectChildren = Array.from(currentElem.children);
                    var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployee.gender.trim());
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


     $("#updateEmployee").click(function () {
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
                updateEmployeeHolder();
            }
        })
    }

    function updateEmployeeHolder() {

        var arrData = {};
        var formelements = $("#updateEmployeeForm .form-group");

        //getting the data from the form
        var formInputs = $("#updateEmployeeForm").serializeArray();
        formInputs.forEach(function (item) {
            arrData[item.name] = item.value;
        });
        arrData.EpiId = selectedEmployeeId;
        console.log("update", arrData.EpiId);

        



        //function of years
        var userDateInput = formInputs[3].value; // Replace with the user's input
        var result = calculateYearsDifference(userDateInput);

         
        if (formInputs.length === formelements.length && formInputs[0].value !== '') {
            if (formInputs[0].value != gmailaddress) {
                
                proceedUpdate(arrData, result);

            } else {
                vol1();
            }

        } else {
            alertError();
        }
    }
   
    

    
    function proceedUpdate(arrData, result) {

         arrData.Address =  `Purok ${arrData.AddressPurok}, ${arrData.AddressBarangay}, ${arrData.AddressMunicipality}, ${arrData.AddressProvince}`;
         arrData.Age = result;
         arrData.Fullname = ` ${arrData.Firstname}  ${arrData.Middlename}  ${arrData.Lastname}`;


        //AJAX UPDATE DEPARTMENT
        $.ajax
            ({
                url: "../api/adminapi/updateEmployee",
                type: "POST",
                data:
                {
                    upEmp: arrData,
                },
            })
            .done(function () {
                $("#updateEmployeeForm")[0].reset();
                $("#modalEmployeeUpdate").modal("toggle");
                displayEmployeeData();
                displaySavedProgress();
            });
    }




  
    $("tbody").delegate(".EmployeeDelete", "click", function (e) {
        var i = e.target.closest("a").getAttribute("data-epiId");
        if (i != null) {
            //Insert code here for the delete
            selectedEmployeeId = i;
            console.log(selectedEmployeeId + "mao ni siya");
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
        console.log(selectedEmployeeId + "proceed");
        //AJAX DELETE DEPARTMENT
        $.ajax
            ({
                url: "../api/adminapi/deleteEmployee",
                type: "POST",
                data:

                {
                    id: selectedEmployeeId
                },
            })
            .done(function () {
                displayEmployeeData();
                alertDeleteInfo();
            });
    }




    ///////////////////////////// end 

  
       $("tbody").delegate(".EmployeeHIInfo", "click", function (e) {
        console.log("I was clicked");
        var i = e.target.closest("a").getAttribute("data-epiId");
        if (i != null) {
            $("#addEmployeeHealthInfoForm")[0].reset();
            $("#modalEmployeeHealthInfo").modal("toggle");

            selectedEmployeeId = i;
        }
    });





     //create health
    $("#createEmployeeHealth").click((e) => {

        console.log("yehey na click jyud ko");
        //     console.log(catname);

        var arrData = {}; //ayaw ni tan dug kani dre nga line
        var formelements = $("#addEmployeeHealthInfoForm .form-group");

        //getting the data from the form
        var formInputs = $("#addEmployeeHealthInfoForm").serializeArray();
        formInputs.forEach(function (item) {
            arrData[item.name] = item.value;
            // console.log(arrData);
        });





        var now = new Date(), year = now.getFullYear(), month = now.getMonth() + 1, day = now.getDate(), hours = now.getHours(), minutes = now.getMinutes(), seconds = now.getSeconds();

        var formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        var formattedDate = `${year}-${month}-${day}`;

        var wbc = $('#wbc option:selected').text();
        var neutrophils = $('#Neutrophils option:selected').text();
        var lymphocyte = $('#Lymphocyte option:selected').text();
        var monocyte = $('#Monocyte option:selected').text();
        var eosinophil = $('#Eosinophil option:selected').text();
        var basophil = $('#Basophil option:selected').text();
        var hemoglobin = $('#Hemoglobin option:selected').text();
        var hematocrit = $('#Hematocrit option:selected').text();
        var rbc = $('#RBC option:selected').text();
        var mcv = $('#MCV option:selected').text();
        var mch = $('#MCH option:selected').text();
        var mchc = $('#MCHC option:selected').text();
        var rcdw = $('#RCDW option:selected').text();
        var plateletcount = $('#PlateletCount option:selected').text();
        var mpv = $('#MPV option:selected').text();


        arrData.Wbcunits = wbc;
        arrData.Neutrophilsunits = neutrophils;
        arrData.Lymphocyteunits = lymphocyte;
        arrData.Monocyteunits = monocyte;
        arrData.Eosinophilunits = eosinophil;
        arrData.Basophilunits = basophil;
        arrData.Hemoglobinunits = hemoglobin;
        arrData.Hematocritunits = hematocrit;
        arrData.Rbcunits = rbc;
        arrData.Mcvunits = mcv;
        arrData.Mchunits = mch;
        arrData.Mchcunits = mchc;
        arrData.Rcdwunits = rcdw;
        arrData.Plateletcountunits = plateletcount;
        arrData.Mpvunits = mpv;


        var dtr = $('#dtr').val();
        var ddt = $('#ddt').val();
        var phy = $('#physicians').val();

         let res = phy.join(', ');


    
       arrData.Cbcphysician = res;
      
 
     


        var dateTimeRequested = formatDateTime(dtr);
        var drawDateTime = formatDateTime(ddt);

        arrData.Cbcdatetimerequested = dateTimeRequested;
        arrData.Cbcdrawdatetime = drawDateTime;
        arrData.Datet = formattedDate;
        arrData.EpiId = selectedEmployeeId;


        function formatDateTime(dateTime) {
            return new Date(dateTime).toLocaleDateString('en-US', {
                year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'
            });
        }






        console.log(arrData);




    console.log(formInputs.length);
       console.log(formelements.length);

            if (formelements.length === 34) {



            //AJAX ADD DEPARTMENT
            $.ajax
            ({
            url: "../api/adminapi/AddEmployeeHealth",
            type: "POST",
            data:
            {
            shi: arrData,

            },
            })
            .done(function () {

            $("#addEmployeeHealthInfoForm")[0].reset();
            $("#modalEmployeeHealthInfo").modal("toggle");
            // getNR();
            displaySavedProgress();
            //  displayNRData();

            });


            }
            else {
            alertError();
            }


    });





































   

    /////////////
    ///populating baranggay
    function baranggay() {
        const baranggayInput = document.getElementById("Barangay");
        const suggestions = document.getElementById("suggestionsBar");

        const data = [];

        fetch("../../js/baranggay.js")
            .then(response => response.json())
            .then(data => {
                data = data;

                baranggayInput.addEventListener("input", function () {
                    const inputText = baranggayInput.value;
                    updateSuggestions(inputText, data);
                });

                document.addEventListener("click", function (event) {
                    if (!suggestions.contains(event.target)) {
                        suggestions.innerHTML = "";
                    }
                });
            });


        function updateSuggestions(inputText, data) {
            const filteredData = data.filter(function (item) {
                return item.name.toLowerCase().includes(inputText.toLowerCase());
            });

            renderSuggestions(filteredData);
        }

        function renderSuggestions(filteredData) {
            suggestions.innerHTML = "";

            filteredData.forEach(function (item) {
                const suggestionItem = document.createElement("li");
                suggestionItem.textContent = item.name;
                suggestionItem.addEventListener("click", function () {
                    baranggayInput.value = item.name;
                    suggestions.innerHTML = "";
                });
                suggestions.appendChild(suggestionItem);
            });

            if (filteredData.length > 0) {
                suggestions.style.display = "block";
            } else {
                suggestions.style.display = "none";
            }
        }
    }


    /////////////
    ///populating municipality
    function Municipality() {
        const municipalityInput = document.getElementById("Municipality");
        const suggestions = document.getElementById("suggestionsMuni");

        const data = [];

        fetch("../../js/municipality.js")
            .then(response => response.json())
            .then(data => {
                data = data;

                municipalityInput.addEventListener("input", function () {
                    const inputText = municipalityInput.value;
                    updateSuggestions(inputText, data);
                });

                document.addEventListener("click", function (event) {
                    if (!suggestions.contains(event.target)) {
                        suggestions.innerHTML = "";
                    }
                });
            });


        function updateSuggestions(inputText, data) {
            const filteredData = data.filter(function (item) {
                return item.name.toLowerCase().includes(inputText.toLowerCase());
            });

            renderSuggestions(filteredData);
        }

        function renderSuggestions(filteredData) {
            suggestions.innerHTML = "";

            filteredData.forEach(function (item) {
                const suggestionItem = document.createElement("li");
                suggestionItem.textContent = item.name;
                suggestionItem.addEventListener("click", function () {
                    municipalityInput.value = item.name;
                    suggestions.innerHTML = "";
                });
                suggestions.appendChild(suggestionItem);
            });

            if (filteredData.length > 0) {
                suggestions.style.display = "block";
            } else {
                suggestions.style.display = "none";
            }
        }
    }



    /////////////
    ///populating municipality
    function Province() {
        const provinceInput = document.getElementById("Province");
        const suggestions = document.getElementById("suggestionsProv");

        const data = [];

        fetch("../../js/province.js")
            .then(response => response.json())
            .then(data => {
                data = data;

                provinceInput.addEventListener("input", function () {
                    const inputText = provinceInput.value;
                    updateSuggestions(inputText, data);
                });

                document.addEventListener("click", function (event) {
                    if (!suggestions.contains(event.target)) {
                        suggestions.innerHTML = "";
                    }
                });
            });


        function updateSuggestions(inputText, data) {
            const filteredData = data.filter(function (item) {
                return item.name.toLowerCase().includes(inputText.toLowerCase());
            });

            renderSuggestions(filteredData);
        }

        function renderSuggestions(filteredData) {
            suggestions.innerHTML = "";

            filteredData.forEach(function (item) {
                const suggestionItem = document.createElement("li");
                suggestionItem.textContent = item.name;
                suggestionItem.addEventListener("click", function () {
                    provinceInput.value = item.name;
                    suggestions.innerHTML = "";
                });
                suggestions.appendChild(suggestionItem);
            });

            if (filteredData.length > 0) {
                suggestions.style.display = "block";
            } else {
                suggestions.style.display = "none";
            }
        }
    }///end point personal information

























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



});//ayaw ni hilabti yawaaa ka
