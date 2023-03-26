const first = document.querySelector(".second-section__swiper-slide.swiper-slide:nth-child(1)");
const second = document.querySelector(".second-section__swiper-slide.swiper-slide:nth-child(2)");
const third = document.querySelector(".second-section__swiper-slide.swiper-slide:nth-child(3)");


document.addEventListener("DOMContentLoaded", function () {

    const tragetEl = document.querySelector(".second-section__swiper .swiper-slide-active");

    function callback(mutations, observer) {

        if (first.classList.contains("swiper-slide-active")) {
            document.getElementById('slide_1').classList.add("active");
            document.getElementById('slide_2').classList.remove("active");
            document.getElementById('slide_3').classList.remove("active");
        };

        if (second.classList.contains("swiper-slide-active")) {
            document.getElementById('slide_2').classList.add("active");
            document.getElementById('slide_1').classList.remove("active");
            document.getElementById('slide_3').classList.remove("active");
        };

        if (third.classList.contains("swiper-slide-active")) {
            document.getElementById('slide_3').classList.add("active");
            document.getElementById('slide_1').classList.remove("active");
            document.getElementById('slide_2').classList.remove("active");
        };
    }

    const observer = new MutationObserver(callback);

    observer.observe(tragetEl, {
        childList: true,
        attributes: true,
        characterData: true,
    });
});