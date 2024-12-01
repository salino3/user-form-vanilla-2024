function loadTitle(h2Text) {
  fetch("/src/common-app/title.component.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main_page").innerHTML = data;

      let h2 = document.getElementById("h2_title");
      if (h2) {
        h2.textContent = h2Text;
        h2.style.color = "purple";
      }
    })
    .catch((error) => console.error("Error downloading title:", error));
}

window.onload = function () {
  loadTitle("Insert your personal data");
};
