document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    setInterval(() => {
        carousel.scrollBy({
            left: carousel.offsetWidth,
            behavior: 'smooth',
        });
    }, 2000);
});
