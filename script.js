let toggle = document.querySelectorAll(
  ".toggle-icon"
);
let logo =document.querySelector('.nav_logo img')
let button=document.querySelectorAll('button')
let icons = document.querySelectorAll(".toggle-icon");
let body = document.querySelector("body");

let hamburger=document.querySelector('.hamburger-menu .burger-menu')
hamburger.addEventListener('click',()=>{
  let nav_meu=document.querySelector('.nav-links')
  nav_meu.classList.toggle('active')
})
toggle.forEach(toggle=>{

  toggle.addEventListener("click", (e) => {
    body.classList.toggle('active')
    let icon=icons
    console.log(icon)
    icons.forEach((icon)=>{
      console.log(icon.firstElementChild)
      if(icon.firstElementChild.classList.contains('bi-sun')){
        icon.firstElementChild.classList.replace('bi-sun','bi-moon')
        logo.src='web-development.png'
      }else if(icon.firstElementChild.classList.contains('bi-moon')){
        icon.firstElementChild.classList.replace('bi-moon','bi-sun')
        logo.src='application.png'
      }
    })
    
  });
  
})