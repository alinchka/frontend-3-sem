function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function () {
      var userInput = prompt("Введите число", "0");
      this.value += +userInput;
    };
  }
  
  var accumulator = new Accumulator(1); // Начальное значение установлено в 1
  accumulator.read(); // Пользователь вводит, например, 5
  accumulator.read(); // Пользователь вводит, например, 10
  
  alert(accumulator.value); // Выведет сумму начального значения и введенных пользователем чисел
  
  

 /* changePlus = () => {
    const $elem = document.querySelector('#total-price');
    const howMach = $elem.textContent; // "Некоторый текст"
    // Выбираем элемент на странице, и меняем содержимое нужного поля
    document.getElementsById("total-price").value = toString(howMach + 250);
  }*/