(function (win, doc) {
  const $btnToggleMainMenu = doc.querySelector('[data-js="main-menu-toggle"]')
  const $btnToggleHelpMenu = doc.querySelector('[data-js="help-menu-toggle"]')
  const $mainMenu = doc.querySelector('[data-js="main-menu"]')
  const $helpMenu = doc.querySelector('[data-js="help-menu"]')
  const $taskbar = doc.querySelector('[data-js="taskbar"]')

  $btnToggleMainMenu.addEventListener('click', e => $mainMenu.classList.toggle('is-expanded'))
  $btnToggleHelpMenu.addEventListener('click', e => {
    $helpMenu.classList.toggle('is-expanded')
    doc.body.classList.toggle('u-hidden-scroll-mobile')
  })

  let lastScrollY = 0
  doc.addEventListener('scroll', () => {
    if (win.scrollY < lastScrollY) {
      $taskbar.classList.remove('is-hidden')
      lastScrollY = win.scrollY
      return
    }
    if (win.scrollY > 56) {
      $taskbar.classList.add('is-hidden')
      lastScrollY = win.scrollY
    }
  })
})(window, document)
