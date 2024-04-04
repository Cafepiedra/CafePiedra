/*!
* Start Bootstrap - Creative v7.0.4 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});


//Gráficos
//Gráficos

var json= [ { "date" : 1707613747, "temperature" : 19.8, "humidity" : 60.6, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707616386, "temperature" : 19.4, "humidity" : 62.2, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707617264, "temperature" : 19.6, "humidity" : 60.7, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707619023, "temperature" : 19.2, "humidity" : 61.9, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707619901, "temperature" : 19.1, "humidity" : 61.7, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707622540, "temperature" : 18.9, "humidity" : 66.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707623418, "temperature" : 19.1, "humidity" : 65.6, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707624296, "temperature" : 19.1, "humidity" : 67.4, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707627814, "temperature" : 18.2, "humidity" : 77.7, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707628690, "temperature" : 17.9, "humidity" : 73.6, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707629569, "temperature" : 17.9, "humidity" : 74.3, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707631327, "temperature" : 17.7, "humidity" : 79.5, "light" : 266, "UVindex" : 0.05 }, { "date" : 1707633968, "temperature" : 18.4, "humidity" : 78.5, "light" : 345, "UVindex" : 0.47 }, { "date" : 1707637520, "temperature" : 22.2, "humidity" : 64.5, "light" : 496, "UVindex" : 1.28 }, { "date" : 1707642803, "temperature" : 26.4, "humidity" : 56.2, "light" : 1096, "UVindex" : 4.5 }, { "date" : 1707649896, "temperature" : 31.6, "humidity" : 48.5, "light" : 1570, "UVindex" : 7.04 }, { "date" : 1707668332, "temperature" : 23.4, "humidity" : 70.6, "light" : 303, "UVindex" : 0.25 }, { "date" : 1707669207, "temperature" : 22.9, "humidity" : 71.6, "light" : 304, "UVindex" : 0.25 }, { "date" : 1707671840, "temperature" : 21.8, "humidity" : 77.5, "light" : 283, "UVindex" : 0.14 }, { "date" : 1707672717, "temperature" : 21.9, "humidity" : 83.3, "light" : 270, "UVindex" : 0.07 }, { "date" : 1707674471, "temperature" : 20.9, "humidity" : 83.9, "light" : 257, "UVindex" : 0.02 }, { "date" : 1707675349, "temperature" : 20.6, "humidity" : 87.1, "light" : 259, "UVindex" : 0.02 }, { "date" : 1707681498, "temperature" : 19.1, "humidity" : 96.3, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707682377, "temperature" : 19.4, "humidity" : 97.7, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707683254, "temperature" : 18.7, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707684133, "temperature" : 18.6, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707685012, "temperature" : 18.6, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707685890, "temperature" : 19.1, "humidity" : 94.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707689406, "temperature" : 18.7, "humidity" : 92.4, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707692040, "temperature" : 17.1, "humidity" : 93.7, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707694681, "temperature" : 20.6, "humidity" : 73.3, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707697319, "temperature" : 18.2, "humidity" : 68.4, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707698197, "temperature" : 18.4, "humidity" : 66.2, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707699956, "temperature" : 18.6, "humidity" : 64.2, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707700835, "temperature" : 19.1, "humidity" : 60.6, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707702595, "temperature" : 20.4, "humidity" : 54.6, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707704355, "temperature" : 19.6, "humidity" : 49.9, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707706114, "temperature" : 19.9, "humidity" : 48.2, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707706992, "temperature" : 19.7, "humidity" : 46.8, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707707872, "temperature" : 20.8, "humidity" : 46.8, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707708750, "temperature" : 19.8, "humidity" : 46.8, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707712268, "temperature" : 20.1, "humidity" : 43.6, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707714905, "temperature" : 21.6, "humidity" : 43.2, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707715783, "temperature" : 20.3, "humidity" : 42.1, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707721965, "temperature" : 24.2, "humidity" : 39.5, "light" : 410, "UVindex" : 0.82 }, { "date" : 1707723741, "temperature" : 25.5, "humidity" : 31.7, "light" : 498, "UVindex" : 1.29 }, { "date" : 1707726377, "temperature" : 27.5, "humidity" : 27.9, "light" : 329, "UVindex" : 0.46 }, { "date" : 1707728129, "temperature" : 28.2, "humidity" : 26.8, "light" : 644, "UVindex" : 2.07 }, { "date" : 1707729022, "temperature" : 28.7, "humidity" : 23.2, "light" : 908, "UVindex" : 3.49 }, { "date" : 1707731691, "temperature" : 30.5, "humidity" : 23.1, "light" : 1323, "UVindex" : 5.71 }, { "date" : 1707732576, "temperature" : 31.3, "humidity" : 46, "light" : 1380, "UVindex" : 6.02 }, { "date" : 1707734346, "temperature" : 33, "humidity" : 54.1, "light" : 1430, "UVindex" : 6.29 }, { "date" : 1707737879, "temperature" : 34.5, "humidity" : 63.7, "light" : 1683, "UVindex" : 7.64 }, { "date" : 1707738760, "temperature" : 35, "humidity" : 81.2, "light" : 1658, "UVindex" : 7.51 }, { "date" : 1707739639, "temperature" : 35, "humidity" : 81.9, "light" : 1648, "UVindex" : 7.46 }, { "date" : 1707751069, "temperature" : 23.8, "humidity" : 76.5, "light" : 343, "UVindex" : 0.46 }, { "date" : 1707754587, "temperature" : 24, "humidity" : 71.3, "light" : 364, "UVindex" : 0.57 }, { "date" : 1707760734, "temperature" : 22.1, "humidity" : 91.2, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707761612, "temperature" : 21.7, "humidity" : 89.4, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707762490, "temperature" : 21.8, "humidity" : 89.2, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707764247, "temperature" : 21.1, "humidity" : 89.9, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707767760, "temperature" : 20.2, "humidity" : 95.1, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707768638, "temperature" : 20.1, "humidity" : 93.4, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707770391, "temperature" : 19.3, "humidity" : 99.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707772149, "temperature" : 19.3, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707773028, "temperature" : 19.1, "humidity" : 99.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707773907, "temperature" : 18.9, "humidity" : 99.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707775663, "temperature" : 19.2, "humidity" : 99.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707776541, "temperature" : 19.2, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707779175, "temperature" : 19.1, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707780053, "temperature" : 17.4, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707780931, "temperature" : 17.3, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707782687, "temperature" : 17.1, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707783565, "temperature" : 16.9, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707784444, "temperature" : 17.2, "humidity" : 99.9, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707785322, "temperature" : 16.6, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707787080, "temperature" : 16.7, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707787959, "temperature" : 16.6, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707790596, "temperature" : 17.3, "humidity" : 99.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707792354, "temperature" : 16.7, "humidity" : 99.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707793234, "temperature" : 16.9, "humidity" : 99.9, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707794991, "temperature" : 16.6, "humidity" : 99.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707795870, "temperature" : 17.3, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707796749, "temperature" : 16.6, "humidity" : 99.9, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707797626, "temperature" : 16.4, "humidity" : 99.9, "light" : 258, "UVindex" : 0.01 }, { "date" : 1707798504, "temperature" : 16.2, "humidity" : 99.9, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707799382, "temperature" : 16.6, "humidity" : 99.9, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707800261, "temperature" : 16.9, "humidity" : 99.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707802019, "temperature" : 16.5, "humidity" : 99.9, "light" : 262, "UVindex" : 0.03 }, { "date" : 1707804659, "temperature" : 17, "humidity" : 99.9, "light" : 271, "UVindex" : 0.08 }, { "date" : 1707809088, "temperature" : 20.3, "humidity" : 85.5, "light" : 440, "UVindex" : 0.98 }, { "date" : 1707810859, "temperature" : 20.9, "humidity" : 79.5, "light" : 542, "UVindex" : 1.53 }, { "date" : 1707830442, "temperature" : 23.7, "humidity" : 64.5, "light" : 695, "UVindex" : 2.35 }, { "date" : 1707832205, "temperature" : 24.6, "humidity" : 60.5, "light" : 710, "UVindex" : 2.43 }, { "date" : 1707833958, "temperature" : 23.5, "humidity" : 63.1, "light" : 475, "UVindex" : 1.17 }, { "date" : 1707834832, "temperature" : 23, "humidity" : 67.1, "light" : 447, "UVindex" : 1.02 }, { "date" : 1707836586, "temperature" : 22, "humidity" : 71.9, "light" : 506, "UVindex" : 1.33 }, { "date" : 1707839218, "temperature" : 21, "humidity" : 76.6, "light" : 413, "UVindex" : 0.84 }, { "date" : 1707841848, "temperature" : 19.6, "humidity" : 79.5, "light" : 318, "UVindex" : 0.33 }, { "date" : 1707847111, "temperature" : 17.8, "humidity" : 88.2, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707848867, "temperature" : 17.6, "humidity" : 91.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707849746, "temperature" : 17.3, "humidity" : 92.6, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707851504, "temperature" : 17.3, "humidity" : 94.7, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707852383, "temperature" : 17.1, "humidity" : 97.3, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707854142, "temperature" : 17.2, "humidity" : 97.3, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707855900, "temperature" : 17.1, "humidity" : 98.8, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707858538, "temperature" : 16.9, "humidity" : 97.7, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707861174, "temperature" : 16.7, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707863810, "temperature" : 16.2, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707864688, "temperature" : 15.9, "humidity" : 99.9, "light" : 258, "UVindex" : 0.01 }, { "date" : 1707865566, "temperature" : 15.9, "humidity" : 99.9, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707866445, "temperature" : 15.9, "humidity" : 99.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707867323, "temperature" : 16.1, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707868202, "temperature" : 15.9, "humidity" : 99.9, "light" : 261, "UVindex" : 0.01 }, { "date" : 1707869082, "temperature" : 16.3, "humidity" : 99.4, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707870840, "temperature" : 16.4, "humidity" : 97.8, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707871718, "temperature" : 16.3, "humidity" : 97.7, "light" : 259, "UVindex" : 0.02 }, { "date" : 1707872596, "temperature" : 16.3, "humidity" : 96.4, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707873474, "temperature" : 16.2, "humidity" : 94.7, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707875233, "temperature" : 16.2, "humidity" : 94.4, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707876991, "temperature" : 16.3, "humidity" : 93.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707877870, "temperature" : 16.3, "humidity" : 93.2, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707879630, "temperature" : 16.3, "humidity" : 93.4, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707880508, "temperature" : 16.3, "humidity" : 92.7, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707881386, "temperature" : 16.3, "humidity" : 93.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707882265, "temperature" : 16.1, "humidity" : 95.2, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707883143, "temperature" : 16.1, "humidity" : 96.3, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707885781, "temperature" : 16.2, "humidity" : 97.1, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707886659, "temperature" : 16.2, "humidity" : 98.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707891940, "temperature" : 16.5, "humidity" : 99.9, "light" : 292, "UVindex" : 0.19 }, { "date" : 1707899005, "temperature" : 20.5, "humidity" : 80.1, "light" : 408, "UVindex" : 0.81 }, { "date" : 1707904327, "temperature" : 24, "humidity" : 66.4, "light" : 1428, "UVindex" : 6.27 }, { "date" : 1707905201, "temperature" : 23, "humidity" : 68.2, "light" : 1609, "UVindex" : 7.24 }, { "date" : 1707906078, "temperature" : 23.5, "humidity" : 67.9, "light" : 1673, "UVindex" : 7.59 }, { "date" : 1707906956, "temperature" : 24, "humidity" : 66.8, "light" : 1650, "UVindex" : 7.46 }, { "date" : 1707908728, "temperature" : 25.4, "humidity" : 63, "light" : 1708, "UVindex" : 7.77 }, { "date" : 1707910494, "temperature" : 25, "humidity" : 61.2, "light" : 1841, "UVindex" : 8.49 }, { "date" : 1707915726, "temperature" : 22.8, "humidity" : 68.5, "light" : 748, "UVindex" : 2.63 }, { "date" : 1707920121, "temperature" : 22.2, "humidity" : 70, "light" : 341, "UVindex" : 0.45 }, { "date" : 1707922740, "temperature" : 20.7, "humidity" : 75.5, "light" : 326, "UVindex" : 0.37 }, { "date" : 1707923617, "temperature" : 21, "humidity" : 76.3, "light" : 326, "UVindex" : 0.37 }, { "date" : 1707929767, "temperature" : 19.2, "humidity" : 83.6, "light" : 297, "UVindex" : 0.21 }, { "date" : 1707931523, "temperature" : 18.9, "humidity" : 86.5, "light" : 276, "UVindex" : 0.1 }, { "date" : 1707932401, "temperature" : 18.5, "humidity" : 88.8, "light" : 265, "UVindex" : 0.05 }, { "date" : 1707936794, "temperature" : 18.1, "humidity" : 94.9, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707937672, "temperature" : 17.8, "humidity" : 94.1, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707939431, "temperature" : 17.9, "humidity" : 94.7, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707942072, "temperature" : 17.7, "humidity" : 98.1, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707942950, "temperature" : 17.8, "humidity" : 99.6, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707943830, "temperature" : 17.7, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707944708, "temperature" : 17.9, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707945585, "temperature" : 17.9, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707946465, "temperature" : 17.7, "humidity" : 99.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707947343, "temperature" : 17.6, "humidity" : 99.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707948221, "temperature" : 17.6, "humidity" : 99.9, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707949978, "temperature" : 17.4, "humidity" : 99.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707950856, "temperature" : 17.4, "humidity" : 99.9, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707951733, "temperature" : 17.1, "humidity" : 99.6, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707953490, "temperature" : 17.2, "humidity" : 98.7, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707955249, "temperature" : 17.2, "humidity" : 94.1, "light" : 259, "UVindex" : 0.02 }, { "date" : 1707957887, "temperature" : 17.4, "humidity" : 88.2, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707958765, "temperature" : 17.2, "humidity" : 88.3, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707959644, "temperature" : 17.1, "humidity" : 89.6, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707962282, "temperature" : 16.6, "humidity" : 91.6, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707964041, "temperature" : 16.6, "humidity" : 92.3, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707964923, "temperature" : 16.6, "humidity" : 93.7, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707965800, "temperature" : 16.4, "humidity" : 94.6, "light" : 261, "UVindex" : 0.02 }, { "date" : 1707966678, "temperature" : 16.4, "humidity" : 94.9, "light" : 260, "UVindex" : 0.02 }, { "date" : 1707970195, "temperature" : 15.8, "humidity" : 99.9, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707971953, "temperature" : 16.1, "humidity" : 99.9, "light" : 261, "UVindex" : 0.01 }, { "date" : 1707974589, "temperature" : 15.8, "humidity" : 99.9, "light" : 259, "UVindex" : 0.01 }, { "date" : 1707983430, "temperature" : 21.3, "humidity" : 77.1, "light" : 536, "UVindex" : 1.5 }, { "date" : 1707994472, "temperature" : 23, "humidity" : 72.1, "light" : 524, "UVindex" : 1.43 }, { "date" : 1707997103, "temperature" : 23.3, "humidity" : 72, "light" : 1688, "UVindex" : 7.67 } ];
var dataTemp=[];
var dataHum=[];
var dataLuz=[];
var dataUV=[];
var pointTemp=[];
var pointHum=[];
var pointLuz=[];
var pointUV=[];

for (var i in json){
    date= new Date(json[i].date*1000 +2.16e+7);
    pointTemp.push(date.getTime());
    pointHum.push(date.getTime());
    pointLuz.push(date.getTime());
    pointUV.push(date.getTime());
    if (json[i].temperature!=null){
        pointTemp.push(parseFloat(json[i].temperature));
    }
    if (json[i].temperature==null){
        pointTemp.push(json[i].temperature);
    }
    if (json[i].humidity!=null){
        pointHum.push(parseFloat(json[i].humidity));
    }
    if (json[i].humidity==null){
        pointHum.push(json[i].humidity);
    } 
    if (json[i].light!=null){
        pointLuz.push(parseFloat(json[i].light));
    }
    if (json[i].light==null){
        pointLuz.push(json[i].light);
    } 
    if (json[i].UVindex!=null){
        pointUV.push(parseFloat(json[i].UVindex));
    }
    if (json[i].UVindex==null){
        pointUV.push(json[i].UVindex);
    } 
    dataTemp.push(pointTemp);
    dataHum.push(pointHum);
    dataLuz.push(pointLuz);
    dataUV.push(pointUV);
    pointTemp=[];
    pointHum=[];
    pointLuz=[];
    pointUV=[];
}

Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'sans-serif'
        }
    },
    time: {
        timezone: 'America/Costa_Rica'
    },
    lang: {
        months: [
            'Enero', 'Febrero', 'Marzo', 'Abril',
            'Mayo', 'Junio', 'Julio', 'Agosto',
            'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ],
        weekdays: [
            'Domingo', 'Lunes', 'Martes', 'Miércoles',
            'Jueves', 'Viernes', 'Sábado'
        ],
        shortMonths:["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"],
        downloadJPEG: "Descargar imagen JPEG",
        downloadPNG: "Descargar imagen PNG",
        downloadSVG: "Descargar imagen de vectores SVG",
        downloadPDF: "Descargar documento PDF",
        exitFullscreen: "Salir de pantalla completa",
        viewFullscreen: "Ver en pantalla completa"

    }
});


//Gráfico de temperatura ambiente
Highcharts.stockChart('Graph-Temp', {
    title: {
        text: 'Temperatura de secado',
        style:{
            fontSize: '22px'
        }
    },
    rangeSelector: {
        enabled: false
    },    
    scrollbar: {
        enabled: false
    }, 
    credits: false,
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Fecha'
        },
        labels: {
            style: {
                fontSize: '14px'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Temperatura'
        },
        labels: {
                format: '{value}'+ ' °C',
            style: {
                fontSize: '14px'
            }
        }
    },
    exporting: {
        buttons: {
            contextButton: {
                menuItems: ["viewFullscreen", "separator", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG"]
            }
        }
    },
    legend: {
        enabled:false
    },
    tooltip: {
        valueDecimals: 2
    },
    series: [{
        data: dataTemp,
        name: 'Temperatura'
    }]
});

//Gráfico de humedad
Highcharts.stockChart('Graph-Humedad', {
    title: {
        text: 'Humedad relativa',
        style:{
            fontSize: '22px',
           fontFamily: 'sans-serif'
        }
    },
    rangeSelector: {
        enabled: false
    }, 
    scrollbar: {
        enabled: false
    },    
    credits: false,
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Fecha'
        },
        labels: {
            style: {
                fontSize: '14px'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Humedad'
        },
        labels: {
                format: '{value}'+ ' %',
            style: {
                fontSize: '14px'
            }
        }
    },
    exporting: {
        buttons: {
            contextButton: {
                menuItems: ["viewFullscreen", "separator", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG"]
            }
        }
    },
    legend: {
        enabled:false
    },
    tooltip: {
        valueDecimals: 2
    },
    series: [{
        data: dataHum,
        name: 'Humedad'
    }]
});

//Gráfico de luz
Highcharts.stockChart('Graph-Luz', {
    title: {
        text: 'Luz Visible',
        style:{
            fontSize: '22px',
           fontFamily: 'sans-serif'
        }
    },
    rangeSelector: {
        enabled: false
    },  
    scrollbar: {
        enabled: false
    },   
    credits: false,
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Fecha'
        },
        labels: {
            style: {
                fontSize: '14px'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Luz'
        },
        labels: {
                format: '{value}'+ ' Lux',
            style: {
                fontSize: '14px'
            }
        }
    },
    exporting: {
        buttons: {
            contextButton: {
                menuItems: ["viewFullscreen", "separator", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG"]
            }
        }
    },
    legend: {
        enabled:false
    },
    tooltip: {
        valueDecimals: 1
    },
    series: [{
        data: dataLuz,
        name: 'Luz Visible'
    }]
});

//Gráfico de UV
Highcharts.stockChart('Graph-UV', {
    title: {
        text: 'Índice UV',
        style:{
            fontSize: '22px',
           fontFamily: 'sans-serif'
        }
    },
    rangeSelector: {
        enabled: false
    },   
    scrollbar: {
        enabled: false
    }, 
    credits: false,
    xAxis: {
        type: 'datetime',
        title: {
            text: 'Fecha'
        },
        labels: {
            style: {
                fontSize: '14px'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Índice UV'
        },
        labels: {
                format: '{value}',
            style: {
                fontSize: '14px'
            }
        }
    },
    exporting: {
        buttons: {
            contextButton: {
                menuItems: ["viewFullscreen", "separator", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG"]
            }
        }
    },
    tooltip: {
        valueDecimals: 1
    },
    legend: {
        enabled:false
    },
    series: [{
        data: dataUV,
        name: 'Índice UV'
    }]
});