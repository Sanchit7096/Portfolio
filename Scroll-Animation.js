
document.addEventListener("DOMContentLoaded", function () {
  // Guard — GSAP must be available
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger not loaded.");
    return;
  }

  // Register plugin
  gsap.registerPlugin(ScrollTrigger);

  // ── Hero headings ─────────────────────────────
  gsap.from(".heading1", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 80%",
      toggleActions: "restart none restart none",
    },
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
      toggleActions: "restart none restart none",
    },
  });

  // ── About section ─────────────────────────────
  gsap.from(".about-content .left", {
    x: -100,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
      toggleActions: "restart none restart none",
    },
  });

  gsap.from(".pera-3", {
    x: 80,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      toggleActions: "restart none restart none",
    },
  });

  gsap.from(".about-content .right", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%",
      toggleActions: "restart none restart none",
    },
  });

  // ── Skills stagger ────────────────────────────
  gsap.from(".skill", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".frontend .right",
      start: "top 80%",
      toggleActions: "restart none restart none",
    },
  });

  // ── Projects list ─────────────────────────────
  gsap.from(".project-lists", {
    y: 80,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".project-container",
      start: "top 50%",
      toggleActions: "restart none restart none",
    },
  });
});
