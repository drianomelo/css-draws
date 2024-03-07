const body = document.body;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    slideChange: function () {
      const currentSlide = this.slides[this.activeIndex];
      this.slides.forEach((slide) => {
        slide.classList.remove("container-view");
      });
      currentSlide.classList.add("container-view");
      setColor();
    },
  },
});

function setColor() {
  const containerView = document.querySelector(".container-view");

  body.style.backgroundColor = containerView.getAttribute("data-color-bg");

  prev.style.backgroundColor = containerView.getAttribute("data-color-text");
  prev.style.color = containerView.getAttribute("data-color-bg");

  next.style.backgroundColor = containerView.getAttribute("data-color-text");
  next.style.color = containerView.getAttribute("data-color-bg");
}

setColor();
