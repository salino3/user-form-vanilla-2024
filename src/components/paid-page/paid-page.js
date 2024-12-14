import { executingPage } from "../../js/app.js";

function containerPaidPage() {
  //   const main = document.getElementById("main_page").innerHTML;
  //   const ul1 = document.getElementById("ul1");
  console.log("Container Paid");
  const li1 = document.getElementById("li1");
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser) {
    if (li1) {
      li1.textContent = `Name: ${storedUser.name}`;
    }
  }
}

window.onload = function () {
  executingPage()
    .then(() => containerPaidPage())
    .catch((error) => console.error(error));
};
