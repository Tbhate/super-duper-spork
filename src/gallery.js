const galleryContainer = document.querySelector('.gallery-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const scrollStep = galleryContainer.clientWidth * 0.85;

nextBtn.addEventListener('click', () => {
  galleryContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  galleryContainer.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});


// open photo + SLIDER
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('imgModalContent');
  const closeBtn = document.querySelector('.img-modal-close');

  // новые кнопки модалки
  const modalPrevBtn = document.querySelector('.img-modal-prev');
  const modalNextBtn = document.querySelector('.img-modal-next');

  const images = Array.from(document.querySelectorAll('.gallery-item img'));

  let currentIndex = 0;

  // открытие картинки
  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      modal.style.display = 'flex';
      modalImg.src = img.src;
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

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
  }

  // слушатели модалки
  closeBtn.addEventListener('click', closeModal);

  if (modalNextBtn) modalNextBtn.addEventListener('click', nextImage);
  if (modalPrevBtn) modalPrevBtn.addEventListener('click', prevImage);

  // закрытие по фону
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // клавиатура
  document.addEventListener('keydown', e => {
    if (modal.style.display !== 'flex') return;

    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeModal();
  });
});