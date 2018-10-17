(function (win, doc) {
  const $btnToggleMainMenu = doc.querySelector('[data-js="main-menu-toggle"]')
  const $btnToggleHelpMenu = doc.querySelector('[data-js="help-menu-toggle"]')
  const $mainMenu = doc.querySelector('[data-js="main-menu"]')
  const $helpMenu = doc.querySelector('[data-js="help-menu"]')
  $btnToggleMainMenu.addEventListener('click', e => $mainMenu.classList.toggle('is-expanded'))
  $btnToggleHelpMenu.addEventListener('click', e => {
    $helpMenu.classList.toggle('is-expanded')
    doc.body.classList.toggle('u-hidden-scroll-mobile')
  })
})(window, document)
