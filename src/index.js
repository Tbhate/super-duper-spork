  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.side-menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');  
    menu.classList.toggle('active');   
  });


  const slider = document.querySelector('.result-wrapper');
const slides = document.querySelectorAll('.result-list li');
const dots = document.querySelectorAll('.dot');

slider.addEventListener('scroll', () => {
  const scrollLeft = slider.scrollLeft;
  const slideWidth = slides[0].offsetWidth;

  // Находим индекс текущего слайда
  const index = Math.round(scrollLeft / slideWidth);

  // Убираем active у всех точек
  dots.forEach(dot => dot.classList.remove('active'));
  // Добавляем active к текущей
  dots[index].classList.add('active');
});