const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// let lastScrollTop = 0;
// const mainMenu = $(".sub_menu");

// window.addEventListener("scroll", () => {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   scrollTop > lastScroll
//     ? (mainMenu.style.top = "-55.5")
//     : (mainMenu.style.top = "0");
//   lastScroll = scrollTop;
// });

// carousel

const momentItem = $$(".carousel-item");
const moment = $(".carousel");

// const size = momentItem[0].clientWidth;

// function slider() {
//   // let counter = 1;

//   if (counter < momentItem.length) {
//     for (let i = 1; i < momentItem.length; i++) {
//       moment.style.transform = `translateX(${i * -100}%)`;
//     }
//   } else {
//     counter = 1;
//   }
// }

let counter = 0;
setInterval(() => {
  if (counter < momentItem.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  moment.style.transform = `translateX(${counter * -100}%)`;
}, 5000);
