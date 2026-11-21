// SEWELA Consultants — small interactions
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu open/close
  var button = document.querySelector(".menu-btn");
  var menu = document.querySelector(".mobile-nav");
  var openIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
  var closeIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  if (button && menu) {
    button.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      button.setAttribute("aria-expanded", isOpen);
      button.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      button.innerHTML = isOpen ? closeIcon : openIcon;
    });
  }

  // Highlight the current page in the menu
  var page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a, .mobile-nav a").forEach(function (link) {
    if (link.getAttribute("href") === page) link.classList.add("active");
  });

  // Current year in the footer
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
