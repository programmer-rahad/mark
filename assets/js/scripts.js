;(function ($) {

    // Preloader

    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    "use strict";

    // Hero Carousel

    $(".hero-slide-items").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,

    });

    // Hero Ripples
    $('#hero-section').ripples({
        resolution: 100,
        dropRadius: 14,
        perturbance: 0.04,
    });


    // Animation Scroll For Menu

    $(window).on('scroll', function () {

        if ($(window).width() > 991) {
            if ($(window).scrollTop() > 0) {
                $('header').css({
                    background: 'rgba(0,0,0,.86)',
                    top: 0,
                });
            } else {
                $('header').css({
                    background: 'transparent',
                    top: '30px'
                });
            }
        }


    });

    // Responsive Menu
    $('.toggle-menu').on('click', function () {
        $('nav#main-menu').slideToggle();
        $(this).toggleClass('menu-click');
    });
    $('nav#main-menu ul li a').on('click', function () {
        if ($(window).width() < 992) {
            $('nav#main-menu').slideUp();
            $('.toggle-menu').removeClass('menu-click')
        }
    })

    // Scroll Spy Menu
    var headerHeight = $('header').innerHeight();
    $.scrollIt({
        easing: 'linear', // the easing function for animation
        scrollTime: 900, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed			//Don't Know 
        topOffset: -headerHeight // offste (in px) for fixed top navigation
    });

    // Skill Progress
    $(window).on('scroll', function () {
        $(".skill-progress .progress-item").each(function () {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });

    // Mixitup Filtering
    var config = document.querySelector('.portfolios .row');
    var mixer = mixitup(config);

    // Portfolio
    $('.work-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true, // By default it's false, so don't forget to enable it
            duration: 600,

        }
    });

    // Counter Up
    $('.single-counter .count').countUp({
        delay: 5,
        time: 200
    });

    // Team Section
    $(".our-members").owlCarousel({
        items: 3,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        margin: 30,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    });

    // Blog Section
    $(".blog-items").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
    });

    // Testimonial Section
    $(".testimonial-items").owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
    });

    // Client Section
    $(".clients-logos").owlCarousel({
        items: 5,
        loop: true,
        margin: 15,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2,
            },
            500: {
                items: 3
            },
            900: {
                items: 5
            }
        }
    });


})(jQuery);