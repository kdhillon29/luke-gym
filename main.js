const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector(".navbar__logo");
const body = document.querySelector("body");

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

//animations

gsap.registerPlugin(ScrollTrigger);
gsap.from(".animate-hero", {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3,
});
// gsap.from(".a-serv", {
//   scrollTrigger: ".a-serv",
//   duration: 0.2,
//   opacity: 0,
//   x: -300,
//   delay: 0.1,
// });
gsap.from(".a-services", {
  scrollTrigger: ".a-services",
  duration: 0.4,
  opacity: 0,
  x: -300,
  stagger: 0.2,
  delay: 0.2,
});
gsap.from(".a-img", {
  scrollTrigger: ".a-img",
  duration: 1,
  opacity: 0,
  x: -150,
  delay: 0.4,
});
gsap.from(".a-membership", {
  scrollTrigger: ".a-membership",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.1,
  delay: 0.6,
});
gsap.from(".a-card", {
  scrollTrigger: ".a-card",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.1,
  delay: 0.6,
});
gsap.from(".a-team", {
  scrollTrigger: ".a-team",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.6,
});
gsap.from(".a-email", {
  scrollTrigger: ".a-email",
  duration: 0.8,
  opacity: 0,
  y: -150,
  stagger: 0.25,
  delay: 0.6,
});
