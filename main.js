document.addEventListener("DOMContentLoaded", () => {
  // Swiper init
  new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  // Intersection animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("fade-in-visible", entry.isIntersecting);
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll(".scroll-section").forEach((section) => {
    section.classList.add("fade-in");
    observer.observe(section);
  });

  // Form
  const form = document.querySelector(".contact form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
      form.reset();
    });
  }
});
