let notificationCounter = 0;
let intervalId;
function createNotification() {
    const notificationList = document.querySelector('.notifications-list');
    const newNotification = document.createElement('div');
    newNotification.classList.add('notification');
    newNotification.textContent = "Уведомление";

    const productDelete = document.createElement("button");
    
    productDelete.classList.add("popup__product-delete");
    productDelete.innerHTML = "&#10006;";



    newNotification.appendChild(productDelete);
    notificationList.appendChild(newNotification);
    notificationCounter++;
    updateCounter();
    productDelete.addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        event.target.parentNode.remove(); // Удаляем уведомление при клике на крестик
        notificationCounter--;
        updateCounter();
      }
    });

    }

function updateCounter() {
  const counter = document.querySelector('.p-circle');
  counter.textContent = notificationCounter;
}

intervalId = setInterval(createNotification, 3000);

function ShowNotification(options) {
    const notification = document.getElementById('notification');
    notification.textContent = options.content;
    notification.classList.add('notification');
    notification.style.display = 'block';
    
    setTimeout(function() {
      notification.style.display = 'none';
      notification.textContent = '';
      notification.classList.remove('notification');
    }, 1500);
  }
ShowNotification({ content: 'ПОРА СПАТЬ!!!!' });

document.addEventListener("DOMContentLoaded", function () {
  let parallaxText = document.getElementById("parallaxText");

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    parallaxText.style.transform = `translateY(${Math.max(
      0,
      scrollPosition * 0.7 - 300
    )}px)`;
  });
});
