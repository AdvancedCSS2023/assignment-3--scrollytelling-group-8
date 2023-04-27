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
const plowContainer = document.querySelector('.plow-container');
const triggerPoint = document.querySelector('.trigger-point');
const wheatTrail = plowContainer.querySelector('.wheat-trail');

const tl = new TimelineMax({
  paused: true,
  onComplete: function() {
    this.pause();
  }
});

tl.to(plowContainer, 3, {
  x: '0',
  repeat: -1,
  ease: "Power1.easeInOut",
  onUpdate: function () {
    console.log("Tractor is moving");
  },
})
.to(wheatTrail, 3, {
  backgroundPosition: '100% 0',
  ease: "Power1.easeInOut"
}, '-=3');

const detection = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      tl.play();
    }
  });
}, {
  threshold: 0.5
});

detection.observe(plowContainer);