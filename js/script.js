/* slider */
var swiper = new Swiper(".homeSwiper", {
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    pagination: {
        el: ".homeSwiper .swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".homeSwiper .swiper-button-next",
        prevEl: ".homeSwiper .swiper-button-prev",
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

/* features slider */
var swiper = new Swiper(".featuresSwiper", {
  slidesPerView: 3,
  spaceBetween: 90,
  loop: true,
  pagination: {
    el: ".featuresSwiper .swiper-pagination",
    clickable: true,
    type: "fraction",
  },
});



