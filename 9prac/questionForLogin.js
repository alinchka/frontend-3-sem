"use strict";

const question = document.getElementById("question");

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  if (question.value.toLowerCase() === "да") {
    alert("Круто!");
    window.location.href = "login.html";
  } else {
    alert("Попробуй ещё раз");
  }
});
