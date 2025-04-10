document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("main").classList.add("is-ready");

    const allSections = document.querySelectorAll("section"); // Select all divs


    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                } else {
                    entry.target.classList.remove("in-view"); // Optional
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% visible
        }
    );

    allSections.forEach(div => observer.observe(div));



    const modal = document.getElementById("product-modal");
    const modalContact = document.getElementById("contact-modal");
    const videoModal = document.getElementById("videoModal");
    const openButtons = document.querySelectorAll(".product__price--item");
    const openContactModal = document.querySelector(".btn__popup");
    const closeBtn = document.querySelectorAll(".btn__close");
    const city = document.querySelector(".cities__selected");
    const cityList = document.querySelector(".cities__list");
    const searchBtn = document.querySelector(".search__open");
    const searchBtn1 = document.querySelector(".menu__box .search__open");
    const search = document.querySelector(".navbar__contacts .search__form");
    const search1 = document.querySelector(".menu__box .search__form");
    const menu__btn = document.querySelector(".menu__btn");
    const menu__btn1 = document.querySelector(".navbar .container .menu__btn");
    const menu__box  = document.querySelector(".menu__box ");
    const mainBlock  = document.querySelector("body ");


    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    });
    if (openContactModal){

        openContactModal.addEventListener("click", () => {
            modalContact.style.display = "flex";

        });
    }
    if (searchBtn){

        searchBtn.addEventListener("click", () => {
            console.log(search)
            search.style.display = "flex";
            searchBtn.style.display = "none"

        });
    }
    if (searchBtn1){

        searchBtn1.addEventListener("click", () => {
            search1.style.display = "flex";
            searchBtn1.style.display = "none"

        });
    }
    menu__btn.addEventListener("click", () => {

        if (menu__box.classList.contains('open')) {
            mainBlock.classList.remove("no-scroll")
            menu__box.classList.remove('open');
        } else {
            menu__box.classList.add("open");
            mainBlock.classList.add("no-scroll")
        }

    });
    menu__btn1.addEventListener("click", () => {

        if (menu__box.classList.contains('open')) {
            mainBlock.classList.remove("no-scroll")
            menu__box.classList.remove('open');
        } else {
            menu__box.classList.add("open");
            mainBlock.classList.add("no-scroll")
        }

    });
    city.addEventListener("click", () => {
        if (city.classList.contains('open')) {
            cityList.style.display = "none";
            city.classList.remove('open');
        } else {
            city.classList.add("open");
            cityList.style.display = "flex";
        }

    });
    closeBtn.forEach(button => {

        button.addEventListener("click", () => {
            if (modalContact){
                modalContact.style.display = "none";

            }
            if (modal){
                modal.style.display = "none";

            }
            if(videoModal){
                const video = document.querySelector('#videoContent video');
                if (video) {
                    video.pause();
                    video.currentTime = 0;
                }
                videoModal.style.display = "none";
            }

        });
    });
    // closeBtn.addEventListener("click", () => {
    //
    //     modalContact.style.display = "none";
    //     modal.style.display = "none";
    //
    // });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";

        }
        if (event.target === modalContact) {
            modalContact.style.display = "none";

        }
        if (event.target !== city ) {
            cityList.style.display = "none";
            city.classList.remove("open");


        }
        if (event.target === videoModal ) {
            const video = document.querySelector('#videoContent video');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
            videoModal.style.display = "none";

        }
    });

    const swiper = new Swiper(".about__slider", {
        centeredSlides: true,
        loop: true,
        loopAdditionalSlides: 2,
        slidesPerView: "1.5",
        slideClass: "about__slider--item",

        spaceBetween: 24,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: true
        // },

        navigation: {
            nextEl: ".btn__next",
            prevEl: ".btn__prev",
        },
        breakpoints: {
            0: {
                slidesPerView: "1",
                spaceBetween: 0,
            },
            768: {
                slidesPerView: "1",
                spaceBetween: 0,
            },
            900: {
                slidesPerView: "3",
                spaceBetween: 24,
            },
        },
    });
    var swiper2 = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper3 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiper2,
        },
    });
    var swiper4 = new Swiper(".product__price--list", {
        spaceBetween: 24,
        slidesPerView: 4,
        navigation: {
            nextEl: ".btn__next",
            prevEl: ".btn__prev",
        },
        breakpoints: {
            0: {
                slidesPerView: "2",
                spaceBetween: 20,
            },
            768: {
                slidesPerView: "3",
                spaceBetween: 20,
            },
            800: {
                slidesPerView: "3",
                spaceBetween: 24,
            },

            1025: {
                slidesPerView: "4",
                spaceBetween: 24,
            },
        },
    });
    var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }
    const map = document.getElementById('map')

    if(map !== null){
    var mapScript = document.createElement('script');

mapScript.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=2d4d0fe9-daf7-4436-9003-b491bcabe3b8&lang=ru_RU');
mapScript.onload = function () {
    let coords = [];
    document.querySelectorAll('.maps__addresses .address__item').forEach(btn => {
        coords.push([
            parseFloat(btn.getAttribute('data-lat')),
            parseFloat(btn.getAttribute('data-lng'))
        ]);
    });
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: coords[0],
            zoom: 12,
            theme: "islands#dark",
            controls: [],
        }, {
            searchControlProvider: 'yandex#search',
        });
        myMap.behaviors.disable('scrollZoom');
        coords.forEach(function (item, index, array) {
            var placemark = new ymaps.Placemark([item[0], item[1]], {}, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'images/map.svg',
                // Размеры метки.
                iconImageSize: [33, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-76, -70],
            });

            myMap.geoObjects
                .add(placemark);
        });
        document.querySelectorAll('.maps__addresses .address__item').forEach(item => {
            item.addEventListener('click', function () {
                // Remove active class from all siblings
                document.querySelectorAll('.maps__addresses .address__item--active').forEach(activeItem => {
                    activeItem.classList.remove('address__item--active');
                });

                // Add active class to clicked item
                this.classList.add('address__item--active');

                // Get coordinates
                const coords = [
                    parseFloat(this.getAttribute('data-lat')),
                    parseFloat(this.getAttribute('data-lng'))
                ];

                // Move map
                myMap.panTo(coords, {
                    duration: 2000,
                });
            });
        });
        const firstButton = document.querySelector('.maps__addresses .address__item');
        if (firstButton) {
            firstButton.click();
        }

    });
};
document.head.appendChild(mapScript);
    }

    //inputMask
    let phoneInputs = document.querySelectorAll('.js-phone-mask');
    phoneInputs.forEach(function (input) {
        var maskOptions = {
            mask: '+7 (999) 999-99-99',  // Здесь вы можете установить свою маску
            greedy: false,
            placeholder: '_',
            showMaskOnHover: false,
        };

        Inputmask(maskOptions).mask(input);
    });
    document.querySelectorAll('.btn__play').forEach(btn => {
        btn.addEventListener('click', function () {
            const videoSrc = this.dataset.src;

            const videoModal = document.getElementById('videoModal');
            const videoContent = document.getElementById('videoContent');

            // Удаляем старое видео, если есть
            const existingVideo = videoContent.querySelector('video');
            if (existingVideo) {
                existingVideo.remove();
            }

            // Создаем и добавляем новое видео
            const video = document.createElement('video');
            video.src = videoSrc;
            video.controls = true;
            video.autoplay = true;
            video.style.maxWidth = '100%';
            video.style.maxHeight = '100%';

            videoContent.appendChild(video);
            videoModal.style.display = 'flex';
        });
    });
});