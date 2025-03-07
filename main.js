const audio = document.getElementById('background-audio');

// Memutar audio saat halaman dimuat
window.onload = function() {
  audio.play();
}

// Memastikan audio terus berjalan di latar belakang
audio.addEventListener('ended', function() {
  audio.play();
});
