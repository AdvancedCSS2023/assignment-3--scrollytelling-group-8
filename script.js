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

const bulldozers = document.querySelectorAll('.bulldozer-container__bulldozer');
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

const tractorElement = document.querySelector('.tractor-container__tractor');

const tractorObserver  = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('tractor-animate');
    } else {
      entry.target.classList.remove('tractor-animate');
    }
  });
});

tractorObserver .observe(tractorElement);

const treeElements = document.querySelectorAll('.forest__tree');
const treeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('shake');
    } else {
      entry.target.classList.remove('shake');
    }
  });
});

treeElements.forEach((treeElement) => {
  treeObserver.observe(treeElement);
});