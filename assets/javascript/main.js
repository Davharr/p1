// Tampilkan tombol ketika pengguna menggulir ke bawah
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

// Kembali ke atas ketika tombol diklik
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

