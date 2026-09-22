// Highlights the sidebar nav link matching whichever section is in view.
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".side-nav a");
  var sections = Array.prototype.map.call(links, function (link) {
    var id = link.getAttribute("href").replace("#", "");
    return document.getElementById(id);
  });

  function setActive() {
    var scrollPos = window.scrollY + 120;
    var current = sections[0];
    sections.forEach(function (section) {
      if (section && section.offsetTop <= scrollPos) current = section;
    });
    links.forEach(function (link) {
      link.classList.toggle("active", current && link.getAttribute("href") === "#" + current.id);
    });
  }

  window.addEventListener("scroll", setActive);
  setActive();
});
