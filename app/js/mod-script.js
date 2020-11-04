const headersItems = document.querySelectorAll(".headers__item"),

    htmlBody = document.querySelector("html, body"),

    page = document.querySelector(".page"),

    header = document.querySelector(".header"),

    headerBurger = document.querySelector(".header__burger"),

    headerSearch = document.querySelector(".header__search"),

    headerSocial = document.querySelector(".header__social"),

    navList = document.querySelector(".nav__list");

headerBurger.addEventListener("click", () => {

    htmlBody.classList.toggle("lock"),

        page.classList.toggle("page--transformed"),

        headerBurger.classList.toggle("header__burger--active"),

        headerSocial.classList.toggle("header__social--active"),

        setTimeout(() => {

            headerSearch.classList.toggle("header__search--active");

        }, 300),

        navList.classList.toggle("nav__list--active");

});

const closeOpenMenuAfterWindowResize = () => {

        window.innerWidth > 1200 &&

            (htmlBody.classList.remove("lock"),

            page.classList.remove("page--transformed"),

            headerBurger.classList.remove("header__burger--active"),

            headerSocial.classList.remove("header__social--active"),

            headerSearch.classList.remove("header__search--active"),

            navList.classList.remove("nav__list--active"));

    },

    circlesItems = document.querySelectorAll(".circles__item"),

    checkCircleItems = () => {

        circlesItems.forEach((e, t) => {

            e.addEventListener("mouseover", (e) => {

                window.innerWidth > 1200 &&

                    (headersItems.forEach((e) => {

                        e.style.display = "none";

                    }),

                    (headersItems[t].style.display = "block"));

            }),

                e.addEventListener("mouseout", (e) => {

                    window.innerWidth > 1200 &&

                        (headersItems.forEach((e) => {

                            e.style.display = "none";

                        }),

                        (headersItems[0].style.display = "block"));

                });

        });

    };

checkCircleItems();

const startCirclesItems = document.querySelectorAll(".start-circles__item"),

    checkCirclesSlider = () => {

        if (window.innerWidth <= 1200) {

            if (

                (circlesItems.forEach((e) => {

                    e.classList.add("swiper-slide");

                }),

                startCirclesItems.forEach((e) => {

                    e.classList.add("swiper-slide");

                }),

                !document.querySelector(".swiper-container-initialized"))

            ) {

                new Swiper(".swiper-container-home", {

                    slidesPerView: "auto",

                    spaceBetween: 15,

                    centeredSlides: !0,

                    pagination: { el: ".swiper-pagination", clickable: !0 },

                    breakpoints: { 0: { allowTouchMove: !0 }, 1201: { allowTouchMove: !1 } },

                }),

                    new Swiper(".swiper-container-start", {

                        slidesPerView: "auto",

                        spaceBetween: 15,

                        centeredSlides: !0,

                        pagination: { el: ".swiper-pagination", clickable: !0 },

                        breakpoints: { 0: { allowTouchMove: !0 }, 1201: { allowTouchMove: !1 } },

                    });

                const e = document.querySelectorAll(".swiper-pagination-bullet");

                document.querySelector(".swiper-pagination") && e[Math.round(e.length / 2) - 1].click();

            }

        } else {

            circlesItems.forEach((e) => {

                e.classList.remove("swiper-slide"), e.classList.remove("swiper-slide-active");

            }),

                startCirclesItems.forEach((e) => {

                    e.classList.remove("swiper-slide"), e.classList.remove("swiper-slide-active");

                });

            const e = document.querySelector(".swiper-wrapper");

            e && e.setAttribute("transform", "translate(0);");

        }

    };

checkCirclesSlider();

let scrollPrev = 0;

window.addEventListener("scroll", () => {

    let e = window.scrollY;

    (header.style.top = e >= 100 && e > scrollPrev ? -header.offsetHeight + "px" : 0), (scrollPrev = e);

});

const startCircles = document.querySelectorAll(".start-circles__circle"),

    startContentItems = document.querySelectorAll(".start-content__item");

startCircles.forEach((e, t) => {

    e.addEventListener("click", () => {

        startCircles.forEach((e) => {

            e.classList.remove("start-circles__circle--active");

        }),

            startContentItems.forEach((e) => {

                e.classList.remove("start-content__item--active");

            }),

            e.classList.add("start-circles__circle--active"),

            startContentItems[t].classList.add("start-content__item--active");

    });

});

const changeTextOnHover = document.querySelector("[data-hover]");

if (changeTextOnHover) {

    changeTextOnHoverParent = changeTextOnHover.closest(".circles__item");

    const e = changeTextOnHover.innerText;

    changeTextOnHoverParent.addEventListener("mouseover", (e) => {

        changeTextOnHover.innerText = changeTextOnHover.dataset.hover;

    }),

        changeTextOnHoverParent.addEventListener("mouseout", (t) => {

            changeTextOnHover.innerText = e;

        });

}

const isMap = document.getElementById("map");

if (isMap) {

    const e = { lat: 59.433302, lng: 24.760004 };

    function initMap() {

        const t = new google.maps.Map(document.getElementById("map"), {

            center: e,

            zoom: 17,

            gestureHandling: "cooperative",

            styles: [

                { featureType: "water", elementType: "geometry", stylers: [{ color: "#e9e9e9" }, { lightness: 17 }] },

                { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 20 }] },

                { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }, { lightness: 17 }] },

                { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }] },

                { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#ffffff" }, { lightness: 18 }] },

                { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#ffffff" }, { lightness: 16 }] },

                { featureType: "poi", elementType: "geometry", stylers: [{ color: "#f5f5f5" }, { lightness: 21 }] },

                { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#dedede" }, { lightness: 21 }] },

                { elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }] },

                { elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }] },

                { elementType: "labels.icon", stylers: [{ visibility: "off" }] },

                { featureType: "transit", elementType: "geometry", stylers: [{ color: "#f2f2f2" }, { lightness: 19 }] },

                { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#fefefe" }, { lightness: 20 }] },

                { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }] },

            ],

        });

        new google.maps.Marker({ position: e, map: t, title: "Maakri 19/1, Tallinn 10145, Estonia", label: "", icon: "/wp-content/themes/anson/img/icons/map-marker.svg" });

    }

}

