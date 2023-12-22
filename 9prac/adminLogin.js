"use strict";

const login = prompt("Введите ваш логин");
if (login == "Админ") {
  const password = prompt("Введите ваш пароль");
  if (password == "Я главный") {
    alert("Здравствуйте!");
  } else if (password != "" && password != null) {
    alert("Неверный пароль");
  } else {
    alert("Отменено");
  }
} else {
  alert("Я вас не знаю");
}
