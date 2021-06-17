const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

document.querySelector("#year").innerText = new Date().getFullYear();

const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

// document.addEventListener('scroll', () => {
//   const scroll_position = window.screenY;
//   if (scroll_position > 250) {
//     header.style.backgroundColor = 'red';
//   } else {
//     header.style.backgroundColor = 'transparent';
//   }
// });
