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

menuItems.forEach(el => el.addEventListener("click", function () {
    if (el.classList.contains('active')) {
        el.classList.remove('active');
    } else {
        menuItems.forEach(el => el.classList.remove("active"));
        el.classList.add('active');
    }
}))

/* features slider */
var swiper = new Swiper(".featuresSwiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
    loop: true,
    breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 90,
        },
      },
    pagination: {
        el: ".featuresSwiper .swiper-pagination",
        clickable: true,
        type: "fraction",
    },
});


/* editor slider */
var swiper = new Swiper(".editorSwiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 15,
    pagination: {
        el: ".editor .swiper-pagination",
        dynamicBullets: true,
        type: "fraction",
    },
    navigation: {
        nextEl: ".editorSwiper .swiper-button-next",
        prevEl: ".editorSwiper .swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
      },
});

