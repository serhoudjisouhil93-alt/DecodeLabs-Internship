document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const siteNav = document.getElementById('siteNav');

    if (navToggle && siteNav) {
        navToggle.addEventListener('click', () => {
            // Toggle active classes for CSS animations and visibility
            const isActive = navToggle.classList.toggle('is-active');
            siteNav.classList.toggle('is-active');

            // Update ARIA attribute for accessibility compliance
            navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });

        // Close mobile nav when clicking a link
        const navLinks = siteNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('is-active');
                siteNav.classList.remove('is-active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});