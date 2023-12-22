document.addEventListener('DOMContentLoaded', function () {
    var slider = document.getElementById('slider');

    // Добавляем обработчики для предотвращения выхода за пределы полосы слайдера
    document.addEventListener('mousemove', function (event) {
        if (dragging) {
            // координаты мыши и полосы слайдера
            var mouseX = event.clientX;
            var sliderRect = slider.getBoundingClientRect();

            // Ограничиваем положение бегунка внутри полосы слайдера
            var positionX = Math.min(Math.max(mouseX - sliderRect.left, 0), sliderRect.width);

            // Преобразуем положение в процентное значение и обновляем слайдер
            var percentage = (positionX / sliderRect.width) * 100;
            slider.value = Math.round(percentage);
        }
    });

    // Флаг для отслеживания состояния перетаскивания бегунка
    var dragging = false;

    slider.addEventListener('mousedown', function () {
        dragging = true;
    });

    document.addEventListener('mouseup', function () {
        dragging = false;
    });

});
