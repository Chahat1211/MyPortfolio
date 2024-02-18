var typed= new Typed(".text",{
    strings: ["Frontend Developer", "Programmer", "ECE Engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});
let navbar = document.querySelector('.navbar');
let menubtn = document.querySelector('#menu-btn');

menubtn.onclick = () => {
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}