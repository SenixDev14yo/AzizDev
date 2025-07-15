// Пока что без сложного функционала, но добавим небольшую анимацию появления контента
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  container.style.opacity = 0;
  container.style.transition = 'opacity 0.8s ease-in-out';
  
  setTimeout(() => {
    container.style.opacity = 1;
  }, 100);
});
