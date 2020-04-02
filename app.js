var navbarHeader = document.getElementById("navbar-header");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 0) {
    navbarHeader.classList.add("show-box-shadow");
  } else navbarHeader.classList.remove("show-box-shadow");
});
