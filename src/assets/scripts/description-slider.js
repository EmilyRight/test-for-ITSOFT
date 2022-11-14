/* eslint-disable no-param-reassign */
const sliderItems = document.querySelectorAll('.slider__item');
const sliderContainer = document.querySelector('.slider');
const sliderContainerInner = document.querySelector('.slider__inner');
const descriptionSliderBtnLeft = document.querySelector('.description__btn_left');
const descriptionSliderBtnRight = document.querySelector('.description__btn_right');
const slidersLength = sliderItems.length;
const sliderWidth = sliderContainer.clientWidth;
let descriptionSliderClicks = 0;

export default function inactiveBtn(number) {
  if (Math.abs(descriptionSliderClicks) === slidersLength - number) {
    descriptionSliderBtnRight.classList.add('btn_inactive');
  } else {
    descriptionSliderBtnRight.classList.remove('btn_inactive');
  }
  if (Math.abs(descriptionSliderClicks) === 0) {
    descriptionSliderBtnLeft.classList.add('btn_inactive');
  } else {
    descriptionSliderBtnLeft.classList.remove('btn_inactive');
  }
}

function moveToLeft(movingWidth, container) {
  console.log('hey');
  console.log(movingWidth);
  if (Math.abs(descriptionSliderClicks) !== 0) {
    descriptionSliderClicks += 1;
    container.style.left = `calc(${descriptionSliderClicks * movingWidth}px - 1rem)`;
    inactiveBtn(1);
  } else {
    container.style.left = '0';
  }
}

function moveToRight(movingWidth, container) {
  if (Math.abs(descriptionSliderClicks) !== slidersLength - 1) {
    descriptionSliderClicks -= 1;
    container.style.left = `calc(${descriptionSliderClicks * movingWidth}px - 1rem)`;
    inactiveBtn(1);
  } else {
    container.style.left = `calc(${(-slidersLength + 1) * movingWidth}px - 1rem)`;
  }
}

descriptionSliderBtnLeft.addEventListener('click', () => { moveToLeft(sliderWidth, sliderContainerInner); });
descriptionSliderBtnRight.addEventListener('click', () => moveToRight(sliderWidth, sliderContainerInner));
