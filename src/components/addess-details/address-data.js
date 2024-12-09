import { executingPage } from "../../js/app.js";

function addressInfoForm() {
  const address = {
    street: document.getElementById("street").value,
    city: document.getElementById("city").value,
    country: document.getElementById("country").value,
    zipCode: document.getElementById("zipCode").value,
  };
  console.log("Address data:", address);

  const allFieldsFilled = Object.keys(address).every((key) => address[key]);

  if (allFieldsFilled) {
    localStorage.setItem("address", JSON.stringify(address));

    window.location.href = "/src/components/payment-data/payment-data.html";
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

function loadAddressData() {
  fetch("./address-details.html")
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
      let form = document.getElementById("addressInfoForm");

      let containerBtnSave = document.getElementById("containerBoxButtons");
      let btnSave = document.getElementById("btnSave");
      let spanTitle = document.getElementById("spanTitle");

      if (containerBtnSave && btnSave && spanTitle) {
        containerBtnSave.style.marginTop = "var(--size-primary)";
        btnSave.textContent = txtSave;
        btnSave.addEventListener("click", function (event) {
          event.preventDefault();
          addressInfoForm();
        });
        spanTitle.addEventListener("click", function (event) {
          event.preventDefault();
          window.location.href = "/";
        });

        // Input Values
        const street = document.getElementById("street");
        const city = document.getElementById("city");
        const country = document.getElementById("country");
        const zipCode = document.getElementById("zipCode");

        const storedUser = JSON.parse(localStorage.getItem("address"));
        if (storedUser) {
          if (storedUser.street) {
            street.value = storedUser.street;
          }
          if (storedUser.city) {
            city.value = storedUser.city;
          }
          if (storedUser.country) {
            country.value = storedUser.country;
          }
          if (storedUser.zipCode) {
            zipCode.value = storedUser.zipCode;
          }
        }
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
    .then(() => loadTitle("Insert address data"))
    .then(() => loadAddressData())
    .then(() => loadBoxButtons("Save"))
    .catch((error) => console.error(error));
};
