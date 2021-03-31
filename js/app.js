const btn = document.querySelector(".cta__btn");
const email = document.querySelector(".cta__email");
const error = document.querySelector(".cta--invalid");

btn.addEventListener("click", function (e) {
  if (!email.validity.valid) {
    e.preventDefault();
    error.style.display = "block";
    email.focus();
  } else {
    error.style.display = "none";
  }
});
