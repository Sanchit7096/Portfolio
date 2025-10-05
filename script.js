
 
  const galaxy = document.getElementById("galaxy");

  function createDot() {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    galaxy.appendChild(dot);

    // random start position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    dot.style.left = x + "px";
    dot.style.top = y + "px";

    // random size
    const scale = Math.random() * 1.5 + 0.5;
    dot.style.transform = `scale(${scale})`;

    // Animate with GSAP
    gsap.fromTo(dot,
      { opacity: 0, scale: 0 },
      { 
        opacity: Math.random() * 0.8 + 0.2,
        scale: scale,
        duration: Math.random() * 2 + 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      }
    );

    // slow drifting effect
    gsap.to(dot, {
      x: `+=${Math.random() * 100 - 50}`,
      y: `+=${Math.random() * 100 - 50}`,
      duration: 5 + Math.random() * 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  // create many dots
  for (let i = 0; i < 100; i++) {
    createDot();
  }



  /* ----------------------------------
     Hamburger Menu Toggle
  ---------------------------------- */
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const closeBtn = document.getElementById("closeBtn");

  // Open Menu
  hamburger.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    hamburger.classList.add("hide");
  });

  // Close Menu
  closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    hamburger.classList.remove("hide");
  });

 
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});
ScrollTrigger.defaults({
  toggleActions: "play none none none",
  once: true
});
