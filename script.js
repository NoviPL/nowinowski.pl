document.getElementById('year').textContent = new Date().getFullYear();

const elements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

elements.forEach((element) => observer.observe(element));
