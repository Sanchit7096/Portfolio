
document.addEventListener("DOMContentLoaded", function () {

  /* ----------------------------------
     GALAXY BACKGROUND
  ---------------------------------- */
  const galaxy = document.getElementById("galaxy");

  // Use fewer dots on mobile to improve performance
  const isMobile = window.innerWidth <= 768;
  const DOT_COUNT = isMobile ? 35 : 100;

  function createDot() {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    galaxy.appendChild(dot);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    dot.style.left = x + "px";
    dot.style.top = y + "px";

    const scale = Math.random() * 1.5 + 0.5;
    dot.style.transform = `scale(${scale})`;

    // Twinkling animation
    gsap.fromTo(
      dot,
      { opacity: 0, scale: 0 },
      {
        opacity: Math.random() * 0.8 + 0.2,
        scale: scale,
        duration: Math.random() * 2 + 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );

    // Slow drifting — skip on mobile to save CPU
    if (!isMobile) {
      gsap.to(dot, {
        x: `+=${Math.random() * 100 - 50}`,
        y: `+=${Math.random() * 100 - 50}`,
        duration: 5 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }

  // Batch create dots after a short delay so the page renders first
  requestAnimationFrame(function () {
    for (let i = 0; i < DOT_COUNT; i++) {
      createDot();
    }
  });

  /* ----------------------------------
     Hamburger Menu Toggle
  ---------------------------------- */
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.getElementById("closeBtn");

  hamburger.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    hamburger.classList.add("hide");
  });

  closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    hamburger.classList.remove("hide");
  });

  // Close menu when clicking outside the side menu on mobile
  document.addEventListener("click", (e) => {
    if (
      sideMenu.classList.contains("active") &&
      !sideMenu.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      sideMenu.classList.remove("active");
      hamburger.classList.remove("hide");
    }
  });

  /* ----------------------------------
     ScrollTrigger Setup
  ---------------------------------- */
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.defaults({
      toggleActions: "play none none none",
      once: true,
    });

    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });
  }
});
