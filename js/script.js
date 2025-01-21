/*document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.events-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentPosition = 0;
    const cardWidth = wrapper.querySelector('.past-event-card').offsetWidth;
    const totalCards = wrapper.querySelectorAll('.past-event-card').length;

    prevBtn.addEventListener('click', () => {
        if (currentPosition < 0) {
            currentPosition += cardWidth + 32; // 32px is the gap
            wrapper.style.transform = `translateX(${currentPosition}px)`;
        }
    });

    nextBtn.addEventListener('click', () => {
        const maxScroll = -(cardWidth + 32) * (totalCards - 2);
        if (currentPosition > maxScroll) {
            currentPosition -= cardWidth + 32;
            wrapper.style.transform = `translateX(${currentPosition}px)`;
        }
    });
});*/

/* modified vwrsion of the above code */
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.events-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    nextBtn.addEventListener('click', function() {
        const totalCards = wrapper.children.length;
        const cardsToShow = window.innerWidth <= 960 ? 1 : 2;
        if (currentIndex < totalCards - cardsToShow) {
            currentIndex += cardsToShow;
            wrapper.style.transform = `translateX(-${currentIndex * (100 / cardsToShow)}%)`;
        }
    });

    prevBtn.addEventListener('click', function() {
        const cardsToShow = window.innerWidth <= 960 ? 1 : 2;
        if (currentIndex > 0) {
            currentIndex -= cardsToShow;
            wrapper.style.transform = `translateX(-${currentIndex * (100 / cardsToShow)}%)`;
        }
    });
});

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)