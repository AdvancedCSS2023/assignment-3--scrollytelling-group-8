const textElements = document.querySelectorAll('.text');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scrolled');
    } else {
      entry.target.classList.remove('scrolled');
    }
  });
});

textElements.forEach((textElement) => {
  observer.observe(textElement);
});

const bulldozers = document.querySelectorAll('.bulldozer');
const bulldozerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}, { rootMargin: '500px' });

bulldozers.forEach((bulldozer) => {
  bulldozerObserver.observe(bulldozer);
});