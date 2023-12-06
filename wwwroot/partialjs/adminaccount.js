var selectedAdminAccount;
  var selectedAdminAccountId;
  var inputtedAdminAccount;
  var AdminAccountList = {};




  $(document).ready(function () {
    getAdminAccount();
    displayAdminAccountData();



    function getAdminAccount() {
      $.ajax("../api/adminapi/getAdminAccount")
        .done(function (result) {
          AdminAccountList = result;
        });
    }


    $("#createAdminAccount").click((e) => {

      var arrData = {};
      var formelements = $("#createAdminAccountForm .form-group");

      //getting the data from the form
      var formInputs = $("#createAdminAccountForm").serializeArray();
      formInputs.forEach(function (item) {
        arrData[item.name] = item.value;
      });

      if (formInputs.length === formelements.length && formInputs[0].value !== '') {
        //AJAX ADD DEPARTMENT
        $.ajax
          ({
            url: "../api/adminapi/AdminAddAccount",
            type: "POST",
            data:
            {
              adac: arrData
            },
          })
          .done(function () {

            $("#createAdminAccountForm")[0].reset();
            $("#modallDepartmentCreate").modal("toggle");
            getAdminAccount();
            displaySavedProgress();
            displayAdminAccountData();

          });
      }
      else {
        alertError();
      }
    });


    function displayAdminAccountData() {
      $('#AdminAccountData').DataTable().destroy();
      if (!$.fn.DataTable.isDataTable('#AdminAccountData')) {
        $('#AdminAccountData').DataTable({
          ajax: {
            url: '../api/adminapi/getAdminAccount', // API endpoint to retrieve department
            dataSrc: ''
          },
          columns:
            [
              { data: 'id' },
              { data: 'fullname' },
              { data: 'address' },
              { data: 'email' },
              { data: 'mobilenumber' },
              { data: 'password' },
              {
                data: 'id',
                render: function (data, type, row) {
                  return btnAdminAccount(data);
                }
              },
            ]
        });
      }
      getAdminAccount();
    }

    function btnAdminAccount(id) {
      return "<center><a class='btn btn-success AdminAccountUpdate' data-id=" + id + "><i class='fa-solid fa-pen-to-square' style='color : #ffffff;'></i></a> | <a class='btn btn-danger adminaccountDelete' data-id=" + id + "><i class='fa-solid fa-trash' style='color : #ffffff;'></i></a></center>"
    }


    $("tbody").delegate(".AdminAccountUpdate", "click", function (e) {
      console.log("I was clicked");
      var i = e.target.closest("a").getAttribute("data-id");
      if (i != null) {
        $("#createAdminAccountForm")[0].reset();
        $("#modalAdminAccountUpdate").modal("toggle");

        selectedAdminAccountId = i;
        selectedAdminAccount = AdminAccountList.find(element => element.id == i);

        oFormObject = document.forms["updateAdminAccountForm"];
        initForm(oFormObject, selectedAdminAccount);
      }
    });


    function initForm(form, data) {

      Object.getOwnPropertyNames(data).forEach(function (item) {
        var currentElem = form.elements[item.charAt(0).toUpperCase() + item.slice(1)];

        if (currentElem == null) { return; }
        form.elements[item.charAt(0).toUpperCase() + item.slice(1)].setAttribute("value", data[item]);

      });
    }


    $("#updateADMINacc").click(function () {
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
          updateadminaccountHolder();
        }
      })
    }

    function updateadminaccountHolder() {
      var arrData = {};
      var formelements = $("#updateAdminAccountForm .form-group");

      //getting the data from the form
      var formInputs = $("#updateAdminAccountForm").serializeArray();
      formInputs.forEach(function (item) {
        arrData[item.name] = item.value;
      });
      arrData.id = selectedAdminAccountId;

      if (formInputs.length === formelements.length && formInputs[0].value !== '') {
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
          url: "../api/adminapi/updateAdminAccount",
          type: "POST",
          data:
          {
            upadmin: arrData,
          },
        })
        .done(function () {
          $("#updateAdminAccountForm")[0].reset();
          $("#modalAdminAccountUpdate").modal("toggle");
          displayAdminAccountData();
          displaySavedProgress();
        });
    }


    $("tbody").delegate(".adminaccountDelete", "click", function (e) {
      var i = e.target.closest("a").getAttribute("data-id");
      if (i != null) {
        //Insert code here for the delete
        selectedAdminAccountId = i;
        console.log(selectedAdminAccountId + "mao ni siya");
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
      console.log(selectedAdminAccountId + "proceed");
      //AJAX DELETE DEPARTMENT
      $.ajax
        ({
          url: "../api/adminapi/deleteAdminAccount",
          type: "POST",
          data:
          {
            id: selectedAdminAccountId
          },
        })
        .done(function () {
          displayAdminAccountData();
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


  }); /// dont touch it