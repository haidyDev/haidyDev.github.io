(function () {
  function setupBackToTop(button) {
    if (!button || button.getAttribute('data-back-to-top-ready') === 'true') {
      return;
    }

    button.setAttribute('data-back-to-top-ready', 'true');

    function updateVisibility() {
      if (window.scrollY > 400) {
        button.classList.add('is-visible');
      } else {
        button.classList.remove('is-visible');
      }
    }

    button.addEventListener('click', function () {
      var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({
        top: 0,
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
    });

    window.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();
  }

  function initBackToTop() {
    var button = document.getElementById('backToTop');
    if (!button) return;
    setupBackToTop(button);
  }

  document.addEventListener('DOMContentLoaded', initBackToTop);
  window.addEventListener('load', initBackToTop);

  var observer = new MutationObserver(function () {
    initBackToTop();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
