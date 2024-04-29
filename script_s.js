function prev(button) {
    const slider = button.parentElement.parentElement;
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;

    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentIndex = index;
            slide.classList.remove('active');
        }
    });

    currentIndex--;
    if (currentIndex < 0) currentIndex = slides.length - 1;

    slides[currentIndex].classList.add('active');
}

function next(button) {
    const slider = button.parentElement.parentElement;
    const slides = slider.querySelectorAll('.slide');
    let currentIndex = 0;

    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            currentIndex = index;
            slide.classList.remove('active');
        }
    });

    currentIndex++;
    if (currentIndex >= slides.length) currentIndex = 0;

    slides[currentIndex].classList.add('active');
}


