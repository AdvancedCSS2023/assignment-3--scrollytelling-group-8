const bulldozerContainer = document.querySelector(".bulldozer-container");
const bulldozers = document.querySelectorAll(".bulldozer");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Bulldozer container is in view, start the animation
        bulldozers.forEach((bulldozer) => {
          gsap.to(bulldozer, {
            duration: 6,
            x: "450%",
            repeat: -1,
            ease: "Power0.easeInOut",
            onUpdate: function () {
              console.log("Bulldozer Left is animating");
            },
          });
        });
      } else {
        // Bulldozer container is out of view, stop the animation
        bulldozers.forEach((bulldozer) => {
          gsap.killTweensOf(bulldozer);
        });
      }
    });
  },
  { threshold: 0.5 }
);

// Observe the bulldozer container
observer.observe(bulldozerContainer);
console.log(observer);

// for scene2
const plowContainer = document.querySelector(".plow-container");
const tractor = document.querySelector(".tractor");

const detection = new IntersectionObserver(
  (entries, detection) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to(tractor, {
          duration: 3,
          x: "-250%",
          repeat: -1,
          ease: "Power0.easeInOut",
          onUpdate: function () {
            console.log("Tractor is moving");
          },
        });
      } else {
        // Tractor is out of view, stop the animation
        gsap.killTweensOf(tractor);
      }
    });
  },
  { threshold: 0.5 }
);

detection.observe(plowContainer);

// for scene3
window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.parallax');
  const background = parallax.querySelector('.background');
  const middle = parallax.querySelector('.middle');
  const foreground = parallax.querySelector('.foreground');
  
  const scrollY = window.scrollY;
  
  background.style.transform = 'translateY(' + scrollY * 0.2 + 'px)';
  middle.style.transform = 'translateY(' + scrollY * 0.5 + 'px)';
  foreground.style.transform = 'translateY(' + scrollY * 0.8 + 'px)';
});