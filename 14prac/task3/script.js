document.addEventListener('DOMContentLoaded', function () {
    var list = document.getElementById('list');

    list.addEventListener('click', function (event) {
        // Предотвращаем стандартное выделение текста
        event.preventDefault();

        // Если нажата клавиша Ctrl, то переключаем выделение
        var isCtrlPressed = event.ctrlKey || event.metaKey;

        if (isCtrlPressed) {
            event.target.classList.toggle('selected');
        } else {
            // Если не нажата клавиша Ctrl, то выделяем только текущий элемент
            var items = list.getElementsByTagName('li');
            for (var i = 0; i < items.length; i++) {
                items[i].classList.remove('selected');
            }

            event.target.classList.add('selected');
        }
    });
});
