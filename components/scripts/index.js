$(document).ready(function() {
    let currentSlide = 0;
    const slides = $('.slide');
    const indicators = $('.absolute.bottom-8 button');
    
    function showSlide(index) {
        slides.removeClass('opacity-100').addClass('opacity-0');
        $(slides[index]).removeClass('opacity-0').addClass('opacity-100');
        indicators.removeClass('bg-opacity-100').addClass('bg-opacity-50');
        $(indicators[index]).removeClass('bg-opacity-50').addClass('bg-opacity-100');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    $('#nextSlide').click(nextSlide);
    $('#prevSlide').click(prevSlide);
    
    indicators.each(function(index) {
        $(this).click(function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-advance slides
    setInterval(nextSlide, 5000);
    
    // Show first slide initially
    showSlide(0);
});