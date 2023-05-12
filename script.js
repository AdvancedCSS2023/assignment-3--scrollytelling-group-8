// Get the elements you want to animate
const excavatorsImage = document.querySelector('.excavators__image');
const excavatorsText = document.querySelector('.excavators__text');
const cuttingImage = document.querySelector('.cutting__image');
const cuttingText = document.querySelector('.cutting__text');
const agricultureImage = document.querySelector('.agriculture__image');
const agricultureText = document.querySelector('.agriculture__text');
const positiveImage = document.querySelector('.positive__image');
const positiveText = document.querySelector('.positive__text');

// Define the animation triggers based on the scroll position
const excavatorsTrigger = excavatorsImage.offsetTop - window.innerHeight / 2;
const cuttingTrigger = cuttingImage.offsetTop - window.innerHeight / 2;
const agricultureTrigger = agricultureImage.offsetTop - window.innerHeight / 2;
const positiveTrigger = positiveImage.offsetTop - window.innerHeight / 2;

// Add a scroll event listener to trigger the animations
window.addEventListener('scroll', () => {
  // Check if the user has scrolled past the triggers for each section
  if (window.pageYOffset >= excavatorsTrigger) {
    excavatorsImage.classList.add('animate');
    excavatorsText.classList.add('animate');
  }
  
  if (window.pageYOffset >= cuttingTrigger) {
    cuttingImage.classList.add('animate');
    cuttingText.classList.add('animate');
  }
  
  if (window.pageYOffset >= agricultureTrigger) {
    agricultureImage.classList.add('animate');
    agricultureText.classList.add('animate');
  }
  
  if (window.pageYOffset >= positiveTrigger) {
    positiveImage.classList.add('animate');
    positiveText.classList.add('animate');
  }
});