document.addEventListener("DOMContentLoaded", function () {
    let parallaxText = document.getElementById("parallaxText");
  
    window.addEventListener("scroll", function () {
      let scrollPosition = window.scrollY;
      parallaxText.style.transform = `translateY(${Math.max(
        500,
        scrollPosition * 0.7 - 1900
      )}px)`;
    });
  });

