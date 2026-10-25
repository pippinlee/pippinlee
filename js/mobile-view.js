'use strict';

(function () {
  function initializeMenu() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    var button = header.querySelector('.menu-toggle');
    var nav = header.querySelector('.site-nav');
    if (!button || !nav) return;

    var mobile = window.matchMedia('(max-width: 670px)');

    function setOpen(open) {
      header.classList.toggle('menu-open', open);
      button.setAttribute('aria-expanded', String(open));
    }

    button.addEventListener('click', function () {
      if (mobile.matches) {
        setOpen(button.getAttribute('aria-expanded') !== 'true');
      }
    });

    header.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mobile.matches &&
          button.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        button.focus();
      }
    });

    function resetMenu() {
      var focusWillHide = mobile.matches && nav.contains(document.activeElement);
      var buttonWillHide = !mobile.matches && document.activeElement === button;
      setOpen(false);
      if (focusWillHide) {
        button.focus();
      } else if (buttonWillHide) {
        var firstLink = nav.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    }

    if (mobile.addEventListener) {
      mobile.addEventListener('change', resetMenu);
    } else {
      mobile.addListener(resetMenu);
    }

    setOpen(false);
    header.classList.add('menu-ready');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMenu);
  } else {
    initializeMenu();
  }
}());
