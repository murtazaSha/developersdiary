const nav = document.querySelector('.navbar');
const toggle = document.querySelector('.menu-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('mobile-open');
    toggle.setAttribute('aria-expanded', open);
    toggle.textContent = open ? '×' : '☰';
  });
}
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('mobile-open');
    if (toggle) { toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = '☰'; }
  });
});
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 8px 30px rgba(6,78,59,.06)' : 'none';
});
