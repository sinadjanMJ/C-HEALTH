const navicon = document.querySelector(".frvmfiline");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

navicon.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    navicon.classList.toggle("toggle");
});
