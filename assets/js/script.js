const toggleMenu = document.querySelector('.toggle-menu');
const mainNav = document.querySelector('#main-nav');


function toggleMenuHandler(event) {
  if (mainNav.classList.contains('__open')) {
    mainNav.classList.remove('__open');
    toggleMenu.setAttribute('aria-expanded', 'false');
    toggleMenu.innerText = 'menu';
  } else {
    mainNav.classList.add('__open');
    mainNav.querySelector('a[href="/"]').focus();
    toggleMenu.setAttribute('aria-expanded', 'true');
    toggleMenu.innerText = 'sluiten';
  }
  event.target.blur();
}

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('js');
  toggleMenu.setAttribute('aria-controls', 'main-nav');
  toggleMenu.setAttribute('aria-expanded', 'false');
})

toggleMenu.addEventListener('click', toggleMenuHandler)
