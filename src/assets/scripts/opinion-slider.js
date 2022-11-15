/* eslint-disable no-param-reassign */
/* eslint-disable no-loop-func */
const paginationList = document.querySelectorAll('.opinion-slider-pagination__item');
const currentVideo = document.querySelector('.opinion-slider__video');
const opinionPlayBtn = document.querySelector('.opinion__play-btn');
let isOpinionVideoPlayed = false;
let isAutoPlay = true;
let sliders;
let currentVideoIndex = 0;
const frames = paginationList.length;
const sources = [
  './assets/video/sample-30s.mp4',
  './assets/video/sample-5s.mp4',
  './assets/video/sample-30s_copy.mp4',
];

function findIndex() {
  const paths = [];
  sources.forEach((el) => paths.push(`http://localhost:3000/${el.slice(2)}`));
  return (paths);
}

function setActive(array) {
  array.forEach((el) => {
    if (el.classList.contains('pagination__item_active')) {
      el.classList.remove('pagination__item_active');
      el.style.animation = 'none';
    }
  });
}

function autoPlay() {
  sliders = setInterval(() => {
    if (isAutoPlay) {
      setActive(Array.from(paginationList));
      paginationList[currentVideoIndex].classList.add('pagination__item_active');
      paginationList[currentVideoIndex].style.animation = 'fadePagination ease-in-out 4s infinite';
      currentVideo.src = sources[currentVideoIndex];
      currentVideo.style.animation = 'fadeVideo ease-in-out 4s infinite';
      currentVideoIndex += 1;
      if (currentVideoIndex === frames) {
        currentVideoIndex = 0;
      }
    }
    paginationList[currentVideoIndex].style.animation = 'none';
    currentVideo.style.animation = 'none';
  }, 4000);
}

function showPlayBtn() {
  const btn = currentVideo.nextElementSibling;
  if (!isOpinionVideoPlayed) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}

function setNewVideo(event) {
  isOpinionVideoPlayed = false;
  isAutoPlay = false;
  clearInterval(sliders);
  const paginationItem = event.target;
  const paginationItemIndex = Array.from(paginationList).indexOf(paginationItem);
  setActive(Array.from(paginationList));
  paginationItem.classList.add('pagination__item_active');
  paginationItem.style.animation = 'none';
  currentVideo.style.animation = 'none';
  currentVideo.pause();
  currentVideo.src = sources[paginationItemIndex];
  showPlayBtn();
}

function playOpinionVideo() {
  const fullPaths = findIndex();
  const paginationItemIndex = fullPaths.indexOf(currentVideo.src);
  const paginationItem = paginationList[paginationItemIndex];
  isAutoPlay = false;
  if (!isOpinionVideoPlayed) {
    isOpinionVideoPlayed = true;
    currentVideo.play();
    paginationItem.style.animation = 'none';
    showPlayBtn();
  }
}

function pauseOpinionVideo() {
  isAutoPlay = true;
  if (isOpinionVideoPlayed) {
    currentVideo.pause();
    isOpinionVideoPlayed = false;
    showPlayBtn();
    clearInterval(sliders);
    autoPlay();
  }
}

paginationList.forEach((btn) => btn.addEventListener('click', setNewVideo));
opinionPlayBtn.addEventListener('click', playOpinionVideo);
currentVideo.addEventListener('click', pauseOpinionVideo);
currentVideo.addEventListener('ended', () => {
  clearInterval(sliders);
  isOpinionVideoPlayed = false;
  isAutoPlay = true;
  showPlayBtn(currentVideo);
  autoPlay();
});

window.onload = function () {
  autoPlay();
};
