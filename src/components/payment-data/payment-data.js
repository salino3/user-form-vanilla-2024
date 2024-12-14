import { executingPage } from "../../js/app.js";

function paymentInfoForm() {
  const payment = {
    cardNumber: document.getElementById("cardNumber").value,
    cardHolderName: document.getElementById("cardHolderName").value,
    expiryDate: document.getElementById("expiryDate").value,
    cvv: document.getElementById("cvv").value,
  };

  const allFieldsFilled = Object.keys(payment).every((key) => payment[key]);

  if (allFieldsFilled) {
    window.location.href = "/src/components/paid-page/paid-page.html";
  } else {
    alert("Please refill all inputs.");
  }
}

function loadTitle(h2Text) {
  fetch("/src/common-app/title.component.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main_page").innerHTML = data;

      let h2 = document.getElementById("h2_title");

      if (h2 && spanTitle) {
        h2.textContent = h2Text;
        h2.style.color = "var(--color-secondary)";
        h2.style.fontSize = "var(--size-secondary)";
      }
    })
    .catch((error) => console.error("Error downloading title:", error));
}

function loadPaymentData() {
  fetch("./payment-data.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main_page").innerHTML += data;
    })
    .catch((error) => console.error("Error downloading title:", error));
}

function loadBoxButtons(txtSave) {
  fetch("/src/common-app/box-buttons.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main_page").innerHTML += data;
      let form = document.getElementById("paymentInfoForm");

      let containerBtnSave = document.getElementById("containerBoxButtons");
      let btnSave = document.getElementById("btnSave");
      let spanTitle = document.getElementById("spanTitle");

      if (containerBtnSave && btnSave && spanTitle) {
        containerBtnSave.style.marginTop = "var(--size-primary)";
        btnSave.textContent = txtSave;
        btnSave.addEventListener("click", function (event) {
          event.preventDefault();
          paymentInfoForm();
        });
        spanTitle.addEventListener("click", function (event) {
          event.preventDefault();
          window.location.href = "../addess-details/address-details.html";
        });

        containerBtnSave.appendChild(btnSave);
        form.appendChild(containerBtnSave);
      } else {
        console.error("btnSave is not present in the DOM");
      }
    })
    .catch((error) => console.error("Error downloading box buttons:", error));
}

window.onload = function () {
  executingPage()
    .then(() => loadTitle("Insert payment data"))
    .then(() => loadPaymentData())
    .then(() => loadBoxButtons("Save"))
    .catch((error) => console.error(error));
};
