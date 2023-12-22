let items = [
    { name: "Война и мир", price: 100},
    { name: "Обломов", price: 200},
    { name: "Вишневый сад", price: 150},
  ];
  
  function displayItems() {
    const itemsContainer = document.getElementById("itemsContainer");
    itemsContainer.innerHTML = "";
    items.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.innerHTML = `${item.name} - ${item.price}`;
      itemsContainer.appendChild(div);
    });
  }
  
  
  function sortItemsUp() {
    items.sort((a, b) => a.price - b.price);
    displayItems();
  }

  function sortItemsDown() {
    items.sort((a, b) => b.price - a.price);
    displayItems();
  }

  function filterItemsByPrice() {
    const minPriceInput = document.getElementById("minPrice");
    const maxPriceInput = document.getElementById("maxPrice");
    const minPrice = parseFloat(minPriceInput.value);
    const maxPrice = parseFloat(maxPriceInput.value);
    const filteredItems = items.filter(item => item.price >= minPrice && item.price <= maxPrice);
    displayFilteredItems(filteredItems);
  }
  
  function displayFilteredItems(filteredItems) {
    const itemsContainer = document.getElementById("itemsContainer2");
    itemsContainer.innerHTML = "";
    filteredItems.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.innerHTML = `${item.name} - ${item.price}`;
      itemsContainer.appendChild(div);
    });
  }
  
  displayItems();
  calculateTotalCost();
  filterItemsByPrice();
