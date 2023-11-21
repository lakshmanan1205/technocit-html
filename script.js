// const leftValue = 300; // Change this value to the first value
// const rightValue = 150; // Change this value to the second value

// const progressBar = document.getElementById("progressBar");
// const progressCircle = progressBar.querySelector(".progress-circle");

// const calculatePercentage = (value, total) => (value / total) * 360;

// const leftPercentage = calculatePercentage(leftValue, leftValue + rightValue);

// progressCircle.style.background = `conic-gradient(from -90deg, #dceaff ${leftPercentage}deg, #032555 0)`;

// document.querySelectorAll(".progress-value .value")[0].innerText = leftValue;
// document.querySelectorAll(".progress-value .value")[1].innerText = rightValue;

// LAZY LOADING
(function () {
  console.log("run");
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const lazyImageObserver = new IntersectionObserver(function (
    entries,
    observer
  ) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.removeAttribute("loading");
        lazyImageObserver.unobserve(lazyImage);
      }
    });
  });

  lazyImages.forEach(function (lazyImage) {
    lazyImageObserver.observe(lazyImage);
  });
})();

// SMOOTH SCROLLING
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const yOffset = -80; // Adjust the offset as needed
        const targetOffset =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({
          top: targetOffset,
          behavior: "smooth", // Smooth scroll behavior
        });
      }
    });
  });
});
