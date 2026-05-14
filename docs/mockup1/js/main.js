// Main JS for Mahadaan Website

// Mobile Nav Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.textContent = '☰';
            });
        });
    }

    // Sticky nav shadow on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate stats counter on scroll into view
    const statNumbers = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent.replace(/[^\d]/g, ''), 10);
                const suffix = target.textContent.replace(/\d/g, '');
                let current = 0;
                const increment = Math.ceil(finalValue / 30);
                const timer = setInterval(function() {
                    current += increment;
                    if (current >= finalValue) {
                        target.textContent = finalValue + suffix;
                        clearInterval(timer);
                        observer.unobserve(target);
                    } else {
                        target.textContent = current + suffix;
                    }
                }, 30);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => observer.observe(stat));
});
