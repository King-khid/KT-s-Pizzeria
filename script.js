document.addEventListener("DOMContentLoaded", function() {
    var type = new Typed('.typing-text', {
        strings: ['We serve various kinds of Pizza', 'We serve classic pizza with tomato sauce.', 'We serve pizza loaded with pepperoni and extra cheese.', 'We serve a delightful mix of seasonal vegetables'],
        typeSpeed: 120,
        loop: true
    });

    // Slider functionality (if you want to implement sliding)
    let currentSlide = 0;

    // This is just a placeholder; ensure you have slide elements if you want to use this
    const slides = document.querySelectorAll('.slide'); // Make sure you have slide elements in your HTML
    const totalSlides = slides.length;

    function showSlide(index) {
        currentSlide = (index + totalSlides) % totalSlides;
        // Assuming you have a slides container to translate
        const slidesContainer = document.querySelector('.slides'); 
        if (slidesContainer) {
            slidesContainer.style.transform = `translateX(${-currentSlide * 100}%)`;
        }
    }

    function moveSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    // If slides exist, initialize sliding
    if (totalSlides > 0) {
        setInterval(moveSlide, 5000);
        showSlide(currentSlide); // Show the first slide
    }
});


       