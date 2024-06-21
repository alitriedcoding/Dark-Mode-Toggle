const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
const labelEl = document.querySelector(".label");

function ChangeColor() {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "black";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
}
inputEl.addEventListener("input", () => {
  ChangeColor();
  UpdatLocalStorage();
});

function UpdatLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
