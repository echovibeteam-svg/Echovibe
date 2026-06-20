const audio = document.getElementById('global-audio-element');
const playPauseBtn = document.getElementById('play-pause-btn');
const currentTitle = document.getElementById('current-title');
const currentArtist = document.getElementById('current-artist');
const currentArt = document.getElementById('current-art');
const progressBar = document.getElementById('audio-progress');
const loginModal = document.getElementById('login-modal');

// Track Loading Feature
function loadTrack(url, title, artist, artUrl) {
  audio.src = url;
  currentTitle.textContent = title;
  currentArtist.textContent = artist;
  currentArt.src = artUrl;
  
  audio.play();
  playPauseBtn.textContent = '⏸ Pause';
}

// Global Play & Pause
function togglePlay() {
  if (!audio.src) return; // Ignore if no track loaded
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '⏸ Pause';
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶ Play';
  }
}

// Update Timeline Progress Bar
audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percentage}%`;
  }
});

// Click Timeline to Skip Forward/Backward
function seekAudio(event) {
  if (!audio.src || !audio.duration) return;
  const container = event.currentTarget;
  const clickX = event.offsetX;
  const width = container.clientWidth;
  audio.currentTime = (clickX / width) * audio.duration;
}

// Modal Pop-up Display Tweaks
function openLoginModal() {
  loginModal.classList.add('open');
}

function closeLoginModal() {
  loginModal.classList.remove('open');
}

// Fake login handler submission
function handleLogin(event) {
  event.preventDefault();
  alert('Success! Welcome to EchoVibe Collective.');
  closeLoginModal();
}
