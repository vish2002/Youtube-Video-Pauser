function pauseYouTubeVideo() {
  const video = document.querySelector('video');
  if (video) {
    video.pause();
  }
}

function resumeYouTubeVideo() {
  const video = document.querySelector('video');
  if (video && video.paused) {
    video.play();
  }
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    pauseYouTubeVideo();
  } else {
    resumeYouTubeVideo();
  }
});
