"use strict";
let nav = document.getElementById("nav");
let navToggler = document.getElementById("nav-toggle");

// showing the navbar after scrolling
window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    nav.classList.add("shrink");
    nav.classList.remove("bg-zinc-800");
    nav.classList.remove("sm:bg-transparent");
  } else {
    nav.classList.remove("shrink");
    // nav.classList.add("bg-zinc-800");
  }
}

// toggling the navbar
// navToggler.addEventListener("click", () => {});

// thos is for scrollspy navbar

// let pages = document.querySelectorAll(".scrollspy");
// let links = document.querySelectorAll(".links");
// window.onscroll = () => {
//   pages.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       links.forEach((link) => {
//         link.classList.remove("active");
//         document
//           .querySelector("links[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };

function showModal() {
  document.getElementById("myModal").classList.remove("hidden");
  document.getElementById("myModal").classList.add("block");
}
