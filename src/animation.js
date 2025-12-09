 const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    // Когда блок появляется — включаем анимацию
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } 
    // Когда блок ушёл ВВЕРХ — сбрасываем
    else if (entry.boundingClientRect.top > 0) {
      entry.target.classList.remove('visible');
    }

  });
}, {
  threshold: 0.2
});
  
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
