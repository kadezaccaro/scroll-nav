const navbar = document.getElementById("nav");
const linksContainer = document.querySelector(".nav-links-container");
const links = document.querySelector(".nav-links");
const navToggle = document.querySelector(".nav-toggle");
const slidingNavbar = document.getElementById("sliding-nav");
const backToTop = document.querySelector(".back-to-top");
const date = document.getElementById("date");

navToggle.addEventListener("click", () => {
  // navLinksContainer.classList.toggle("show-nav-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  // Dynamically toggle navbar based on links instead of hard coded px value
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;
  // Reveal sliding navbar after the dynamic height of main navbar
  if (scrollHeight > navbarHeight) {
    slidingNavbar.style.top = "0";
  } else {
    slidingNavbar.style.top = "-50px";
  }
  // Reveal back-to-top button
  if (scrollHeight > 400) {
    backToTop.style.bottom = "4%";
  } else {
    backToTop.style.bottom = "-100%";
  }
});

// Change year automatically
date.innerHTML = new Date().getFullYear();
