document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(acc => {
        acc.addEventListener('click', function () {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
    // Mobile Menu Toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const navContainer = document.querySelector('.nav-container');

    if (burgerMenu && navContainer) {
        burgerMenu.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            burgerMenu.classList.toggle('open');
        });
    }
});
