var selectedMedicine;
    var selectedMedicineId;
    var MedicineList = {};
    var medicname;
    var medicunits;
    var stats = [];
    var TotalArr = [];
    var arr = {};



    $(document).ready(function () {

        populateIndexLowStock();
        


        getMedicine();
        getCategory();




        

        function populateIndexLowStock() {

            $.ajax("../api/adminapi/getAllMedicine")
                .done(function (result) {

                    document.querySelector(".parents").innerHTML = "";
                    //list of active medicine
                    var LowStockMedicines = [];

                   /* InactiveMedicines = result.filter(function (item) {
                        return item.status === "Inactive";
                    });*/

                    var formattedDate = new Date().toISOString().slice(0, 10);

                     expiremedicine = result.filter(function (item) {
                        return item.expiryDate <= formattedDate;
                    });

                    LowStockMedicines = result.filter(function (item) {
                        return item.stock < 10 && item.expiryDate >= formattedDate;
                    });

                     $("#lowstock").html(LowStockMedicines.length );




                    InMedicineList = [];
                    InMedicineList = LowStockMedicines;
                    LowStockMedicines.forEach(function (item) {

                        var template = document.querySelector("template#cards-container");
                        var parent = document.querySelector(".parents");
                        var cloned = template.content.cloneNode(true);



                        cloned.querySelector(".card .card-title").innerHTML = item.medicineName;
                        cloned.querySelector(".card .card-subtitle").innerHTML = "Category Name : " + item.categoryName;
                        cloned.querySelector(".card .card-units").innerHTML = "Units: " + item.units;
                        cloned.querySelector(".card .card-stock").innerHTML = "Stock : " + item.stock;
                        cloned.querySelector(".card .card-status").innerHTML = "Status : " + item.status;
                        cloned.querySelector(".card .card-datepurchased").innerHTML = "Datepurchased : " + item.purchaseDate;
                        cloned.querySelector(".card .card-expirydate").innerHTML = "ExpiryDate : " + item.expiryDate;
                        // cloned.querySelector(".card .card-description").innerHTML = "Description : " + item.description;



                        cloned.querySelector(".updateMeds").setAttribute("data-medicineId", item.medicineId);
                        cloned.querySelector(".updateMeds").setAttribute("data-medicineName", item.medicineName);

                        cloned.querySelector(".deleteMeds").setAttribute("data-medicineId", item.medicineId);
                        cloned.querySelector(".infoMeds").setAttribute("data-medicineId", item.medicineId);
                        cloned.querySelector(".addStocks").setAttribute("data-medicineId", item.medicineId);
                        cloned.querySelector(".stockHistorys").setAttribute("data-medicineId", item.medicineId);
                        // cloned.querySelector(".addCart").setAttribute("data-medicineId", item.medicineId);

                        parent.prepend(cloned);
                    });
                });

          //  getMedicine();
        }


        function getMedicine() {
            $.ajax("../api/adminapi/getAllMedicine")
                .done(function (result) {

                    //total medicine
                    TotalArr = result;
                    $("#total").html( TotalArr.length);

                    //list of active medicine
                    var activeMedicines = [];
                    activeMedicines = result.filter(function (item) {
                        return item.status === "Active";
                    });
                    $("#active").html( activeMedicines.length);

                    //list of expired
                    var formattedDate = new Date().toISOString().slice(0, 10);
                    console.log("date only" + formattedDate);

                    var expiremedicine = {};

                    expiremedicine = result.filter(function (item) {
                        return item.expiryDate <= formattedDate;
                    });


                    var statusInactive = expiremedicine.length > 0 ? "Inactive" : "Active";

                    console.log(statusInactive);

                    expiremedicine.forEach(function (item) {
                        arr = item;
                    });
                    console.log(arr);

                    var conversion =
                    {
                        MedicineId: arr.medicineId,
                        Category: arr.categoryId,
                        MedicineName: arr.medicineName,
                        MedicineStock: arr.stock,
                        Units: arr.units,
                        Status: arr.status,
                        Datepurchased: arr.purchaseDate,
                        Expirydate: arr.expiryDate,
                        Description: arr.description

                    }

                    
                    $.ajax
                        ({
                            url: "../api/adminapi/UpdateExpireMed",
                            type: "POST",
                            data:
                            {
                                upmedic: conversion,
                                stats: statusInactive
                            },
                        })
                        .done(function () {
                            //populateIndex();
                        });


                    $("#expired").html(expiremedicine.length);
                    //  $("#expiredna").html("Expired Medicines: (" + expiremedicine.length + ")");



                    MedicineList = result;
                    result.forEach(function (item) {


                        medicname = item.medicineName;
                        medicUnits = item.units;



                    });

                });
        }

        function getCategory() {
            $.ajax("../api/adminapi/getAllCategories")
                .done(function (result) {
                    var template = document.querySelector("template#categoryOptionTemplate");

                    var parent = document.querySelectorAll("#catSelect");

                    for (i = 0; i < parent.length; i++) {
                        result.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            cloned.querySelector("option").value = item.id;
                            cloned.querySelector("option").innerText = item.categoryname;

                            parent[i].prepend(cloned);
                        });
                    }
                });
        }


        $("#createMedicine").click((e) => {

            console.log("yehey na click jyud ko");
            // console.log(equipname);

            var arrData = {}; //ayaw ni tan dug kani dre nga line
            var formelements = $("#createMedicineForm .form-group");

            //getting the data from the form
            var formInputs = $("#createMedicineForm").serializeArray();
            formInputs.forEach(function (item) {
                arrData[item.name] = item.value;
            });

            //if (formInputs.length === formelements.length && formInputs[0].value !== '') 
            if (formInputs[0].value !== '' && formInputs[1].value !== '' && formInputs[2].value !== '' && formInputs[3].value !== '' && formInputs[4].value !== '' && formInputs[5].value !== '' && formInputs[6].value !== '') {

                if (formInputs[0].value != medicname) {
                    //AJAX ADD Equipment
                    console.log(formInputs);
                    $.ajax
                        ({
                            url: "../api/adminapi/AddMedicine",
                            type: "POST",
                            data:
                            {
                                addmedic: arrData
                            },
                        })
                        .done(function () {

                            $("#createMedicineForm")[0].reset();
                            $("#modalMedicineCreate").modal("toggle");
                            getMedicine();
                            displaySavedProgress();
                            populateIndex();
                            populateIndexLowStock();

                        });
                } else {
                    vol1();
                }


            }
            else {
                alertError();
            }
        });

        $(".updateMeds").click(function () {
            $("#modalMedicineUpdate").modal("toggle");
        });

        $(".parents").delegate(".updateMeds", "click", function (e) {
            var i = e.target.closest("a").getAttribute("data-medicineId");
            console.log("The value is " + i);

            if (i != null) {
                selectedMedicineId = i;
                selectedMedicine = MedicineList.find(element => element.medicineId == i);

                oFormObject = document.forms["updateMedicineForm"];
                $("#modalMedicineUpdate").modal("toggle");
                initForm(oFormObject, selectedMedicine);
                console.log(MedicineList);

                console.log(selectedMedicine.description);
                $("textarea").html(selectedMedicine.description);
            }
        });



        function initForm(form, data) {

            Object.getOwnPropertyNames(data).forEach(function (item) {

                var currentElem = form.elements[item.charAt(0).toUpperCase() + item.slice(1)];

                if (currentElem == null) { return; }

                if (currentElem.tagName == "SELECT") {
                    var selectChildren = Array.from(currentElem.children);
                    var matchedOpt = selectChildren.find(opt => opt.value == selectedMedicine.categoryId);
                    if (matchedOpt) {
                        matchedOpt.selected = true;
                    }
                } else {
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }

               
            });


        }

        $("#updateMedicinebtn").click((e) => {
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
                    updateMedicineHolder();
                    setTimeout(function () { location.reload(); }, 100);
                }
            })
        }


        function updateMedicineHolder() {
            var arrData = {};

            var formelements = $("#updateMedicineForm .form-group");

            var formInputs = $("#updateMedicineForm").serializeArray();
            console.log(formInputs);
            formInputs.forEach(function (item) {
                arrData[item.name] = item.value;
            });

            //attempts to give value to the data
            arrData.medicineId = selectedMedicineId;
            console.log(arrData);


              var formattedDate = new Date().toISOString().slice(0, 10);

            if(arrData.ExpiryDate >= formattedDate){
             arrData.Status = "Active";
            }else{
              arrData.Status = "Expired";
            }


            var updatemed =
            {
                MedicineId: arrData.medicineId,
                Category: arrData.CategoryName,
                MedicineName: arrData.MedicineName,
                MedicineStock: arrData.Stock,
                Units: arrData.Units,
                Status: arrData.Status,
                Datepurchased: arrData.PurchaseDate,
                Expirydate: arrData.ExpiryDate,
                Description: arrData.Description

            }

            if (formInputs[0].value !== '') {

                $.ajax
                    ({
                        url: "../api/adminapi/updateMedicine",
                        type: "POST",
                        data:
                        {
                            upmedic: updatemed
                        },
                    })
                    .done(function () {
                        // document.querySelector(".parent").innerHTML ="";
                        $("#modalMedicineUpdate").modal("toggle");
                        $("#updateMedicineForm")[0].reset();
                        populateIndex();
                        getMedicine();
                    });


            } else {
                alertError();
            }


        }




        $("#modalMedicineUpdateClose").click(function () {
            $("#updateMedicineForm")[0].reset();
        });


        $(" .parents").delegate(".deleteMeds", "click", function (e) {
            var i = e.target.closest("a").getAttribute("data-medicineId");
            console.log("salamat sa pag click");

            if (i != null) {
                selectedMedicineId = i;
                console.log(selectedMedicineId + "mao ni siya");
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
            console.log(selectedMedicineId + "proceed");
            //AJAX DELETE DEPARTMENT
            $.ajax
                ({
                    url: "../api/adminapi/deleteMedicine",
                    type: "POST",
                    data:
                    {
                        id: selectedMedicineId
                    },
                })
                .done(function () {
                    populateIndex();
                    populateIndexLowStock();
                    alertDeleteInfo();
                });
        }

        $(".parents").delegate(".addStocks", "click", function (e) {
            var i = e.target.closest("a").getAttribute("data-medicineId");
            console.log(i);

            var cStock;
            var inputStock;

            if (i != null) {
                selectedMedicineId = i;
                selectedMedicine = MedicineList.find(element => element.medicineId == i);
                console.log("selected medicine" + selectedMedicine);
                $("#modalMedicineStock").modal("toggle");

                $(".cardInfo .info-title").html('Medicine Name: ' + selectedMedicine.medicineName);
                $(".cardInfo .info-Stocks").html('Current Stocks : ' + selectedMedicine.stock);


                //GET THE DATA FROM MODAL
                $("#addMedicineStockBtn").click((e) => {

                    var arrData = {};

                    var formelements = $("#addMedicineStockForm .form-group");
                    //getting the data from the form
                    var formInputs = $("#addMedicineStockForm").serializeArray();
                    formInputs.forEach(function (item) {
                        arrData[item.name] = item.value;
                    });

                    var conversion =
                    {
                        MedicineId: selectedMedicine.medicineId,
                        Category: selectedMedicine.categoryId,
                        MedicineName: selectedMedicine.medicineName,
                        MedicineStock: selectedMedicine.stock,
                        Units: selectedMedicine.units,
                        Status: selectedMedicine.status,
                        Datepurchased: selectedMedicine.purchaseDate,
                        Expirydate: selectedMedicine.expiryDate

                    }
                    console.log("mao nis" + conversion);

                    if (formInputs.length === formelements.length && formInputs[0].value !== '') {
                        cStock = selectedMedicine.stock;




                        inputtedStock = $("#inputStock").val();

                        if (inputtedStock <= 0) {

                            console.log("Error try adding positive integers");
                        }
                        else {



                            var date = new Date(Date.now());
                            var date1 = date.toLocaleString();
                            //AJAX ADD STOCK
                            $.ajax
                                ({
                                    url: "../api/adminapi/addStockMedicine",
                                    type: "POST",
                                    data:
                                    {
                                        selmed: conversion,
                                        iStock: inputtedStock,
                                        date: date1.toString()
                                    },
                                })
                                .done(function () {
                                    // document.querySelector(".parent").innerHTML ="";
                                    populateIndex();
                                    populateIndexLowStock();
                                   
                                    getMedicine();
                              
                                });

                            $("#modalMedicineStock").modal("toggle");
                            $("#modalMedicineStock")[0].reset(); //para dili oo duplicate inig pa display
                           
                        }
                    } else {
                        alertError();
                    }
                });

            }
        });


        //PRODUCT INFORMATION MODAL
        $(" .parents").delegate(" .infoMeds", "click", function (e) {
            var i = e.target.closest("a").getAttribute("data-medicineId");
            console.log(i);

            if (i != null) {
                selectedMedicineId = i;
                selectedMedicine = MedicineList.find(element => element.medicineId == i);
                $("#modalMedicineInfo").modal("toggle");

                $(".cardInfo .info-title").html(selectedMedicine.medicineName);
                $(".cardInfo .info-Description").html('Medical Description : ' + selectedMedicine.description);

            }
        });


        //history display data

        $(".parents").delegate(".stockHistorys", "click", function (e) {
            var i = e.target.closest("a").getAttribute("data-medicineId");

            if (i != null) {
                selectedMedicineId = i;
                selectedMedicine = MedicineList.find(element => element.medicineId == i);
                $("#modalStockHistory").modal("toggle");

                $(".cardInfo .info-title").html(" " + selectedMedicine.medicineName);
                $(".cardInfo .info-Stocks").html("Stocks: " + selectedMedicine.stock);

                $.ajax("../api/adminapi/viewStockHistory")
                    .done(function (result) {
                        $.ajax(
                            {
                                url: "../api/adminapi/viewStockHistory",
                                type: "POST",
                                data:
                                {
                                    id: selectedMedicineId
                                },
                            })
                            .done(function (result) {
                                if (result.length == 0) {
                                    var template = document.querySelector("template#card-viewstock");
                                    var parent = document.querySelector(".parentHistory");
                                    var cloned = template.content.cloneNode(true);

                                    cloned.querySelector(".stockHis").innerHTML = "NO ADDED STOCK FOUND <br>";

                                    parent.prepend(cloned);
                                }
                                else {
                                    result.forEach(function (item) {
                                        var template = document.querySelector("template#card-viewstock");
                                        var parent = document.querySelector(".parentHistory")
                                        var cloned = template.content.cloneNode(true);

                                        cloned.querySelector(".stockHis").innerHTML = "Added" + "&nbsp;&nbsp;" + item.addedStock + "&nbsp;&nbsp; stock" + " on " + item.date + "<hr>";

                                        parent.prepend(cloned);
                                    });
                                }
                            });

                    });
            }
        });

        //close history
        $("#modalStockHistoryClose").click(function () {
            $(".stockContent").find("div.stockHis").text("");
        });



        $('#searchText').on("input", function () {
            var searchedItem = $(this).val();

            //console.log(searchedItem);

            var search = InMedicineList.filter(element => element.medicineName.toLowerCase().includes(searchedItem.toLowerCase()) || element.medicineName.toUpperCase().includes(searchedItem.toUpperCase()));
            //console.log(sear);

            document.querySelector(".parents").innerHTML = "";
            search.forEach(function (item) {
                var template = document.querySelector("template#cards-container");
                var parent = document.querySelector(".parents");
                var cloned = template.content.cloneNode(true);

                cloned.querySelector(".card .card-title").innerHTML = item.medicineName;
                cloned.querySelector(".card .card-subtitle").innerHTML = "Category Name : " + item.categoryName;
                cloned.querySelector(".card .card-units").innerHTML = "Units: " + item.units;
                cloned.querySelector(".card .card-stock").innerHTML = "Stock : " + item.stock;
                cloned.querySelector(".card .card-status").innerHTML = "Status : " + item.status;
                cloned.querySelector(".card .card-datepurchased").innerHTML = "Datepurchased : " + item.purchaseDate;
                cloned.querySelector(".card .card-expirydate").innerHTML = "ExpiryDate : " + item.expiryDate;
                // cloned.querySelector(".card .card-description").innerHTML = "Description : " + item.description;



                cloned.querySelector(".updateMeds").setAttribute("data-medicineId", item.medicineId);
                cloned.querySelector(".updateMeds").setAttribute("data-medicineName", item.medicineName);

                cloned.querySelector(".deleteMeds").setAttribute("data-medicineId", item.medicineId);
                cloned.querySelector(".infoMeds").setAttribute("data-medicineId", item.medicineId);
                cloned.querySelector(".addStocks").setAttribute("data-medicineId", item.medicineId);
                cloned.querySelector(".stockHistorys").setAttribute("data-medicineId", item.medicineId);


                parent.prepend(cloned);
            });

        });


      











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




    });// ayaw ni hilabte mga mother fucker