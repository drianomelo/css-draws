const body = document.body;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const containerView = document.querySelector(".view");

function setColor() {
  body.style.backgroundColor = containerView.getAttribute("data-color-bg");

  prev.style.backgroundColor = containerView.getAttribute("data-color-text");
  prev.style.color = containerView.getAttribute("data-color-bg");

  next.style.backgroundColor = containerView.getAttribute("data-color-text");
  next.style.color = containerView.getAttribute("data-color-bg");
}

setColor();
