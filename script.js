// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateThemeIcon();
    
    // Save preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Active nav link indicator
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-dark)';
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project and skill items
document.querySelectorAll('.project-item, .skill-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Mobile menu toggle
const navMenu = document.querySelector('.nav-menu');
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.style.display = 'flex';
    }
});

// Preloader simulation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === '1') {
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
    }
    if (e.altKey && e.key === '2') {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    }
    if (e.altKey && e.key === '3') {
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    }
    if (e.altKey && e.key === '4') {
        document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
    }
    if (e.altKey && e.key === '5') {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    }
});

console.log('%cKeyboard Shortcuts:', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cAlt + 1: Home | Alt + 2: About | Alt + 3: Projects | Alt + 4: Skills | Alt + 5: Contact', 'color: #764ba2; font-size: 14px;');