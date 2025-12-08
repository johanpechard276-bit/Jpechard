
// ===== MENU MOBILE =====
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
});

// ===== FILTRAGE DES PROJETS =====
const projectSearch = document.getElementById('projectSearch');
const projectCards = document.querySelectorAll('.project-card');
const filterButtons = document.querySelectorAll('.project-filter');

projectSearch?.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    projectCards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const description = card.querySelector('p')?.textContent.toLowerCase() || '';
        const isVisible = title.includes(searchTerm) || description.includes(searchTerm);
        card.style.display = isVisible ? '' : 'none';
    });
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        filterButtons.forEach(b => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
        
        projectCards.forEach(card => {
            const tags = card.getAttribute('data-tags')?.split(',') || [];
            const isVisible = filter === 'all' || tags.includes(filter);
            card.style.display = isVisible ? '' : 'none';
        });
    });
});

// ===== SÉCURITÉ LIENS EXTERNES =====
document.querySelectorAll('a[target="_blank"]').forEach(a => {
    if (!a.rel) a.rel = 'noopener noreferrer';
});

// ===== ANIMATIONS SCROLL AVANCÉES =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observer tous les éléments avec animation
document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// ===== INITIALISATION DES ICÔNES LUCIDE =====
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});