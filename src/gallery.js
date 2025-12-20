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


// open photo 

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('imgModalContent');
  const closeBtn = document.querySelector('.img-modal-close');

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = img.src;

      // даём браузеру отрисовать display:flex
      setTimeout(() => modal.classList.add('active'), 10);

      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
      modalImg.src = '';
      document.body.style.overflow = '';
    }, 300);
  }

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
});