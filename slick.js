// slide and auto next slide
$(".slide").slick({
    slidesToShow: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
})


// slick-address
$(".list-address").slick({
    slidesToShow: 5,
    infinite: false,
    prevArrow: "<button type='button' class='slick-prev slick-address slick-address-active slick-address-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next slick-address slick-address-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
})
const btn_prev_address = document.querySelector(".slick-address-prev")
const btn_next_address = document.querySelector(".slick-address-next")
const slickAddressActive = "slick-address-active"

btn_prev_address.onclick = function () {
    let isCheckAddress = this.getAttribute("aria-disabled")
    if (isCheckAddress === "true") {
        this.classList.add(slickAddressActive)
    } else {
        btn_next_address.classList.remove(slickAddressActive)
    }
}
btn_next_address.onclick = function () {
    let isCheckAddress = this.getAttribute("aria-disabled")
    if (isCheckAddress === "true") {
        this.classList.add(slickAddressActive)
    } else {
        btn_prev_address.classList.remove(slickAddressActive)
    }
}


// slick-suggest
$(".menu-suggest").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: "<button type='button' class='slick-prev slick-suggest slick-suggest-active slick-suggest-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next slick-suggest slick-suggest-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
})
const btn_prev_suggest = document.querySelector(".slick-suggest-prev")
const btn_next_suggest = document.querySelector(".slick-suggest-next")
const slickSuggestActive = "slick-suggest-active"

btn_prev_suggest.onclick = function () {
    let isCheckSuggest = this.getAttribute("aria-disabled")
    if (isCheckSuggest === "true") {
        this.classList.add(slickSuggestActive)
    } else {
        btn_next_suggest.classList.remove(slickSuggestActive)
    }
}
btn_next_suggest.onclick = function () {
    let isCheckSuggest = this.getAttribute("aria-disabled")
    if (isCheckSuggest === "true") {
        this.classList.add(slickSuggestActive)
    } else {
        btn_prev_suggest.classList.remove(slickSuggestActive)
    }
}


$(".list-post-discover").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: "<button type='button' class='slick-prev slick-discover slick-discover-active slick-discover-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next slick-discover slick-discover-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
})

const btn_prev_discover = document.querySelector(".slick-discover-prev")
const btn_next_discover = document.querySelector(".slick-discover-next")
const slickDiscoverActive = "slick-discover-active"

btn_prev_discover.onclick = function () {
    let isCheckDiscover = this.getAttribute("aria-disabled")
    if (isCheckDiscover === "true") {
        this.classList.add(slickDiscoverActive)
    } else {
        btn_next_discover.classList.remove(slickDiscoverActive)
    }
}
btn_next_discover.onclick = function () {
    let isCheckDiscover = this.getAttribute("aria-disabled")
    if (isCheckDiscover === "true") {
        this.classList.add(slickDiscoverActive)
    } else {
        btn_prev_discover.classList.remove(slickDiscoverActive)
    }
}

