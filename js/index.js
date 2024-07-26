const $next = document.querySelector(".next");
const $prev = document.querySelector(".prev");

$next.addEventListener("click", () => {
  const items = document.querySelectorAll(".slide-item");
  document.querySelector(".slides").appendChild(items[0]);
});

$prev.addEventListener("click", () => {
  const items = document.querySelectorAll(".slide-item");
  document.querySelector(".slides").prepend(items[items.length - 1]);
});
// Scroll Header
const header = document.querySelector(".header"); // Get the header element
const carouselSection = document.querySelector(".carousel-caption"); // Get the carousel section element
window.addEventListener("scroll", function () {
  const scrollPosition = this.document.documentElement.scrollTop; // Get the scroll position
  const carouselTop = carouselSection.offsetTop; // Get the top position of the carousel section

  if (scrollPosition >= carouselTop) {
    header.classList.add("sticky"); // Add the sticky class to the header
    console.log(scrollPosition);
  } else {
    header.classList.remove("sticky"); // Remove the sticky class from the header
  }
});
