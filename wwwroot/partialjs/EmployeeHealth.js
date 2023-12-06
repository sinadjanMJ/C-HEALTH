var selectedEmployeeHI;
    var selectedEmployeeHIId;
    var EmployeeHIList = {};
    var arr = {};
    var disdate = {};
    var dateClick;
    var dateComp = {};


    $(document).ready(function () {

        populateIndex();
        getUnits();

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
                            //  cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }



                    var parent = document.querySelectorAll("#neutrophils");
                    for (i = 0; i < parent.length; i++) {
                        b.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            //    cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }



                    var parent = document.querySelectorAll("#lymphocyte");
                    for (i = 0; i < parent.length; i++) {
                        c.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            //  cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }






                    var parent = document.querySelectorAll("#monocyte");
                    for (i = 0; i < parent.length; i++) {
                        d.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            //     cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }





                    var parent = document.querySelectorAll("#eosinophil");
                    for (i = 0; i < parent.length; i++) {
                        e.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            //     cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }




                    var parent = document.querySelectorAll("#basophil");
                    for (i = 0; i < parent.length; i++) {
                        f.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            //   cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }





                    var parent = document.querySelectorAll("#hemoglobin");
                    for (i = 0; i < parent.length; i++) {
                        g.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            //   cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }





                    var parent = document.querySelectorAll("#hematocrit");
                    for (i = 0; i < parent.length; i++) {
                        h.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            //    cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }





                    var parent = document.querySelectorAll("#rbc");
                    for (i = 0; i < parent.length; i++) {
                        ii.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            //   cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }





                    var parent = document.querySelectorAll("#mcv");
                    for (i = 0; i < parent.length; i++) {
                        j.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            //     cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }





                    var parent = document.querySelectorAll("#mch");
                    for (i = 0; i < parent.length; i++) {
                        k.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            //   cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }




                    var parent = document.querySelectorAll("#mchc");
                    for (i = 0; i < parent.length; i++) {
                        l.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            //    cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }



                    var parent = document.querySelectorAll("#rcdw");
                    for (i = 0; i < parent.length; i++) {
                        m.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            //    cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }



                    var parent = document.querySelectorAll("#pl");
                    for (i = 0; i < parent.length; i++) {
                        n.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            //   cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }



                    var parent = document.querySelectorAll("#mpv");
                    for (i = 0; i < parent.length; i++) {
                        o.forEach(function (item) {
                            var cloned = template.content.cloneNode(true);
                            //    cloned.querySelector("option").value = item.unitId;
                            cloned.querySelector("option").innerText = item.unitname;

                            parent[i].prepend(cloned);
                        });
                    }


                });

        }



        function populateIndex() {

            $.ajax("../api/adminapi/getEmployeeHI")
                .done(function (data) {

                    dateComp = data;
                    EmployeeHIList = data;

                    document.querySelector(".parent").innerHTML = "";


                    // Remove duplicates based on 'datet'
                    let uniqueData = [];
                    let seenDates = new Set();

                    data.forEach(entry => {
                        if (!seenDates.has(entry.datet)) {
                            seenDates.add(entry.datet);
                            uniqueData.push(entry);
                        }
                    });

                    // Display unique data
                    //   console.log(uniqueData);

                    disdate = uniqueData;



                    uniqueData.forEach(function (item) {

                        var template = document.querySelector("template#card-container");
                        var parent = document.querySelector(".parent");
                        var cloned = template.content.cloneNode(true);



                        cloned.querySelector(".card .card-title").innerHTML = item.datet;


                        cloned.querySelector(".datecard").setAttribute("data-datet", item.datet);

                        parent.prepend(cloned);
                    });
                });


        }



        $('#AsearchText').on("input", function () {
            var searchedItem = $(this).val();

            //console.log(searchedItem);

            var search = disdate.filter(element => element.datet.toLowerCase().includes(searchedItem.toLowerCase()) || element.datet.toUpperCase().includes(searchedItem.toUpperCase()));
            //console.log(sear);

            document.querySelector(".parent").innerHTML = "";

            search.forEach(function (item) {
                var template = document.querySelector("template#card-container");
                var parent = document.querySelector(".parent");
                var cloned = template.content.cloneNode(true);

                cloned.querySelector(".card .card-title").innerHTML = item.datet;


                cloned.querySelector(".datecard").setAttribute("data-datet", item.datet);


                parent.prepend(cloned);
            });


        });














        $(".parent").delegate(".datecard", "click", function (e) {

            // console.log("na click najyud");
            var i = e.target.closest("div").getAttribute("data-datet");

            console.log("salamat sa pag click", i);

            if (i != null) {
                dateClick = i;
                //    console.log(dateClick + "mao ni siya");


                //filtere data that have th same value on selected date

                var filteredData = dateComp.filter(function (entry) {
                    return entry.datet === dateClick;
                });

                   console.log(filteredData);

                //para dili magka duplicate ang mga value
                table.clear().draw();


                populateTable(filteredData);

            }

        });



        // DataTable initialization
        var table = $('#EmployeeHealthInfoData').DataTable({
            columns: [
                { data: 'ephiId' },
                { data: 'fullname' },
                { data: 'birthdate' },
                { data: 'gender' },
                { data: 'age' },
                { data: 'departmentName' },
                { data: 'courseStrandYearName' },

                {
                    data: 'ephiId',
                    render: function (data, type, row) {
                        return btnAddEmployeeHealthData(data);
                    }
                },
                // Add other columns based on your data fields
            ]
        });



        function btnAddEmployeeHealthData(ephiId) {
            return "<center><a style='color : #ffffff;' class='btn btn-warning EmployeeHIUpdate' data-ephiId=" + ephiId + "><i title='Update Employee Information' class='fa-solid fa-pen-to-square'></i> Update</a> <br><br> <a style='color : #ffffff;' class='btn btn-danger EmployeeHIDelete' data-ephiId=" + ephiId + "><i title='Delete Employee Information' class='fa-solid fa-trash' ></i>&nbsp;&nbsp;&nbsp;Delete</a> <br><br> <a style='color : #ffffff;' class='btn btn-info EmployeeHIInfo' data-ephiId=" + ephiId + "><i title='View Employee Information' class='fa-solid fa-circle-info' ></i>&nbsp;View Info</a> </center>"
        }



        // Function to populate the table with data
        function populateTable(data) {

            console.log("data",data)
            $.each(data, function (index, item) {
                table.row.add(item).draw(false);
            });
        }



         $("tbody").delegate(".EmployeeHIInfo", "click", function (e) {
            var i = e.target.closest("a").getAttribute("data-ephiId");
            console.log("salamat sa pag click");

            if (i != null) {
                selectedEmployeeHIId = i;
                selectedEmployeeHI = EmployeeHIList.find(element => element.ephiId == i);
               
               console.log("gawas inatay")
                $("#modalEmployeeHealthInfo").modal("toggle");

                

                //    console.log(selectedStudent);
                $(".cardInfo .info-Name").html('Name &emsp;&emsp;&emsp;: &emsp;' + selectedEmployeeHI.fullname + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Date Time Requested : &emsp;' + selectedEmployeeHI.cbcdatetimerequested);
                $(".cardInfo .info-AgeGender").html('Age/Gender : &emsp;' + selectedEmployeeHI.age + '&nbsp;Year / ' + selectedEmployeeHI.gender + '&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Draw Date & Time : &emsp;' + selectedEmployeeHI.cbcdrawdatetime);
                $(".cardInfo .info-Birthdate").html('Birthdate &emsp;&nbsp;&nbsp;: &emsp;' + selectedEmployeeHI.birthdate);
                $(".cardInfo .info-HN").html('Hospital No. &nbsp;: &emsp;' + selectedEmployeeHI.hospitalnumber);
                $(".cardInfo .info-SPID").html('Specimen ID : &emsp;' + selectedEmployeeHI.ephiId);
                $(".cardInfo .info-Physician").html('Physician &emsp;&nbsp;&nbsp;: &emsp;' + selectedEmployeeHI.cbcphysician);

                $(".cardInfo .info-wbc").html('White Blood Cells &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.wbc + '&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.wbcunits);
                $(".cardInfo .info-neutrophils").html('Neutrophils &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.neutrophils + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.neutrophilsunits);
                $(".cardInfo .info-lymphocyte").html('Lymphocyte &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;' + selectedEmployeeHI.lymphocyte + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.lymphocyteunits);
                $(".cardInfo .info-monocyte").html('Monocyte &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;' + selectedEmployeeHI.monocyte + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.monocyteunits);
                $(".cardInfo .info-eosinophil").html('Eosinophil &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;' + selectedEmployeeHI.eosinophil + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.eosinophilunits);
                $(".cardInfo .info-basophil").html('Basophil &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;' + selectedEmployeeHI.basophil + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.basophilunits);
                $(".cardInfo .info-hemoglobin").html('Hemoglobin &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;' + selectedEmployeeHI.hemoglobin + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.hemoglobinunits);
                $(".cardInfo .info-hematocrit").html('Hematocrit &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;' + selectedEmployeeHI.hematocrit + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.hematocritunits);
                $(".cardInfo .info-rbc").html('Red Blood Cells &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;' + selectedEmployeeHI.rbc + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.rbcunits);
                $(".cardInfo .info-mcv").html('Mean Corpuscular Volume &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;' + selectedEmployeeHI.mcv + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.mcvunits);
                $(".cardInfo .info-mch").html('Mean Corpuscular Hemoglobin &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.mch + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.mchunits);
                $(".cardInfo .info-mchc").html('Mean Corpuscular Hemoglobin Concentration&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.mchc + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.mchcunits);
                $(".cardInfo .info-rcdw").html('Red Cell Distribution Width &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;' + selectedEmployeeHI.rcdw + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.rcdwunits);
                $(".cardInfo .info-plateletcount").html('Platelet Count &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;' + selectedEmployeeHI.plateletcount + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.plateletcountunits);
                $(".cardInfo .info-mpv").html('MPV &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;' + selectedEmployeeHI.mpv + '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + selectedEmployeeHI.mpvunits);


            }
        });



        
        $("tbody").delegate(".EmployeeHIUpdate", "click", function (e) {

            var i = e.target.closest("a").getAttribute("data-ephiId");
            console.log("pilay value nimo giatay", i);
            if (i != null) {

                $("#modalEmployeeHealthUpdate").modal("toggle");

                selectedEmployeeHIId = i;

                console.log("disdate pakita kurimaw", disdate);

                selectedEmployeeHI = dateComp.find(element => element.ephiId == i);

                //var selectIdToSet = $("#Course");
                console.log('before ang selectedStuudentHI', selectedEmployeeHI);



                oFormObject = document.forms["EmployeeHealthUpdateForm"];

                initForm(oFormObject, selectedEmployeeHI);

                var databaseDate = selectedEmployeeHI.cbcdatetimerequested;
                var dateObject = new Date(databaseDate);
                var formattedDate = `${dateObject.getFullYear()}-${('0' + (dateObject.getMonth() + 1)).slice(-2)}-${('0' + dateObject.getDate()).slice(-2)}T${('0' + dateObject.getHours()).slice(-2)}:${('0' + dateObject.getMinutes()).slice(-2)}`;

                document.getElementById("dtr").value = formattedDate;


                var databaseDate = selectedEmployeeHI.cbcdrawdatetime;
                var dateObject = new Date(databaseDate);
                var formattedDate = `${dateObject.getFullYear()}-${('0' + (dateObject.getMonth() + 1)).slice(-2)}-${('0' + dateObject.getDate()).slice(-2)}T${('0' + dateObject.getHours()).slice(-2)}:${('0' + dateObject.getMinutes()).slice(-2)}`;

                document.getElementById("ddt").value = formattedDate;

            }
        });

          function initForm(form, data) {

            Object.getOwnPropertyNames(data).forEach(function (item) {
                var currentElem = form.elements[item.charAt(0).toUpperCase() + item.slice(1)];

                if (currentElem == null) { return; }

                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "wbc") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.wbcunits.trim());
                        if (matchedOpt) {
                            matchedOpt.selected = true;
                        }
                    }
                } else {
                    // Handle the case where the current element is not a SELECT with the specific ID
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }

                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "neutrophils") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.neutrophilsunits.trim());
                        if (matchedOpt) {
                            matchedOpt.selected = true;
                        }
                    }
                } else {
                    // Handle the case where the current element is not a SELECT with the specific ID
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }
                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "lymphocyte") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.lymphocyteunits.trim());
                        if (matchedOpt) {
                            matchedOpt.selected = true;
                        }
                    }
                } else {
                    // Handle the case where the current element is not a SELECT with the specific ID
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }

                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "monocyte") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.monocyteunits.trim());
                        if (matchedOpt) {
                            matchedOpt.selected = true;
                        }
                    }
                } else {
                    // Handle the case where the current element is not a SELECT with the specific ID
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }

                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "eosinophil") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.eosinophilunits.trim());
                        if (matchedOpt) {
                            matchedOpt.selected = true;
                        }
                    }
                } else {
                    // Handle the case where the current element is not a SELECT with the specific ID
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }


                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "basophil") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.basophilunits.trim());
                        if (matchedOpt) {
                            matchedOpt.selected = true;
                        }
                    }
                } else {
                    // Handle the case where the current element is not a SELECT with the specific ID
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }

                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "hemoglobin") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.hemoglobinunits.trim());
                        if (matchedOpt) {
                            matchedOpt.selected = true;
                        }
                    }
                } else {
                    // Handle the case where the current element is not a SELECT with the specific ID
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }


                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "hematocrit") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.hematocritunits.trim());
                        if (matchedOpt) {
                            matchedOpt.selected = true;
                        }
                    }
                } else {
                    // Handle the case where the current element is not a SELECT with the specific ID
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }



                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "rbc") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.rbcunits.trim());
                        if (matchedOpt) {
                            matchedOpt.selected = true;
                        }
                    }
                } else {
                    // Handle the case where the current element is not a SELECT with the specific ID
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }

                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "mcv") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.mcvunits.trim());
                        if (matchedOpt) {
                            matchedOpt.selected = true;
                        }
                    }
                } else {
                    // Handle the case where the current element is not a SELECT with the specific ID
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }


                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "mch") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.mchunits.trim());
                        if (matchedOpt) {
                            matchedOpt.selected = true;
                        }
                    }
                } else {
                    // Handle the case where the current element is not a SELECT with the specific ID
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }


                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "mchc") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.mchcunits.trim());
                        if (matchedOpt) {
                            matchedOpt.selected = true;
                        }
                    }
                } else {
                    // Handle the case where the current element is not a SELECT with the specific ID
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }



                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "rcdw") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.rcdwunits.trim());
                        if (matchedOpt) {
                            matchedOpt.selected = true;
                        }
                    }
                } else {
                    // Handle the case where the current element is not a SELECT with the specific ID
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }



                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "pl") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.plateletcountunits.trim());
                        if (matchedOpt) {
                            matchedOpt.selected = true;
                        }
                    }
                } else {
                    // Handle the case where the current element is not a SELECT with the specific ID
                    form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);
                }

                if (currentElem.tagName == "SELECT") {
                    // Check the ID of the SELECT element
                    if (currentElem.id == "mpv") {
                        // Handle the case where the current element is a SELECT with a specific ID
                        var selectChildren = Array.from(currentElem.children);
                        var matchedOpt = selectChildren.find(opt => opt.innerText.trim() == selectedEmployeeHI.mpvunits.trim());
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




        
        $("#updateEmployeeHealth").click(function () {
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
            var formelements = $("#EmployeeHealthUpdateForm .form-group");

            //getting the data from the form
            var formInputs = $("#EmployeeHealthUpdateForm").serializeArray();
            formInputs.forEach(function (item) {
                arrData[item.name] = item.value;
            });




            var wbc = $('#wbc option:selected').text();
            var neutrophils = $('#neutrophils option:selected').text();
            var lymphocyte = $('#lymphocyte option:selected').text();
            var monocyte = $('#monocyte option:selected').text();
            var eosinophil = $('#eosinophil option:selected').text();
            var basophil = $('#basophil option:selected').text();
            var hemoglobin = $('#hemoglobin option:selected').text();
            var hematocrit = $('#hematocrit option:selected').text();
            var rbc = $('#rbc option:selected').text();
            var mcv = $('#mcv option:selected').text();
            var mch = $('#mch option:selected').text();
            var mchc = $('#mchc option:selected').text();
            var rcdw = $('#rcdw option:selected').text();
            var plateletcount = $('#pl option:selected').text();
            var mpv = $('#mpv option:selected').text();


          
           

          

            arrData.EphiId = selectedEmployeeHIId;
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


            arrData.Datet = selectedEmployeeHI.datet;
            arrData.EpiId = selectedEmployeeHI.epiId;


          


            console.log('checking', arrData);
              var dtr = $('#dtr').val();
            var ddt = $('#ddt').val();

            var dateTimeRequested = formatDateTime(dtr);
            var drawDateTime = formatDateTime(ddt);


            
             arrData.Cbcdatetimerequested = dateTimeRequested;
            arrData.Cbcdrawdatetime  = drawDateTime;

            //  console.log( arrData.Cbcdatetimerequested);


              function formatDateTime(dateTime) {
                return new Date(dateTime).toLocaleDateString('en-US', {
                    year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'
                });
            }



            if (formInputs.length === formelements.length && formInputs[0].value !== '') {

                proceedUpdate(arrData);
             console.log(arrData)

            } else {
                alertError();
            }
        }


        function proceedUpdate(arrData) {

            //AJAX UPDATE DEPARTMENT
            $.ajax
                ({
                    url: "../api/adminapi/UpdateEmployeeHealth",
                    type: "POST",
                    data:
                    {
                        upsth: arrData,
                    },
                })
                .done(function () {
                    $("#EmployeeHealthUpdateForm")[0].reset();
                    $("#modalEmployeeHealthUpdate").modal("toggle");
                    // displayStudentData();
                    populateIndex();
                    displaySavedProgress();




                });
        }


            $("tbody").delegate(".EmployeeHIDelete", "click", function (e) {
            var i = e.target.closest("a").getAttribute("data-ephiId");
            if (i != null) {
                //Insert code here for the delete
                selectedEmployeeHIId = i;
                console.log(selectedEmployeeHIId + "mao ni siya");
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
            // console.log(selectedEmployeeHIId + "proceed");
            //AJAX DELETE DEPARTMENT
            $.ajax
                ({
                    url: "../api/adminapi/DeleteEmployeeHealth",
                    type: "POST",
                    data:

                    {
                        id: selectedEmployeeHIId
                    },
                })
                .done(function () {
                    setTimeout(function () { location.reload(); }, 100);

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















    });// end of this do not touch it