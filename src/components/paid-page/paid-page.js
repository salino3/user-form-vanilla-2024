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
  const storedPayment = JSON.parse(localStorage.getItem("payment"));
  const li9 = document.getElementById("li9");
  const li10 = document.getElementById("li10");
  const li11 = document.getElementById("li11");
  const li12 = document.getElementById("li12");

  if (storedUser) {
    if (li1 && storedUser.name) {
      li1.textContent = `Name: ${storedUser.name}`;
    }
    if (li2 && storedUser.surname) {
      li2.textContent = `Surname: ${storedUser.surname}`;
    }
    if (li3 && storedUser.email) {
      li3.textContent = `Email: ${storedUser.email}`;
    }
    if (li4 && storedUser.phoneNumber) {
      li4.textContent = `Phone number: ${storedUser.phoneNumber}`;
    }
  }
  //
  if (storedAddress) {
    if (li5 && storedAddress.street) {
      li5.textContent = `Street: ${storedAddress.street}`;
    }
    if (li6 && storedAddress.city) {
      li6.textContent = `City: ${storedAddress.city}`;
    }
    if (li7 && storedAddress.country) {
      li7.textContent = `Country: ${storedAddress.country}`;
    }
    if (li8 && storedAddress.zipCode) {
      li8.textContent = `Zip code: ${storedAddress.zipCode}`;
    }
  }
  //
  if (storedPayment) {
    if (li9 && storedPayment.cardNumber) {
      li9.textContent = `Card number: ${storedPayment.cardNumber}`;
    }
    if (li10 && storedPayment.cardHolderName) {
      li10.textContent = `Card holder name: ${storedPayment.cardHolderName}`;
    }
    if (li11 && storedPayment.expiryDate) {
      li11.textContent = `Expiry date: ${storedPayment.expiryDate}`;
    }
    if (li12 && storedPayment.cvv) {
      li12.textContent = `CVV: ${storedPayment.cvv}`;
    }
  }
}

window.onload = function () {
  executingPage()
    .then(() => containerPaidPage())
    .catch((error) => console.error(error));
};
