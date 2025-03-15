/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
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

});

      document.addEventListener("DOMContentLoaded", function () {
        var headerContent = document.getElementById("headerContent");
        var headerMinimal = document.getElementById("headerMinimal");
        // Tentukan halaman saat ini berdasarkan URL
        var path = window.location.pathname;
        // Misalnya: jika halaman bukan beranda (misal, selain "/beranda.html"), secara default header di-collapse.
        if (path !== "/" && path !== "/index.html" && path !== "/beranda.html") {
          headerContent.classList.add("collapsed");
          headerContent.classList.remove("expanded");
        } else {
          // Jika berada di beranda, tampilkan header secara penuh (expanded) pada awalnya.
          headerContent.classList.remove("collapsed");
          headerContent.classList.add("expanded");
        }
        // Ketika bagian header minimal diklik, toggle antara collapse dan expand
        headerMinimal.addEventListener("click", function () {
          headerContent.classList.toggle("collapsed");
          headerContent.classList.toggle("expanded");
        });
      });