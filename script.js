document.getElementById('year').textContent = new Date().getFullYear();

const items = document.querySelectorAll('.card, .skills li, .title');
items.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); observer.unobserve(e.target); } });
}, { threshold: 0.15 });
items.forEach(el => observer.observe(el));
