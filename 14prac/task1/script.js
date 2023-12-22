// Функция для проверки, является ли элемент ссылкой
function isAncestorAnchor(element) {
    if (!element) {
        return false;
    }

    if (element.tagName === 'A') {
        return true;
    }

    return isAncestorAnchor(element.parentNode);
}

document.getElementById('contents').addEventListener('click', function (event) {
    // Проверяем, является ли целевой элемент или его предок ссылкой
    if (isAncestorAnchor(event.target)) {
        var userConfirmation = confirm('Вы действительно хотите покинуть страницу?');

        if (!userConfirmation) {
            event.preventDefault();
        }
    }
});
