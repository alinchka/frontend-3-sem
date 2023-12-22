document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.item');
    var cart = document.getElementById('cart');
    var totalElement = document.getElementById('total');
    var total = 0;

    items.forEach(function (item) {
        item.addEventListener('dragstart', function (event) {
            // Начало перетаскивания
            event.dataTransfer.setData('text/plain', item.dataset.price);
        });
    });

    cart.addEventListener('dragover', function (event) {
        // Предотвращаем стандартное поведение, чтобы разрешить перетаскивание
        event.preventDefault();
    });

    cart.addEventListener('drop', function (event) {
        // Получаем цену товара из данных перетаскиваемого элемента
        var price = parseInt(event.dataTransfer.getData('text/plain'));

        // Добавляем цену к общей стоимости
        total += price;
        totalElement.textContent = 'Итого: ' + total + 'р';

        // Создаем элемент в корзине
        var cartItem = document.createElement('div');
        cartItem.textContent = 'Покупочка - ' + price + 'р';
        cartItem.classList.add('item');
        cartItem.style.border = '1px';
        cartItem.style.padding = '10px';
        cartItem.style.margin = '5px';

        // Добавляем элемент в корзину
        cart.appendChild(cartItem);
    });
});
