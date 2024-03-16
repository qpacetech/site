function menuclick() {
  var menu = document.getElementById("mobileMenu");
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
function themeclick() {
  var ib = document.getElementById("icon_bright");
  var id = document.getElementById("icon_dark");
  if (ib.style.display == "block") {
    ib.style.display = "none";
    id.style.display = "block";
    document.documentElement.className = "theme_bright";
  } else {
    id.style.display = "none";
    ib.style.display = "block";
    document.documentElement.className = "theme_dark";
  }
}
