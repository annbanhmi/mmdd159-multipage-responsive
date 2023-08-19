// Function to initialize Swiper when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
   
    // Swiper Initialization
    var swiper = new Swiper(".home-slider", {
        // Set the space between slides
        spaceBetween: 30,
        // Center the active slide
        centeredSlides: true,
        // Set autoplay settings
        autoplay: {
            delay: 7500, // Delay between slides in milliseconds
            disableOnInteraction: false, // Autoplay continues even on user interaction
        },
        // Enable pagination dots
        pagination: {
            el: ".swiper-pagination", // Pagination container element
            clickable: true, // Make pagination dots clickable
        },
        // Navigation buttons
        navigation: {
            nextEl: ".swiper-button-next", // Next slide button
            prevEl: ".swiper-button-prev", // Previous slide button
        },
        // Enable loop for continuous sliding
        loop: true,
    });

    // Toggle menu table from mobile view
    let menu = document.querySelector('#menu'); // Get the menu icon element
    let navbar = document.querySelector('.navbar'); // Get the navbar element

    // Event listener for menu icon click
    menu.onclick = () => {
        menu.classList.toggle('fa-times'); // Toggle the menu icon class for close icon appearance
        navbar.classList.toggle('active'); // Toggle the active class for navbar to show/hide it
    };
});
