const galleryContainer = document.querySelector('.gallery-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Ширина одного "шага" прокрутки — ширина видимого блока
const scrollStep = galleryContainer.clientWidth * 0.85; // 85% peek

nextBtn.addEventListener('click', () => {
  galleryContainer.scrollBy({
    left: scrollStep,
    behavior: 'smooth'
  });
});

prevBtn.addEventListener('click', () => {
  galleryContainer.scrollBy({
    left: -scrollStep,
    behavior: 'smooth'
  });
});