document.addEventListener('DOMContentLoaded', function () {
    var animatedBackground = document.getElementById('animatedBackground');
    var scaleElement = document.getElementById('scaleElement');

    // Первая анимация: изменение цвета фона
    animatedBackground.addEventListener('mouseover', function () {
        animatedBackground.style.backgroundColor = '#dc1414';
    });

    animatedBackground.addEventListener('mouseout', function () {
        animatedBackground.style.backgroundColor = '#6934db';
    });

    // Вторая анимация: масштабирование при наведении
    scaleElement.addEventListener('mouseover', function () {
        scaleElement.style.transform = 'scale(1.2)';
    });

    scaleElement.addEventListener('mouseout', function () {
        scaleElement.style.transform = 'scale(1)';
    });
});
