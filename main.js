const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav_list');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});

$(".nav-link-adjust").click(function(){
    $(".background").toggleClass("dark_mode");
  })


   var icon = document.getElementById("icon");

   icon.onclick = function (){
       document.body.classList.toggle("dark-theme");
       if(document.body.classList.contains("dark-theme")){
           icon.src = "img/sun.png";
       }else{
           icon.src = "img/moon.svg";
       }
    }
