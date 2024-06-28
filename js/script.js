document.addEventListener('DOMContentLoaded', () => {
  // Contact Form Validation
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const message = document.querySelector('#message').value;
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
      } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
      } else {
        alert('Thank you for your message!');
        contactForm.reset();
      }
    });
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Dark/Light Mode Toggle
  const themeToggle = document.createElement('button');
  themeToggle.textContent = 'Toggle Dark Mode';
  themeToggle.style.position = 'fixed';
  themeToggle.style.bottom = '10px';
  themeToggle.style.right = '10px';
  document.body.appendChild(themeToggle);

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
