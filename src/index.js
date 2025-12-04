const burger = document.querySelector('.burger');
const menu = document.querySelector('.side-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');  
  menu.classList.toggle('active');   
});

const menuLinks = document.querySelectorAll('.side-menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');  
    burger.classList.remove('active'); 
  });
});

  const slider = document.querySelector('.result-wrapper');
const slides = document.querySelectorAll('.result-list li');
const dots = document.querySelectorAll('.dot');

slider.addEventListener('scroll', () => {
  const scrollLeft = slider.scrollLeft;
  const slideWidth = slides[0].offsetWidth;

  const index = Math.round(scrollLeft / slideWidth);

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
});


const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'flex';
  } else {
    scrollBtn.style.display = 'none';
  }
});


scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.querySelectorAll('.side-menu a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); 
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    const offset = 70; 
    const topPos = target.offsetTop - offset;

    window.scrollTo({
      top: topPos,
      behavior: 'smooth'
    });
  });
});


const btn = document.querySelector('.btn-video');

btn.addEventListener('click', () => {
  btn.classList.toggle('pause');
});