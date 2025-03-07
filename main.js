const audio = document.getElementById('audio');

// Fungsi untuk memutar audio
function playAudio() {
  audio.play();
}

// Fungsi untuk menghentikan audio
function stopAudio() {
  audio.pause();
}

// Memutar audio secara otomatis saat halaman dimuat
window.addEventListener('load', playAudio);
