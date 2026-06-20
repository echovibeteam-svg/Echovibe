const audio = document.getElementById('main-audio');
const playBtn = document.getElementById('play-btn');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playerArt = document.getElementById('player-art');

function loadTrack(url, title, artist, artUrl) {
  audio.src = url;
  playerTitle.textContent = title;
  playerArtist.textContent = artist;
  playerArt.src = artUrl;
  
  audio.play();
  playBtn.textContent = '⏸ Pause';
}

function togglePlay() {
  if (!audio.src) return;
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸ Pause';
  } else {
    audio.pause();
    playBtn.textContent = '▶ Play';
  }
}
