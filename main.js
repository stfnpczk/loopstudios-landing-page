const hamburger = document.getElementById("hamburger");
const navItems =document.querySelector(".header__nav-items");

const toggleNavigation = () => {
    hamburger.classList.toggle("header__hamburger--active");
    navItems.classList.toggle("show");
  };
  
  hamburger.addEventListener("click", toggleNavigation);