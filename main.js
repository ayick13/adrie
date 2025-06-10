        document.addEventListener('DOMContentLoaded', function() {
            // Theme Toggle
            const htmlEl = document.documentElement;
            const themeToggleBtn = document.getElementById('theme-toggle');
            const sunIcon = '<i class="fas fa-sun"></i>';
            const moonIcon = '<i class="fas fa-moon"></i>';
            const setTheme = (theme) => {
                htmlEl.setAttribute('data-bs-theme', theme);
                themeToggleBtn.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
                localStorage.setItem('theme', theme);
            };
            const savedTheme = localStorage.getItem('theme') || 'light';
            setTheme(savedTheme);
            themeToggleBtn.addEventListener('click', () => {
                const currentTheme = htmlEl.getAttribute('data-bs-theme');
                setTheme(currentTheme === 'dark' ? 'light' : 'dark');
            });

            // Back to Top button
            const backToTopButton = document.getElementById('back-to-top');
            window.addEventListener('scroll', () => {
                backToTopButton.classList.toggle('d-none', window.pageYOffset <= 300);
            });
            backToTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
            
            // Dynamic year in footer
            document.getElementById('dynamic-year').textContent = new Date().getFullYear();

            // Animate on Scroll
            const animatedElements = document.querySelectorAll('.timeline-content, .progress-bar, .counter, .animated-value, .animated-element');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        if (entry.target.classList.contains('progress-bar')) {
                            entry.target.style.width = entry.target.getAttribute('data-width') + '%';
                        }
                        const animateCounter = (el, isPercentage) => {
                             const target = +el.getAttribute(isPercentage ? 'data-value' : 'data-target');
                             const duration = 1500;
                             let current = 0;
                             const stepTime = Math.max(10, Math.floor(duration / target));
                             const timer = setInterval(() => {
                                 current += 1;
                                 el.textContent = isPercentage ? current + '%' : current;
                                 if (current >= target) {
                                     el.textContent = isPercentage ? target + '%' : target;
                                     clearInterval(timer);
                                 }
                             }, stepTime);
                        };
                        if (entry.target.classList.contains('counter')) animateCounter(entry.target, false);
                        if (entry.target.classList.contains('animated-value')) animateCounter(entry.target, true);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            animatedElements.forEach(item => observer.observe(item));
        });
