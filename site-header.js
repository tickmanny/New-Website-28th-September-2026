(function () {
  function initLineFiveHeader() {
    var toggle = document.querySelector('.menu-toggle');
    var menu = document.getElementById('mobileMenu');
    if (toggle && menu && toggle.dataset.lineFiveReady !== '1') {
      toggle.dataset.lineFiveReady = '1';
      toggle.addEventListener('click', function () {
        var open = menu.classList.toggle('open');
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        document.body.classList.toggle('nav-open', open);
      });
      menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeNav);
      });
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && menu.classList.contains('open')) {
          closeNav();
          toggle.focus();
        }
      });
      window.addEventListener('resize', function () {
        if (window.innerWidth > 760) closeNav();
      });
    }
  }
  function closeNav() {
    var toggle = document.querySelector('.menu-toggle');
    var menu = document.getElementById('mobileMenu');
    if (toggle && menu) {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.classList.remove('nav-open');
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLineFiveHeader);
  } else {
    initLineFiveHeader();
  }
})();