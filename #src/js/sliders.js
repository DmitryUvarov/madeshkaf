// BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('_swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('_gallery')) {
            // slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar = sliderScrollItems.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observerParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                spanOnRelease: false
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


function sliders_bild_callback(params) { }

if (document.querySelector('.tabs-slider1 .tabs__swiper-body')) {
    new Swiper('.tabs-slider1 .tabs__swiper-body', {
        observer: true,
        observerParents: true,
        spaceBetween: 30,
        slidesPerView: "auto",
        watchOverflow: true,
        speed: 800,
        loop: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        // Dotts
        /*pagination: {
            el: '.tabs-slider1 .controls-slider-main__dotts',
            clickable: true,
        },*/
        // Arrows
        navigation: {
            nextEl: '.tabs-slider1 .slider-arrow_next',
            prevEl: '.tabs-slider1 .slider-arrow_prev',
        },
        breakpoints: {
            1275: {
                slidesPerView: 2.147,
            },
            992: {
                slidesPerView: 2,
            },
        },
    });
}
if (document.querySelector('.tabs-slider2 .tabs__swiper-body')) {
    new Swiper('.tabs-slider2 .tabs__swiper-body', {
        observer: true,
        observerParents: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        watchOverflow: true,
        speed: 800,
        loop: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        // Dotts
        /*pagination: {
            el: '.tabs-slider1 .controls-slider-main__dotts',
            clickable: true,
        },*/
        // Arrows
        navigation: {
            nextEl: '.tabs-slider2 .slider-arrow_next',
            prevEl: '.tabs-slider2 .slider-arrow_prev',
        },
        breakpoints: {
            1275: {
                slidesPerView: 2.147,
            },
            992: {
                slidesPerView: 2,
            },
        },
    });
}
if (document.querySelector('.slider-reviews .slider-reviews__body')) {
    new Swiper('.slider-reviews .slider-reviews__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 1,
        spaceBetween: 30,
        watchOverflow: true,
        speed: 800,
        loop: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        // Dotts
        pagination: {
            el: '.slider-reviews .slider-pagination',
            clickable: true,
        },
        // Arrows
        navigation: {
            nextEl: '.slider-reviews .slider-arrow_next',
            prevEl: '.slider-reviews .slider-arrow_prev',
        },
    });
}


/*
if (document.querySelector('.slider-tips__body')) {
    new Swiper('.slider-tips__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 3,
        spaceBetween: 32,
        watchOverflow: true,
        speed: 800,
        loop: true,
        watchOverflow: true,
        // Dotts
        pagination: {
            el: '.slider-tips__dotts',
            clickable: true,
        },
        // Arrows
        navigation: {
            nextEl: '.slider-tips .slider-arrow_next',
            prevEl: '.slider-tips .slider-arrow_prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.1,
                spaceBetween: 15
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 32
            },
        }
    });
}

*/