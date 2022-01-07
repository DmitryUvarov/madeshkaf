//@@include('spoller.js');
@@include('sliders.js');
//@@include('dynamic_adapt.js'); // Динамический адаптив



// Функция для проверки на мобильные устрайства добавляет класс _touch к тегу html
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.querySelector('html').classList.add('_touch');
}
// \\\ Функция для проверки на мобильные устрайства добавляет класс _touch к тегу html

// Функция для проверки поддерживает ли браузер формат изображений .webp
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
//  \\\ Функция для проверки поддерживает ли браузер формат изображений .webp


// HEADER

const headerElement = document.querySelector('.header');
if (headerElement) {
    const callback = function (entries, observer) {
        if (entries[0].isIntersecting) {
            headerElement.classList.remove('_scroll');
        } else {
            headerElement.classList.add('_scroll');
        }
    };
    const headerObserver = new IntersectionObserver(callback);
    headerObserver.observe(headerElement);



    let headerWrapper = document.querySelector('.header__wrapper');
    let bodyWidth = document.body.clientWidth;
    headerWrapper.style.width = bodyWidth + "px";
    window.addEventListener('resize', function (e) {
        let bodyWidth = document.body.clientWidth;
        headerWrapper.style.width = bodyWidth + "px";
    });

}



// BURGER

const iconMenu = document.querySelector('.icon-menu');
let body = document.querySelector('body');
if (iconMenu) {
    const menuBody = document.querySelector('.menu-header');
    iconMenu.addEventListener("click", function (e) {
        let targetElement = e.target;
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}


// BURGER           //////////


// КНОПКА НАВЕРХ

body.addEventListener('scroll', () => {
    let scrollTop = body.scrollTop;
    const btnScrollTop = document.querySelector('.scroll-top');
    if (scrollTop >= 1250) {
        btnScrollTop.classList.add('active');
        btnScrollTop.addEventListener('click', () => {
            console.log('ddd');
            body.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    } else {
        btnScrollTop.classList.remove('active');
    }
});

// \\\ КНОПКА НАВЕРХ

// TABS ===================

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('_active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('_active');
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('_active');
            });

            currentBtn.classList.add('_active');
            currentTab.classList.add('_active');
        }
    });
}



// \TABS ===================




//BodyLock
function body_lock(delay) {
    let body = document.querySelector("body");
    if (body.classList.contains('_lock')) {
        body_lock_remove(delay);
    } else {
        body_lock_add(delay);
    }
}
function body_lock_remove(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            body.classList.remove("_lock");
        }, delay);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}
function body_lock_add(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        }
        body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        body.classList.add("_lock");

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}
//=================



//Popups
let popup_link = document.querySelectorAll('._popup-link');
let popups = document.querySelectorAll('.popup');

let unlock = true;

for (let index = 0; index < popup_link.length; index++) {
    const el = popup_link[index];
    el.addEventListener('click', function (e) {
        if (unlock) {
            let item = el.getAttribute('href').replace('#', '');
            let video = el.getAttribute('data-video');
            popup_open(item, video);
        }
        e.preventDefault();
    })
}
for (let index = 0; index < popups.length; index++) {
    const popup = popups[index];
    popup.addEventListener("click", function (e) {
        if (!e.target.closest('.popup__body')) {
            popup_close(e.target.closest('.popup'));
        }
    });
}
function popup_open(item, video = '') {
    let activePopup = document.querySelectorAll('.popup._active');
    if (activePopup.length > 0) {
        popup_close('', false);
    }
    let curent_popup = document.querySelector('.popup_' + item);
    if (curent_popup && unlock) {
        if (video != '' && video != null) {
            let popup_video = document.querySelector('.popup_video');
            popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        }
        if (!document.querySelector('.menu__body._active')) {
            body_lock_add(500);
        }
        curent_popup.classList.add('_active');
        history.pushState('', '', '#' + item);
    }
}
function popup_close(item, bodyUnlock = true) {
    if (unlock) {
        if (!item) {
            for (let index = 0; index < popups.length; index++) {
                const popup = popups[index];
                let video = popup.querySelector('.popup__video');
                if (video) {
                    video.innerHTML = '';
                }
                popup.classList.remove('_active');
            }
        } else {
            let video = item.querySelector('.popup__video');
            if (video) {
                video.innerHTML = '';
            }
            item.classList.remove('_active');
        }
        if (!document.querySelector('.menu__body._active') && bodyUnlock) {
            body_lock_remove(500);
        }
        history.pushState('', '', window.location.href.split('#')[0]);
    }
}
let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
if (popup_close_icon) {
    for (let index = 0; index < popup_close_icon.length; index++) {
        const el = popup_close_icon[index];
        el.addEventListener('click', function () {
            popup_close(el.closest('.popup'));
        })
    }
}
document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
        popup_close();
    }
});

//=================




const workItems = document.querySelector('.work__items');
if (workItems) {
    workItems.addEventListener('click', function (e) {
        if (e.target.closest('.work__item')) {
            const workItem = e.target.closest('.work__item');
            const dataItem = workItem.dataset.item;
            const dataText = workItem.dataset.text;
            if (document.querySelectorAll('.content-mb.active-i1') || (document.querySelectorAll('.content-mb.active-i2'))) {
                removeClassesContent(document.querySelectorAll('.content-mb'))
            }
            function addClassContent() {
                const shell = workItem.closest('.shell');
                const contentMb = shell.querySelector('.content-mb');
                if (document.querySelector('.content-mb.active-i1') || (document.querySelector('.content-mb.active-i2'))) {
                    removeClassesContent();
                }
                contentMb.querySelector('.content-mb-body p').insertAdjacentHTML(
                    'afterbegin',
                    `${dataText}`
                );
                contentMb.classList.add(dataItem);
            }
            function removeClassesContent(elements) {
                for (let element of elements) {
                    element.classList.remove('active-i1');
                    element.classList.remove('active-i2');
                    element.querySelector('.content-mb-body .text').textContent = "";
                }
            }
            addClassContent();
        }
    });
    workItems.addEventListener('mouseover', function (e) {
        if (e.target.closest('.work__item')) {
            const workItem = e.target.closest('.work__item');
            const dataItem = workItem.dataset.itempc;
            const dataText = workItem.dataset.text;
            const contentPc = document.querySelector('.content-pc');
            const textPc = contentPc.querySelector('.text-pc');
            function removeClassContentPc() {
                if (document.querySelector('.content-pc.active-i1, .content-pc.active-i2, .content-pc.active-i3, .content-pc.active-i4, .content-pc.active-i5, .content-pc.active-i6')) {
                    contentPc.classList.remove('active-i1');
                    contentPc.classList.remove('active-i2');
                    contentPc.classList.remove('active-i3');
                    contentPc.classList.remove('active-i4');
                    contentPc.classList.remove('active-i5');
                    contentPc.classList.remove('active-i6');
                }
            }
            removeClassContentPc();
            function addClassContentPc() {
                contentPc.classList.add(dataItem);
                textPc.textContent = `${dataText}`;

            }
            addClassContentPc();
        }
    });
}
