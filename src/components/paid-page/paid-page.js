import { executingPage } from "../../js/app.js";

window.onload = function () {
  executingPage()
    .then(() => {})
    .catch((error) => console.error(error));
};
