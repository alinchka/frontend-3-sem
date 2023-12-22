document.addEventListener("DOMContentLoaded", function () {
  let container = document.createElement("div");
  container.style.position = "absolute";
  container.style.width = "200px"; // задайте нужную ширину
  container.style.height = "200px"; // задайте нужную высоту
  container.style.backgroundColor = "purple"; // задайте нужный цвет фона
  document.body.appendChild(container);

  let img = document.createElement("img");
  img.setAttribute("src", "../img/bernettsad.jpg");
  img.style.width = "100px";
  img.style.height = "150px";
  img.style.position = "absolute";
  container.appendChild(img);

  function centerContainerAndImage() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let containerWidth = container.offsetWidth;
    let containerHeight = container.offsetHeight;

    let centerX = (windowWidth - containerWidth) / 2;
    let centerY = (windowHeight - containerHeight) / 2;

    container.style.left = centerX + "px";
    container.style.top = centerY + "px";

    let imgWidth = img.width;
    let imgHeight = img.height;
    let imgCenterX = (containerWidth - imgWidth) / 2;
    let imgCenterY = (containerHeight - imgHeight) / 2;

    img.style.left = imgCenterX + "px";
    img.style.top = imgCenterY + "px";
  }


  container.addEventListener("click", function (event) {
    const x = event.clientX - container.offsetLeft;
    const y = event.clientY - container.offsetTop;
    console.log(`(${x}, ${y})`);
  });
  
  centerContainerAndImage();

  window.addEventListener("resize", centerContainerAndImage);
});
