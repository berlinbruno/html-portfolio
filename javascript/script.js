function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const logo = document.querySelectorAll(".nav-logo-pic");
const currentTheme = localStorage.getItem("theme");
if(currentTheme === "dark"){
  setDarkMode();
}
btn.addEventListener("click", function() {
  setTheme();
} );

btn2.addEventListener("click", function() {
  setTheme();
} );

function setTheme(){
  let currentTheme = document.body.getAttribute("theme");

  if(currentTheme === "dark"){
    setLightMode();

    
  pJSDom[0].pJS.particles.color.value = '#000000';
  pJSDom[0].pJS.particles.line_linked.color = '#000000';
  pJSDom[0].pJS.fn.particlesRefresh();
    
  }else{
    setDarkMode();
    
    pJSDom[0].pJS.particles.color.value = '#ffffff';
    pJSDom[0].pJS.particles.line_linked.color = '#ffffff';
    pJSDom[0].pJS.fn.particlesRefresh();
    
  }
}

function setDarkMode(){
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");
  
  themeIcons.forEach(icon => {

    icon.src = icon.getAttribute("src-dark");
    
  });

  logo.forEach(icon => {

    icon.src = icon.getAttribute("src-dark");
    
  });

}

function setLightMode(){

  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");


  themeIcons.forEach(icon => {

    icon.src = icon.getAttribute("src-light");
    
  });

  logo.forEach(icon => {

    icon.src = icon.getAttribute("src-light");
    
  });


}
