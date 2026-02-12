(function () {
  function normalizeLinks(root) {
    var anchors = root.querySelectorAll('a[href]');

    anchors.forEach(function (anchor) {
      var href = anchor.getAttribute('href');

      if (!href) return;
      if (href.startsWith('/') || href.startsWith('#')) return;
      if (href.startsWith('http://') || href.startsWith('https://')) return;
      if (href.startsWith('mailto:') || href.startsWith('tel:')) return;

      anchor.setAttribute('href', '/' + href.replace(/^\.\//, ''));
    });
  }

  async function injectPartial(targetId, partialPath) {
    var target = document.getElementById(targetId);
    if (!target) return;

    try {
      var response = await fetch(partialPath, { credentials: 'same-origin' });
      if (!response.ok) {
        throw new Error(response.status + ' ' + response.statusText);
      }

      target.innerHTML = await response.text();
      normalizeLinks(target);
    } catch (error) {
      console.warn('[includes] Failed to load ' + partialPath, error);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectPartial('site-header', '/partials/header.html');
    injectPartial('site-footer', '/partials/footer.html');
  });
})();
