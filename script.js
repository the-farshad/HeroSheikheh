function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to open full-size image
function openFullSize(src) {
  var overlay = document.getElementById("fullSizeImageOverlay");
  var fullSizeImage = document.getElementById("fullSizeImage");
  fullSizeImage.src = src;
  overlay.style.display = "flex";
}

// Function to close full-size image
function closeFullSize() {
  var overlay = document.getElementById("fullSizeImageOverlay");
  overlay.style.display = "none";
}
