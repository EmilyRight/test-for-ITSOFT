/* eslint-disable no-param-reassign */
import inactiveBtn from './description-slider';

const productionSliderBtnLeft = document.querySelector('.production__btn_left');
const productionSliderBtnRight = document.querySelector('.production__btn_right');
const productionSlider = document.querySelector('.production-video-slider');
const productionSliderContainer = document.querySelector('.production-video-slider__inner');
const productionSliderItems = document.querySelectorAll('.production-video-slider__item');
const movingRightOffset = document.querySelector('.slider-item_inactive').clientWidth;
const movingLeftOffset = document.querySelector('.slider-item_active').clientWidth;
const productionSliderItemsLength = productionSliderItems.length;
const playBtn = document.querySelectorAll('.play-btn');
const videoList = document.querySelectorAll('.slider-item__video');
let isVideoPlayed = false;
let steps = 0;

export default function findGap(movingOffset) {
  const activeItemOffset = document.querySelector('.slider-item_active').clientWidth;
  const gap = productionSlider.clientWidth - movingOffset - activeItemOffset;
  return gap;
}

function moveVideoToLeft(movingWidth, container) {
  let activeSliderItem = document.querySelector('.slider-item_active');
  let activeSliderItemIndex = Array.from(productionSliderItems).indexOf(activeSliderItem);
  const inactiveSliderItem = document.querySelector('.slider-item_inactive');

  const gap = findGap(movingLeftOffset);
  if (Math.abs(steps) !== 0) {
    steps += 1;
    container.style.left = `calc(${steps * (movingWidth + gap)}px)`;
    activeSliderItem.classList.remove('slider-item_active');
    inactiveSliderItem.classList.remove('slider-item_inactive');
    productionSliderItems[activeSliderItemIndex - 2].classList.add('slider-item_inactive');
    productionSliderItems[activeSliderItemIndex - 1].classList.add('slider-item_active');
    activeSliderItem = document.querySelector('.slider-item_active');
    activeSliderItemIndex = Array.from(productionSliderItems).indexOf(activeSliderItem);
    inactiveBtn(2);
  } else {
    container.style.left = '0';
  }
}

function moveVideoToRight(movingWidth, container) {
  let activeSliderItem = document.querySelector('.slider-item_active');
  let activeSliderItemIndex = Array.from(productionSliderItems).indexOf(activeSliderItem);
  const inactiveSliderItem = document.querySelector('.slider-item_inactive');
  const gap = findGap(movingRightOffset);
  if (Math.abs(steps) !== productionSliderItemsLength - 2) {
    steps -= 1;
    container.style.left = `calc(${steps * (movingWidth + gap)}px`;
    inactiveSliderItem.classList.remove('slider-item_inactive');
    activeSliderItem.classList.remove('slider-item_active');
    activeSliderItem.classList.add('slider-item_inactive');
    productionSliderItems[activeSliderItemIndex + 1].classList.add('slider-item_active');
    activeSliderItem = document.querySelector('.slider-item_active');
    activeSliderItemIndex = Array.from(productionSliderItems).indexOf(activeSliderItem);
    inactiveBtn(2);
  } else {
    container.style.left = `calc(${(-productionSliderItemsLength + 2) * (movingWidth + gap)}px`;
  }
}

function playVideo(event) {
  const pressedButton = event.target;
  const btnIndex = Array.from(playBtn).indexOf(pressedButton);
  const currentVideo = videoList[btnIndex];
  if (!isVideoPlayed) {
    currentVideo.play();
    isVideoPlayed = true;
    pressedButton.style.display = 'none';
  }
}

function pauseVideo(event) {
  const currentVideo = event.target;
  const play = currentVideo.nextElementSibling;
  if (isVideoPlayed) {
    currentVideo.pause();
    play.style.display = 'block';
    isVideoPlayed = false;
  }
}
productionSliderBtnLeft.addEventListener('click', () => { moveVideoToLeft(movingLeftOffset, productionSliderContainer); });
productionSliderBtnRight.addEventListener('click', () => { moveVideoToRight(movingRightOffset, productionSliderContainer); });
playBtn.forEach((btn) => btn.addEventListener('click', playVideo));
videoList.forEach((video) => video.addEventListener('click', pauseVideo));
