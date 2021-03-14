const burger = document.querySelector('.burger_menu');
const nav = document.querySelector('.nav_menu');
const body = document.querySelector('body');

if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('lock');
    });
}


window.addEventListener('resize', () => {
    adaptive_function()
});

function adaptiveSubmenu(w) {
    const withSubmenu = document.querySelectorAll('.with_submenu');
    const submenuTitle = document.querySelectorAll('.submenu_title');

    if (w <= 992) {
        withSubmenu.forEach(e => {
            const link = e.querySelector('a');
            link.addEventListener('click', () => {
                e.classList.toggle('active')
            });
        });
        submenuTitle.forEach(title => {
            title.addEventListener('click', () => {
                title.classList.toggle('active')
            });
        });
    }

}

function adaptive_function() {
    var w = window.innerWidth;
    adaptiveSubmenu(w)
}
adaptive_function();

const mainSwiper = document.querySelector('.main-swiper');
if (mainSwiper) {
    var swiper = new Swiper('.main-swiper', {
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}

const map = document.querySelector('#map');
if (map) {
    function initMap() {
        const uluru = { lat: -25.344, lng: 111.036 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: uluru,
        });
        const marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
    };
};

const postRec = document.querySelector('.post__recomandation-swiper');
if (postRec) {
    var swiper = new Swiper('.post__recomandation-swiper', {
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        },
        navigation: {
            nextEl: '.rec-button-next',
            prevEl: '.rec-button-prev',
        },
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const accordeons = document.querySelectorAll('.accordion');
    if (accordeons[0]) {
        accordeons.forEach(el => {
            el.addEventListener('click', (e) => {
                const self = e.currentTarget;
                const control = self.querySelector('.accordion__control');
                const content = self.querySelector('.accordion__content');
                self.classList.toggle('open');
                if (self.classList.contains('open')) {
                    control.setAttribute('aria-expanded', true);
                    content.setAttribute('aria-hidden', false);
                    content.style.maxHeight = content.scrollHeight + 'px';

                } else {
                    control.setAttribute('aria-expanded', false);
                    content.setAttribute('aria-hidden', true);
                    content.style.maxHeight = null;

                }
            });
        });
    }
});

const fi = document.querySelector('#file');
const fileField = document.querySelector('.uploader');
const uploaded = document.querySelector('.uploaded');
const deleteFile = document.querySelector('.clear__file');
if (fi) {
    fileField.addEventListener("dragenter", () => {
        fileField.style.background = "#f6f6f6";
    });
    fileField.addEventListener("dragleave", () => {
        fileField.style.background = "#fff";
    });
    fi.addEventListener('change', () => {
        if (fi.files.length > 0) {
            for (let i = 0; i <= fi.files.length - 1; i++) {
                const fsize = fi.files.item(i).size;
                const file = Math.round((fsize / 1024));
                if (file >= 5120) {
                    alert("File too Big, please select a file less than 5mb");
                } else {
                    fileField.classList.add('off');
                    uploaded.classList.remove('off');
                    document.querySelector('.file-size').innerHTML = file + " KB";
                }
            }
        }
        let fileValue = fi.value
        let startIndex = (fileValue.indexOf('\\') >= 0 ? fileValue.lastIndexOf('\\') : fileValue.lastIndexOf('/'));
        let filename = fileValue.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        document.querySelector('.file-name').innerHTML = filename;
        deleteFile.addEventListener('click', () => {
            fileField.classList.remove('off');
            uploaded.classList.add('off');
            fileField.style.background = "#fff";
            fi.value = null;
        })
    });

}