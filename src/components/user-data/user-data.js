function saveDataUser() {
  // Aquí puedes agregar la lógica para guardar los datos del formulario o cualquier otro proceso
  console.log("Saving user data...");

  // Luego redirigimos a la siguiente página, por ejemplo, a una página llamada 'form2.html'
  window.location.href = "/src/components/addess-details/address-details.html"; // Asegúrate de que esta URL sea la correcta para tu segunda página
}

function loadTitleUserData(h2Text) {
  fetch("/src/components/user-data/user-data.html")
    .then((response) => response.text())
    .then((data) => {
      document
        .getElementById("main_page")
        .insertAdjacentHTML("beforeend", data);

      document.getElementById("h2_titleUserData").textContent = h2Text;
    })
    .catch((error) => console.error("Error downloading title:", error));
}

loadTitleUserData("Hola hola!");

//