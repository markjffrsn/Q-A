const btns = document.querySelectorAll(".question-title");

const body1 = document.querySelector(".body-1");
const body2 = document.querySelector(".body-2");
const body3 = document.querySelector(".body-3");

const title1 = document.querySelector(".title-1");
const title2 = document.querySelector(".title-2");
const title3 = document.querySelector(".title-3");

const icon1 = document.querySelector(".icon-1");
const icon2 = document.querySelector(".icon-2");
const icon3 = document.querySelector(".icon-3");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentButton = e.currentTarget.classList;

    if (currentButton.contains("title-1")) {
      body1.classList.toggle("question-body-show");
      currentButton.toggle("margin-bottom");
      icon1.classList.toggle("rotate");

      body2.classList.remove("question-body-show");
      body3.classList.remove("question-body-show");

      icon2.classList.remove("rotate");
      icon3.classList.remove("rotate");
    } else if (currentButton.contains("title-2")) {
      body2.classList.toggle("question-body-show");
      currentButton.toggle("margin-bottom");
      icon2.classList.toggle("rotate");

      body1.classList.remove("question-body-show");
      body3.classList.remove("question-body-show");

      icon1.classList.remove("rotate");
      icon3.classList.remove("rotate");
    } else {
      body3.classList.toggle("question-body-show");
      currentButton.toggle("margin-bottom");
      icon3.classList.toggle("rotate");

      body1.classList.remove("question-body-show");
      body2.classList.remove("question-body-show");

      icon1.classList.remove("rotate");
      icon2.classList.remove("rotate");
    }
  });
});
