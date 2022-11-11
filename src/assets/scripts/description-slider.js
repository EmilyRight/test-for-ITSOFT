const sliderItems = document.querySelectorAll('.slider__item');
const sliderContainer = document.querySelector('.slider');
const sliderContainerInner = document.querySelector('.slider__inner');
const descriptionSliderBtnLeft = document.querySelector('.description__btn_left');
const descriptionSliderBtnRight = document.querySelector('.description__btn_right');
const slidersLength = sliderItems.length;
let clicks = 0;

function inactiveBtn() {
  if (Math.abs(clicks) === slidersLength - 1) {
    descriptionSliderBtnRight.classList.add('btn_inactive');
  } else {
    descriptionSliderBtnRight.classList.remove('btn_inactive');
  }
  if (Math.abs(clicks) === 0) {
    descriptionSliderBtnLeft.classList.add('btn_inactive');
  } else {
    descriptionSliderBtnLeft.classList.remove('btn_inactive');
  }
}
function moveToLeft() {
  const sliderWidth = sliderContainer.clientWidth;
  if (Math.abs(clicks) !== 0) {
    clicks += 1;
    sliderContainerInner.style.left = `calc(${clicks * sliderWidth}px - 1rem)`;
    inactiveBtn();
  } else {
    sliderContainerInner.style.left = '0';
  }
}

function moveToRight() {
  const sliderWidth = sliderContainer.clientWidth;
  if (Math.abs(clicks) !== slidersLength - 1) {
    clicks -= 1;
    sliderContainerInner.style.left = `calc(${clicks * sliderWidth}px - 1rem)`;
    inactiveBtn();
  } else {
    sliderContainerInner.style.left = `calc(${(-slidersLength + 1) * sliderWidth}px - 1rem)`;
  }
}

descriptionSliderBtnLeft.addEventListener('click', moveToLeft);
descriptionSliderBtnRight.addEventListener('click', moveToRight);
