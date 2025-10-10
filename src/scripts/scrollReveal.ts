// src/scripts/scrollReveal.ts

export interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  selector?: string;
}

export function initScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -100px 0px',
    selector = '.scroll-reveal'
  } = options;

  const observerOptions: IntersectionObserverInit = {
    threshold,
    rootMargin
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  document.querySelectorAll(selector).forEach(el => {
    observer.observe(el);
  });

  return observer;
}