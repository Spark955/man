// script.js for Oberon Jewels

document.addEventListener('DOMContentLoaded', () => {

    // Bestseller Product Carousel
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    
    // Check if carousel elements exist
    if(track && slides.length > 0 && nextButton && prevButton) {
        let slideWidth = slides[0].getBoundingClientRect().width;
        let currentIndex = 0;

        // Arrange the slides next to one another
        const setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        };
        // slides.forEach(setSlidePosition); // This is for absolute positioning, we'll use transform

        const moveToSlide = (currentSlide, targetSlide) => {
            track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        }

        const updateSlideWidth = () => {
             slideWidth = slides[0].getBoundingClientRect().width;
             track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        };

        window.addEventListener('resize', updateSlideWidth);
        updateSlideWidth(); // Initial call
        
        // When I click left, move slides to the left
        prevButton.addEventListener('click', e => {
            if (currentIndex > 0) {
                currentIndex--;
                track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
            }
        });

        // When I click right, move slides to the right
        nextButton.addEventListener('click', e => {
            // Check how many slides are visible
            const visibleSlides = Math.floor(track.parentElement.offsetWidth / slideWidth);
            if (currentIndex < slides.length - visibleSlides) {
                currentIndex++;
                track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
            }
        });
    }

});