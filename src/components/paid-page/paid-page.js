import { executingPage } from "../../js/app.js";

function containerPaidPage() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const li1 = document.getElementById("li1");
  const li2 = document.getElementById("li2");
  const li3 = document.getElementById("li3");
  const li4 = document.getElementById("li4");
  const storedAddress = JSON.parse(localStorage.getItem("address"));
  const li5 = document.getElementById("li5");
  const li6 = document.getElementById("li6");
  const li7 = document.getElementById("li7");
  const li8 = document.getElementById("li8");
  if (storedUser) {
    if (li1) {
      li1.textContent = `Name: ${storedUser.name}`;
    }
    if (li2) {
      li2.textContent = `Surname: ${storedUser.surname}`;
    }
    if (li3) {
      li3.textContent = `Email: ${storedUser.email}`;
    }
    if (li4) {
      li4.textContent = `Phone number: ${storedUser.phoneNumber}`;
    }
  }
  //
  if (storedAddress) {
    if (li5) {
      li5.textContent = `Street: ${storedAddress.street}`;
    }
    if (li6) {
      li6.textContent = `City: ${storedAddress.city}`;
    }
    if (li7) {
      li7.textContent = `Country: ${storedAddress.country}`;
    }
    if (li8) {
      li8.textContent = `Zip code: ${storedAddress.zipCode}`;
    }
  }
}

window.onload = function () {
  executingPage()
    .then(() => containerPaidPage())
    .catch((error) => console.error(error));
};
