// Темная и светлая тема
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  toggle.textContent = document.body.classList.contains('light-theme') ? '🌙' : '☀️';
});

// Анимация при прокрутке
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
cards.forEach(card => observer.observe(card));
