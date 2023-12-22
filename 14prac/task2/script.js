document.addEventListener('DOMContentLoaded', function () {
    var mainImage = document.getElementById('mainImage');
    var thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', function () {
            // При клике на уменьшенное изображение меняем основное изображение
            mainImage.src = thumbnail.src;
            mainImage.alt = thumbnail.alt;
        });
    });
});
