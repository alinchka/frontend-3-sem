let drawButton = document.getElementById("draw-button");
let isDrawing = false;
drawButton.style.zIndex = "999";

// функция, которая создает элемент и помещает его на страницу
function createHeart(x, y) {
  let heart = document.createElement("img");
  heart.src = "/img/heart.png";
  heart.style.position = "absolute";
  heart.style.left = x - 55 + "px";
  heart.style.top = y - 55 + "px";
  heart.style.zIndex = "1";
  document.body.appendChild(heart);
}

// обработчик события нажатия на кнопку "рисование"
drawButton.addEventListener("click", function () {
  if (isDrawing) {
    // если уже рисуем, то прекращаем
    isDrawing = false;
    drawButton.innerHTML = "Рисовать";
  } else {
    // если еще не рисуем, то начинаем
    isDrawing = true;
    drawButton.innerHTML = "Прекратить";
  }
});

// обработчик события движения мыши
document.addEventListener("mousemove", function (event) {
  if (isDrawing) {
    // если рисуем, то создаем элемент на текущей позиции курсора
    createHeart(event.pageX, event.pageY);
  }
});
