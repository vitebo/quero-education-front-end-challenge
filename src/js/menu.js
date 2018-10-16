(function (win, doc) {
  const $btnToggle = doc.querySelector('[data-js="menu-toggle"]')
  const $menu = doc.querySelector('[data-js="menu"]')
  $btnToggle.addEventListener('click', e => $menu.classList.toggle('is-expanded'))
})(window, document)
