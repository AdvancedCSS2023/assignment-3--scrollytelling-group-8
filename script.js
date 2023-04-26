const treeContainer = document.querySelector(".tree-container");
const trees = document.querySelectorAll(".tree");
const bulldozers = document.querySelectorAll(".bulldozer");
const bulldozerLeft = document.querySelector(".bulldozer-left");
const bulldozerRight = document.querySelector(".bulldozer-right");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Tree is in view, start the animation
        gsap.to(bulldozerLeft, {
          duration: 2,
          x: "100%",
          repeat: -1,
          yoyo: true,
          ease: "power1.out",
        });

        gsap.to(bulldozerRight, {
          duration: 2,
          x: "100%",
          ease: "power1.out",
          repeat: -1,
          yoyo: true,
          delay: 1,
        });
      } else {
        // Tree is out of view, stop the animation
        bulldozers.forEach((bulldozer) => {
          bulldozer.classList.remove("animate");
        });
      }
    });
  },
  { threshold: 0.5 }
);

// Observe each tree
trees.forEach((tree) => {
  observer.observe(tree);
});
