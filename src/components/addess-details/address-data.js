function loadTitle(h2Text) {
  fetch("/src/common-app/title.component.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main_pages").innerHTML = data;

      let spanTitle = document.getElementById("spanTitle");
      let h2 = document.getElementById("h2_title");

      if (h2 && spanTitle) {
        h2.textContent = h2Text;
        h2.style.color = "var(--color-secondary)";
        h2.style.fontSize = "var(--size-secondary)";
        spanTitle.addEventListener("click", function (event) {
          event.preventDefault();
          window.location.href = "/";
        });
      }
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
