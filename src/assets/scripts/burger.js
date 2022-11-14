/* eslint-disable no-param-reassign */
const hiddenIcons = document.querySelectorAll('.icon_hidden');
const burger = document.querySelector('.burger');
const pseudoBurger = document.querySelector('.burger_pseudo');
const navBar = document.querySelector('.header__nav');
const wave = document.querySelector('.wave');

function openBurgerNav() {
  navBar.style.left = 0;
  hiddenIcons.forEach((icon) => {
    icon.style.display = 'none';
  });
  burger.style.display = 'none';
  pseudoBurger.style.display = 'block';
  wave.style.display = 'none';
  const prevent = (ev) => ev.preventDefault();
  document.addEventListener('wheel', prevent, { passive: false });
}

function closeBurgerNav() {
  navBar.style.left = '-140%';
  hiddenIcons.forEach((icon) => {
    icon.style.display = 'block';
  });
  wave.style.display = 'block';
  burger.style.display = 'block';
  pseudoBurger.style.display = 'none';
  const prevent = (ev) => ev.preventDefault();
  document.removeEventListener('wheel', prevent);
}

burger.addEventListener('click', openBurgerNav);
pseudoBurger.addEventListener('click', closeBurgerNav);
navBar.addEventListener('click', closeBurgerNav);
