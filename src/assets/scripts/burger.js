/* eslint-disable no-param-reassign */
const hiddenIcons = document.querySelectorAll('.icon_hidden');
const burger = document.querySelector('.burger');
const pseudoBurger = document.querySelector('.burger_pseudo');
const navBar = document.querySelector('.header__nav');

function openBurgerNav() {
  navBar.style.left = 0;
  hiddenIcons.forEach((icon) => {
    icon.style.display = 'none';
  });
  burger.style.display = 'none';
  pseudoBurger.style.display = 'block';
}

function closeBurgerNav() {
  navBar.style.left = '-140%';
  hiddenIcons.forEach((icon) => {
    icon.style.display = 'block';
  });
  burger.style.display = 'block';
  pseudoBurger.style.display = 'none';
}

burger.addEventListener('click', openBurgerNav);
pseudoBurger.addEventListener('click', closeBurgerNav);
