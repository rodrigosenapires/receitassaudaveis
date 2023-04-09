const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = '&#10074;&#10074;';
  } else {
    audio.pause();
    playPauseButton.innerHTML = '&#9658;';
  }
});

audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progressPercentage = (currentTime / duration) * 100;
  progress.style.width = progressPercentage + '%';
});

progressContainer.addEventListener('click', (event) => {
  const offsetX = event.clientX - progressContainer.getBoundingClientRect().left;
  const percentage = offsetX / progressContainer.clientWidth;
  const newTime = percentage * audio.duration;
  audio.currentTime = newTime;
});
