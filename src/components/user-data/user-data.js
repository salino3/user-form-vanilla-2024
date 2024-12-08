function personalInfoForm(event) {
  event.preventDefault();

  const user = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    email: document.getElementById("email").value,
    phoneNumber: document.getElementById("phoneNumber").value,
  };
  console.log("User data:", user);

  const allFieldsFilled = Object.keys(user).every((key) => user[key]);

  if (allFieldsFilled) {
    localStorage.setItem("user", JSON.stringify(user));

    window.location.href =
      "/src/components/addess-details/address-details.html";
  } else {
    alert("Please refill all inputs.");
  }
}

function loadTitle(h2Text) {
  fetch("/src/common-app/title.component.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main_page").innerHTML = data;

      let spanTitle = document.getElementById("spanTitle");
      let h2 = document.getElementById("h2_title");
      if (h2 && spanTitle) {
        spanTitle.style.display = "none";
        h2.textContent = h2Text;
        h2.style.color = "var(--color-secondary)";
        h2.style.fontSize = "var(--size-secondary)";
      }
    })
    .catch((error) => console.error("Error downloading title:", error));
}

function loadTitleUserData(h2Text) {
  fetch("/src/components/user-data/user-data.html")
    .then((response) => response.text())
    .then((data) => {
      document
        .getElementById("main_page")
        .insertAdjacentHTML("beforeend", data);
      let h2 = document.getElementById("h2_titleUserData");
      if (h2) {
        h2.textContent = h2Text;
      }
    })
    .catch((error) => console.error("Error downloading title:", error));
}

function loadBoxButtons(txtSave) {
  fetch("/src/common-app/box-buttons.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main_page").innerHTML += data;
      let form = document.getElementById("personalInfoForm");

      let containerBtnSave = document.getElementById("containerBoxButtons");
      let btnSave = document.getElementById("btnSave");
      if (containerBtnSave && btnSave) {
        containerBtnSave.style.marginTop = "var(--size-primary)";
        btnSave.textContent = txtSave;
        // btnSave.addEventListener("click", function (event) {
        //   event.preventDefault();
        //   alert("hola");
        // });

        containerBtnSave.appendChild(btnSave);
        form.appendChild(containerBtnSave);
      } else {
        console.error("btnSave is not present in the DOM");
      }
    })
    .catch((error) => console.error("Error downloading box buttons:", error));
}

window.onload = function () {
  loadTitle("Insert your personal information");
  loadTitleUserData();
  loadBoxButtons("Save");
};
