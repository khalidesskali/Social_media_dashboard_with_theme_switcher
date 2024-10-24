const switchButton = document.querySelector(".holder");
const button = document.querySelector(".button");
const body = document.body;

switchButton.onclick = function () {
  const isLeft = button.classList.toggle("left");
  button.classList.toggle("right", !isLeft);

  body.classList.toggle("dark", isLeft);
  body.style.backgroundColor = isLeft ? "var(--very-dark-blue-bg)" : "white";
};
