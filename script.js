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