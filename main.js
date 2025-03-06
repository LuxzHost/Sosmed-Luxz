// Memilih elemen audio
var audio = document.getElementById("audio");

// Memutar audio secara otomatis saat halaman web dimuat
window.onload = function() {
  audio.play();
};

// Mengatasi masalah autoplay di beberapa browser
audio.addEventListener("canplay", function() {
  audio.play();
});
