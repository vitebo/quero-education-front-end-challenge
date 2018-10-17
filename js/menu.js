"use strict";

(function (win, doc) {
  var $btnToggleMainMenu = doc.querySelector('[data-js="main-menu-toggle"]');
  var $btnToggleHelpMenu = doc.querySelector('[data-js="help-menu-toggle"]');
  var $mainMenu = doc.querySelector('[data-js="main-menu"]');
  var $helpMenu = doc.querySelector('[data-js="help-menu"]');
  var $taskbar = doc.querySelector('[data-js="taskbar"]');
  $btnToggleMainMenu.addEventListener('click', function (e) {
    return $mainMenu.classList.toggle('is-expanded');
  });
  $btnToggleHelpMenu.addEventListener('click', function (e) {
    $helpMenu.classList.toggle('is-expanded');
    doc.body.classList.toggle('u-hidden-scroll-mobile');
  });
  var lastScrollY = 0;
  doc.addEventListener('scroll', function () {
    if (win.scrollY < lastScrollY) {
      $taskbar.classList.remove('is-hidden');
      lastScrollY = win.scrollY;
      return;
    }

    if (win.scrollY > 56) {
      $taskbar.classList.add('is-hidden');
      lastScrollY = win.scrollY;
    }
  });
})(window, document);