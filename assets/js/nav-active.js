(function () {
  function normalizePath(pathname) {
    var path = pathname || '/';

    if (path.endsWith('/')) {
      if (path === '/') return '/index.html';
      return path + 'index.html';
    }

    return path;
  }

  function toPath(href) {
    try {
      return normalizePath(new URL(href, window.location.origin).pathname);
    } catch (error) {
      return '';
    }
  }

  function applyActiveNav() {
    var navLinks = document.querySelectorAll('.nav-links a[href]');
    if (!navLinks.length) return false;

    var currentPath = normalizePath(window.location.pathname);
    var foundMatch = false;

    navLinks.forEach(function (link) {
      var linkPath = toPath(link.getAttribute('href'));
      var isActive = linkPath === currentPath;

      link.classList.toggle('active', isActive);

      if (isActive) {
        foundMatch = true;
        link.setAttribute('aria-current', 'page');
        link.style.opacity = '1';
      } else {
        link.removeAttribute('aria-current');
      }
    });

    return foundMatch;
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (applyActiveNav()) return;

    var observer = new MutationObserver(function () {
      if (applyActiveNav()) {
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(function () {
      observer.disconnect();
      applyActiveNav();
    }, 3000);
  });
})();
