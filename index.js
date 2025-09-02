togglebtn = document.querySelector(".hamburger");
togglebtn.onclick = function(){
    navbar = document.querySelector(".nav-links");
    navbar.classList.toggle("active");
}

const swiper = new Swiper('.swiper',{
    loop:true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});