const contactMap = document.querySelector(".contact__map"),

    setMapHeight = () => {

        contactMap && (contactMap.style.height = 0.93 * contactMap.offsetWidth + "px");

    };

setMapHeight();

const modalClose = document.querySelectorAll(".modal__close"),

    modal = document.querySelectorAll(".modal"),

    closeModal = () => {

        modal.forEach((e) => {

            e.classList.remove("modal--active"), htmlBody.classList.remove("lock"), page.classList.remove("page--transformed");

        });

    };

modalClose.forEach((e) => {

    e.addEventListener("click", () => {

        closeModal();

    });

}),

    modal &&

        window.addEventListener("keydown", (e) => {

            "Escape" === e.key && closeModal();

        });

const packageModalOpenBtn = document.querySelectorAll("[data-package]"),

    packageModal = document.querySelector(".modal--package");

packageModal &&

    packageModal.addEventListener("click", (e) => {

        e.target.classList.contains("modal__close") && closeModal();

    });

const openPackageModal = () => {

    packageModalOpenBtn.forEach((e) => {

        window.innerWidth <= 1200

            ? e.addEventListener("click", () => {

                  packageModal.classList.add("modal--active"), htmlBody.classList.add("lock"), page.classList.add("page--transformed"), (header.style.top = 0);

                  const t = e.closest(".start-circles__item"),

                      i = {

                          package: e.dataset.package.charAt(0).toUpperCase() + e.dataset.package.slice(1),

                          textToModal: t.querySelector(".start-circles__text--to-modal").innerHTML,

                          textShifted: t.querySelector(".start-circles__text--desktop").innerHTML,

                          price: t.querySelector(".start-circles__circle span").innerText.replace(/[^\d€$\s]/gim, ""),

                          total: t

                              .querySelector(".start-circles__text--mobile")

                              .innerHTML.match(/Total value separately.+<\/p>/)[0]

                              .replace("</p>", ""),

                      };

                  (packageModal.querySelector(".package__title").innerText = i.package + " service package"),

                      (packageModal.querySelector(".package__text").innerHTML = i.textToModal),

                      (packageModal.querySelector(".package__text--shifted").innerHTML = i.textShifted),

                      (packageModal.querySelector(".package__price").innerText = "The price is" + i.price),

                      (packageModal.querySelector(".package__total").innerHTML = i.total),

                      localStorage.setItem("package", i.package);

              })

            : packageModal.classList.remove("modal--active");

    });

};

openPackageModal();

const dataSetPackage = document.querySelectorAll("[data-set-package]");

dataSetPackage.forEach((e) => {

    e.addEventListener("click", () => {

        localStorage.setItem("package", e.dataset.setPackage);

    });

});

const hiddenInputPackage = document.querySelector('input[type="hidden"][name="package"]');

hiddenInputPackage && (hiddenInputPackage.value = localStorage.getItem("package"));

const formMobilePackage = document.querySelector(".form-mobile__package");

formMobilePackage && (formMobilePackage.innerText = localStorage.getItem("package"));

const swiperStartForm = new Swiper(".swiper-container-start-form", {

        slidesPerView: 1,

        autoHeight: !0,

        allowTouchMove: !1,

        effect: "fade",

        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },

        pagination: { el: ".swiper-pagination", clickable: !0 },

    }),

    startForm = document.querySelector(".start-form"),

    startFormFade = () => {

        if (startForm) {

            document.querySelectorAll(".start-form__page.swiper-slide").forEach((e) => {

                e.style.opacity = "0";

            });

            document.querySelector(".start-form__page.swiper-slide.swiper-slide-active").style.opacity = "1";

        }

    };

startForm &&

    startForm.addEventListener("click", (e) => {

        (e.target.classList.contains("swiper-button-next") || e.target.classList.contains("swiper-button-prev") || e.target.classList.contains("swiper-pagination-bullet")) && (startFormFade(), setStartFormPagesHeight());

    });



const startFormFields = document.querySelectorAll(".start-form__fields"),

    startFormPages = document.querySelector(".start-form__pages"),

    setFieldsHeight = () => {

        startFormPages &&

            (startFormFields.forEach((e) => {

                e.style.height = 0.93 * e.offsetWidth + "px";

            }),

            (startFormPages.style.height = 0.93 * startFormPages.querySelector(".start-form__fields").offsetWidth + "px"));

    };

setFieldsHeight();

const setStartFormPagesHeight = () => {

    if (startForm) {

        const e = startFormPages.style.height;

        startFormPages.style.minHeight = e;

    }

};

window.addEventListener("resize", () => {

    setStartFormPagesHeight(),

        checkCirclesSlider(),

        checkCircleItems(),

        setMapHeight(),

        openPackageModal(),

        setFieldsHeight(),

        startFormFade(),

        window.innerWidth > 1200 &&

            (htmlBody.classList.remove("lock"),

            page.classList.remove("page--transformed"),

            headerBurger.classList.remove("header__burger--active"),

            headerSocial.classList.remove("header__social--active"),

            headerSearch.classList.remove("header__search--active"),

            navList.classList.remove("nav__list--active"));

});

