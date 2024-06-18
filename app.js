const btns = document.querySelectorAll(".question-title");
const body = document.querySelector(".question-body");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentButton = e.currentTarget.classList;

    body.style.display = "block";
  });
});
