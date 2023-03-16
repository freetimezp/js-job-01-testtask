/* slider */
var swiper = new Swiper(".homeSwiper", {
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* menu active */

const menuItems = document.querySelectorAll(".menu__list-item");

menuItems.forEach(el => el.addEventListener("click", function() {
    if(el.classList.contains('active')) {
        el.classList.remove('active');
    }else{
        menuItems.forEach(el => el.classList.remove("active"));
        el.classList.add('active');
    }
}))


