(async function () {
  const response = await fetch("api/testimonials.json");
  const testimonials = await response.json();

  function renderTestimonials(testimonials) {
    const testimonialsContainer = document.querySelector(
      ".testimonials__cards"
    );
    testimonialsContainer.innerHTML = "";
    for (const testimonial of testimonials) {
      testimonialsContainer.innerHTML += `
          <article class="testimonials__card">
            <p class="testimonials__card-description">${testimonial.testimonials}</p>
            <span class="testimonials__card-date"><time datetime="2018-10-15">${testimonial.date}</time></span>
            <h4 class="testimonials__card-user">${testimonial.userName}</h4>
            <p class="testimonials__card-profession">${testimonial.userProfession}</p>
          </article>`;
    }
  }

  renderTestimonials(testimonials);
})();
