var icon = document.getElementById("icon");

   icon.onclick = function (){
       document.body.classList.toggle("dark-theme");
       if(document.body.classList.contains("dark-theme")){
           icon.src = "img/sun.png";
       }else{
           icon.src = "img/moon.svg";
       }
    };

    const hamburger = document.getElementById('hamburger');
    const navUL = document.getElementById('nav-ul');

    hamburger.addEventListener('click', () => {
        navUL.classList.toggle('show');
    }
    );