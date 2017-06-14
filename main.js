// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
var customer = document.querySelector(".customers");
var customerInfo;
(function() {
  "use strict";
  fetch("https://randomuser.me/api/?results=12")
    .then(function(customerData) {
      return customerData.json();
    })
    .then(function(data) {
      console.log(data.results);
      var customerInfo = data.results;
      for (let i = 0; i < 12; i++) {
        buildCustomer(customerInfo[i]); //Using function below
      }
    });

  function buildCustomer(array) {
    var custProfile = document.createElement("div");
    customer.appendChild(custProfile);

    var custPhoto = document.createElement("img");
    custProfile.appendChild(custPhoto);
    custPhoto.src = array.picture.large;

    var custName = document.createElement("h3");
    custProfile.appendChild(custName);
    custName.innerHTML = array.name.first + " " + array.name.last;

    var custEmail = document.createElement("p");
    custProfile.appendChild(custEmail);
    custEmail.innerHTML = array.email;
    custEmail.id = "email";

    var custStreet = document.createElement("p");
    custProfile.appendChild(custStreet);
    custStreet.innerHTML = array.location.street;
    custStreet.id = "street";

    var custCity = document.createElement("p");
    custProfile.appendChild(custCity);
    custCity.innerHTML =
      array.location.city +
      ", " +
      array.location.state +
      ", " +
      array.location.postcode;
    custCity.id = "city";
  }
})();
