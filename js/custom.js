// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

document.getElementById("open-form-buttonn").addEventListener("click", function () {
    document.getElementById("popup-form").style.display = "block";
});

document.querySelector(".close-buttonn").addEventListener("click", function () {
    document.getElementById("popup-form").style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("popup-form")) {
        document.getElementById("popup-form").style.display = "none";
    }
});


document.getElementById("open-form-buttoon").addEventListener("click", function () {
    document.getElementById("popupp-form").style.display = "block";
});

document.querySelector(".close-buttoon").addEventListener("click", function () {
    document.getElementById("popupp-form").style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("popupp-form")) {
        document.getElementById("popupp-form").style.display = "none";
    }
});

document.getElementById("open-form-buttonnn").addEventListener("click", function () {
    document.getElementById("popup-formm").style.display = "block";
});

document.querySelector(".close-buttonnn").addEventListener("click", function () {
    document.getElementById("popup-formm").style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("popup-formm")) {
        document.getElementById("popup-formm").style.display = "none";
    }
});

const popup = document.querySelector('.popup-form');
const orderForm = document.getElementById('order-form');
const confirmationMessageElement = document.querySelector('.popup.confirmation #confirmation-message');

function areFormFieldsEmpty(form) {
    const formElements = form.elements;
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
            if (element.value.trim() !== '') {
                return false;
            }
        }
    }
    return true;
}

function areFormFieldsEmpty(form) {
    const formElements = form.elements;
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
            if (element.value.trim() !== '') {
                return false;
            }
        }
    }
    return true;
}

orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Check if form fields are empty
    if (areFormFieldsEmpty(orderForm)) {
        return;
    }

    // Show the order confirmation text
    const name = document.getElementById('nam').value;
    const phone = document.getElementById('phone').value;
    const pilihJemput = document.getElementById('pilihjemput');
    const pilihAntar = document.getElementById('pilihantar');
    const pilihMethod = document.querySelector('input[name="pilih"]:checked');
    const pilhValue = pilihMethod ? pilihMethod.value : '';
    const quantity = document.getElementById('quantity').value;
    const orderConfirmationTextElement = document.getElementById('order-confirmation-text');
    orderConfirmationTextElement.textContent = `Thank you, ${name}! Your order has been received. Layanan : ${pilhValue}.`;
    document.getElementById('orderr-form').reset();
});
