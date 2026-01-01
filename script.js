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
            document.body.classList.toggle('no-scroll'); // Empêche le scroll du body
        });

        // Mobile Dropdown Toggle Logic
        const dropdownItems = document.querySelectorAll('.dropdown-item > a');

        dropdownItems.forEach(item => {
            item.addEventListener('click', function (e) {
                // Only activate on mobile
                if (window.innerWidth <= 768) {
                    e.preventDefault(); // Prevent navigation for main category links on mobile
                    const parent = this.parentElement;

                    // Close other open dropdowns (accordion style) - Optional but good for UX
                    document.querySelectorAll('.dropdown-item').forEach(el => {
                        if (el !== parent) {
                            el.classList.remove('active-dropdown');
                        }
                    });

                    parent.classList.toggle('active-dropdown');
                }
            });
        });
    }
});
