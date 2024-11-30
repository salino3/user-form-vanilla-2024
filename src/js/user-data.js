function loadTitleUserData(h2Text) {
  fetch("/src/components/user-data.html")
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
