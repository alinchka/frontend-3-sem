document.addEventListener("DOMContentLoaded", function () {
    // Функция для определения, находится ли элемент в видимой части экрана
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Функция для обновления содержимого
    function updateContent() {
      const content = document.getElementById("content");
      const dynamicContent = document.createElement("div");
      dynamicContent.className = "dynamic-content";
      dynamicContent.innerHTML = `<p>Mew</p>`;
      content.appendChild(dynamicContent);
  
      // Добавляем класс для анимации
      setTimeout(() => {
        dynamicContent.classList.add("dynamic-content-visible");
      }, 100);
    }
  
    // Обработчик события прокрутки
    function scrollHandler() {
      const content = document.getElementById("content");
  
      // Если конец страницы достигнут
      if (isInViewport(content)) {
        updateContent();
      }
    }
  
    // Прослушивание события прокрутки
    window.addEventListener("scroll", scrollHandler);
  });
  