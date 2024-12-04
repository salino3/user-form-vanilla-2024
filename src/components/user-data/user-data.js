function saveDataUser() {
  // Aquí puedes agregar la lógica para guardar los datos del formulario o cualquier otro proceso
  console.log("Saving user data...");

  // Luego redirigimos a la siguiente página, por ejemplo, a una página llamada 'form2.html'
  window.location.href = "/src/components/addess-details/address-details.html"; // Asegúrate de que esta URL sea la correcta para tu segunda página
}

function loadTitle(h2Text) {
  fetch("/src/common-app/title.component.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main_page").innerHTML = data;

      let h2 = document.getElementById("h2_title");
      if (h2) {
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

window.onload = function () {
  loadTitle("Insert your personal information");
  loadTitleUserData();
};
