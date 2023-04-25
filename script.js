const treeContainer = document.querySelector(".tree-container");
const trees = document.querySelectorAll(".tree");
const bulldozers = document.querySelectorAll(".bulldozer");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Tree is in view, start the animation
        bulldozers.forEach((bulldozer) => {
          bulldozer.classList.add("animate");
          console.log(observer)
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

