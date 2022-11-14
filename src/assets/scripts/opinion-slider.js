/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
const paginationList = document.querySelectorAll('.opinion-slider-pagination__item');
const currentVideo = document.querySelector('.opinion-slider__video');
const opinionPlayBtn = document.querySelector('.opinion__play-btn');
let isOpinionVideoPlayed = false;
const opinionSliderContainer = document.querySelector('.opinion-slider');
const sources = [
  './assets/video/sample-30s.mp4',
  '../assets/video/sample-5s.mp4',
  './assets/video/sample-30s.mp4',
];

function setActive(array) {
  array.forEach((el) => {
    if (el.classList.contains('pagination__item_active')) {
      el.classList.remove('pagination__item_active');
      el.style.animation = 'none';
    }
  });
}
let i = 0;
const frames = paginationList.length;
const autoPlay = setInterval(() => {
  if (!isOpinionVideoPlayed) {
    setActive(Array.from(paginationList));
    paginationList[i].classList.add('pagination__item_active');
    paginationList[i].style.animation = 'fadePagination ease-in-out 4s infinite';
    console.log(paginationList[i].style.animation);
    currentVideo.src = sources[i];
    currentVideo.style.animation = 'fadeVideo ease-in-out 4s infinite';
    i += 1;
    if (i === frames) {
      i = 0;
    }
  } else {
    autoPlay.clearInterval();
  }
}, 4000);

function setNewVideo(event) {
  const paginationItem = event.target;
  const paginationItemIndex = Array.from(paginationList).indexOf(paginationItem);
  setActive(Array.from(paginationList));
  paginationItem.classList.add('pagination__item_active');
  currentVideo.style.animation = 'none';
  currentVideo.src = sources[paginationItemIndex];
  // currentVideo.style.opacity = '1';
}

function playOpinionVideo(event) {
  const playButton = event.target;
  if (!isOpinionVideoPlayed) {
    currentVideo.play();
    isOpinionVideoPlayed = true;
    playButton.style.display = 'none';
  }
}

function pauseOpinionVideo() {
  const play = currentVideo.nextElementSibling;
  if (isOpinionVideoPlayed) {
    currentVideo.pause();
    play.style.display = 'block';
    isOpinionVideoPlayed = false;
  }
}

paginationList.forEach((btn) => btn.addEventListener('click', setNewVideo));
opinionPlayBtn.addEventListener('click', playOpinionVideo);
currentVideo.addEventListener('click', pauseOpinionVideo);
