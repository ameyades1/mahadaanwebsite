// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (question) {
      question.addEventListener('click', function() {
        // Close other open items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            const otherQuestion = otherItem.querySelector('.faq-question');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            if (otherQuestion && otherAnswer) {
              otherQuestion.classList.remove('active');
              otherAnswer.classList.remove('show');
            }
          }
        });

        // Toggle current item
        question.classList.toggle('active');
        answer.classList.toggle('show');
      });
    }
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe campaign cards and other elements
  const cards = document.querySelectorAll('.campaign-card, .why-card, .how-card, .stat-card');
  cards.forEach(card => {
    observer.observe(card);
  });
});
