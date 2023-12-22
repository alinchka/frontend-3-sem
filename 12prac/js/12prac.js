let notificationCounter = 0;
let intervalId;
function createNotification() {
    const notificationList = document.querySelector('.notifications-list');
    const newNotification = document.createElement('div');
    newNotification.classList.add('notification');
    newNotification.textContent = "Уведомление";
    notificationList.appendChild(newNotification);
    notificationCounter++;
    updateCounter();
    newNotification.addEventListener('click', () => {
        clearInterval(intervalId);
        setTimeout(() => {
          intervalId = setInterval(createNotification, 3000);
        }, 10000);
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
