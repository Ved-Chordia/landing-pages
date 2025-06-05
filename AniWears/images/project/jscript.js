document.addEventListener("DOMContentLoaded", function() {
    const footballIcon = document.getElementById("football-icon");

    if (footballIcon) {
        footballIcon.addEventListener("click", function() {
            window.location.href = "product-carousel.html";
        });
    }

    // Carousel functionality for product-carousel.html
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100;
        document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    }

    // Auto Slide every 3 seconds if carousel exists
    if (carouselItems.length) {
        setInterval(nextSlide, 3000);
    }
});
