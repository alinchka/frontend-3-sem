"use strict";

var regist;
do {
    regist = prompt('Желаете войти на сайт?');
    if (regist != "Да") {
        alert('Попробуй ещё раз');
    } else {
        alert('Круто!');
        var login;
        do {
            login = prompt('Введите ваш логин');
            if (login === "Admin") {
                var pass;
                do {
                    pass = prompt('Введите ваш пароль', '');
                    if (pass == "Я главный") {
                        alert('Здравствуйте!');
                    } else if (pass == null || pass == '') {
                        alert('Отменено');
                    } else {
                        alert('Неверный пароль');
                    }
                } while(pass != "Я главный");  
            } else if (login == null || login == '') {
                alert('Отменено');
            } else {
                alert('Пользователь не найден');
            }
        } while(login != "Admin");  
    }
} while(regist != "Да");

let isDrawing = false;
let drawButton = document.getElementById("button");

function createShlepa(x, y) {
    let shlepa = document.createElement("img");
    shlepa.src = "headshlepa2.png";
    shlepa.style.position = "absolute";
    shlepa.style.left = x - 55 + "px";
    shlepa.style.top = y - 55 + "px";
    shlepa.style.zIndex = "1";
    document.body.appendChild(shlepa);
}

document.addEventListener("mousemove", function (event) {
    if (isDrawing) {
      // если рисуем, то создаем элемент на текущей позиции курсора
      createShlepa(event.pageX, event.pageY);
    }
});

button.onclick = function() {
    if (button.style.backgroundColor == 'white') {
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
        isDrawing = true;
    } else {
        button.style.backgroundColor = 'white';
        button.style.color = 'red';
        isDrawing = false;
    }
}



