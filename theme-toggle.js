document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("theme-toggle");
  var body = document.body;

  var savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    toggle.checked = true;
  } else {
    body.classList.remove("light-mode");
    toggle.checked = false;
  }

  toggle.addEventListener("change", function () {
    var isLight = toggle.checked;
    body.classList.toggle("light-mode", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});
