function loadTitle(h2Text) {
  fetch("/src/common-app/title.component.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main_pages").innerHTML = data;

      document.getElementById("h2_title").textContent = h2Text;
      document.getElementById("h2_title").style.color = "var(--color-06)";
      document.getElementById("h2_title").style.fontSize =
        "var(--size-secondary)";
    })
    .catch((error) => console.error("Error downloading title:", error));
}

function loadTitleAddressData(h3Text) {
  fetch("./address-details.html")
    .then((response) => response.text())
    .then((data) => {
      document
        .getElementById("main_pages")
        .insertAdjacentHTML("beforeend", data);
      console.log("DATA", data);

      let h3 = document.getElementById("h3_titleAddressData");

      if (h3) {
        h3.textContent = h3Text;
      }
    })
    .catch((error) => console.error("Error downloading title:", error));
}

window.onload = function () {
  loadTitle("Insert address data");
  loadTitleAddressData("Address Data");
};
