function loadTitle(h1Text) {
  fetch("/src/common-app/title.component.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main_page").innerHTML = data;

      document.getElementById("h1_title").textContent = h1Text;
      document.getElementById("h1_title").style.color = "purple";
    })
    .catch((error) => console.error("Error downloading title:", error));
}

loadTitle("Home Page!");
