import { executingPage } from "../../js/app.js";

function containerPaidPage() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const span1 = document.getElementById("span1");
  const span2 = document.getElementById("span2");
  const span3 = document.getElementById("span3");
  const span4 = document.getElementById("span4");
  const storedAddress = JSON.parse(localStorage.getItem("address"));
  const span5 = document.getElementById("span5");
  const span6 = document.getElementById("span6");
  const span7 = document.getElementById("span7");
  const span8 = document.getElementById("span8");

  if (storedUser) {
    if (span1 && storedUser.name) {
      span1.textContent = storedUser.name;
    }
    if (span2 && storedUser.surname) {
      span2.textContent = storedUser.surname;
    }
    if (span3 && storedUser.email) {
      span3.textContent = storedUser.email;
    }
    if (span4 && storedUser.phoneNumber) {
      span4.textContent = storedUser.phoneNumber;
    }
  }
  //
  if (storedAddress) {
    if (span5 && storedAddress.street) {
      span5.textContent = storedAddress.street;
    }
    if (span6 && storedAddress.city) {
      span6.textContent = storedAddress.city;
    }
    if (span7 && storedAddress.country) {
      span7.textContent = storedAddress.country;
    }
    if (span8 && storedAddress.zipCode) {
      span8.textContent = storedAddress.zipCode;
    }
  }
}

window.onload = function () {
  executingPage()
    .then(() => containerPaidPage())
    .catch((error) => console.error(error));
};
