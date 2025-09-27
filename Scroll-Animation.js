// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero heading animation
gsap.from(".heading1", {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});

gsap.from(".heading2", {
  y: 100,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});

// About section fade in
gsap.from(".about-content .left", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 75%",
    toggleActions: "restart none restart none"
  }
});

gsap.from(".about-content .right", {
  x: 100,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 75%",
    toggleActions: "restart none restart none"
  }
});

// Skills icons stagger
gsap.from(".skill", {
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".frontend .right",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});

// Projects list animation
gsap.from(".project-lists", {
  y: 80,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".project-container",
    start: "top 80%",
    toggleActions: "restart none restart none"
  }
});



