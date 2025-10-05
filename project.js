const slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(n) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[n].style.display = 'block';
}

document.querySelector('.next').onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

document.querySelector('.prev').onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

// Auto change every 3 sec
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 3000);
