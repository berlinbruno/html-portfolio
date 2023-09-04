function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
  setLightMode();
  pJSDom[0].pJS.particles.color.value = "#000000";
  pJSDom[0].pJS.particles.line_linked.color = "#000000";
  pJSDom[0].pJS.fn.particlesRefresh();
}
btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "light") {
    setDarkMode();

    pJSDom[0].pJS.particles.color.value = "#ffffff";
    pJSDom[0].pJS.particles.line_linked.color = "#ffffff";
    pJSDom[0].pJS.fn.particlesRefresh();
  } else {
    setLightMode();

    pJSDom[0].pJS.particles.color.value = "#000000";
    pJSDom[0].pJS.particles.line_linked.color = "#000000";
    pJSDom[0].pJS.fn.particlesRefresh();
  }
}

function setDarkMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.className = icon.getAttribute("dark");
  });
}

function setLightMode() {
  document.body.setAttribute("theme", "light");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.className = icon.getAttribute("light");
  });
}
