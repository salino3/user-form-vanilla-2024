function loadTitle(h1Text) {
  fetch("/src/components/title.component.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main_page").innerHTML = data;

      document.getElementById("h1_title").textContent = h1Text;
      document.getElementById("h1_title").style.color = "purple";
    })
    .catch((error) => console.error("Error downloading title:", error));
}

function loadTitleAddressData(h2Text) {
  fetch("/src/components/address-details.html")
    .then((response) => response.text())
    .then((data) => {
      document
        .getElementById("main_page")
        .insertAdjacentHTML("beforeend", data);

      document.getElementById("h2_titleUserData").textContent = h2Text;
    })
    .catch((error) => console.error("Error downloading title:", error));
}

loadTitleAddressData("Address Data");
loadTitle("Home Page!");
