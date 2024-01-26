const toggleMenu = document.querySelector('button.toggle-menu');
const mainNav = document.querySelector('#main-nav');
const openDialog = document.querySelectorAll('button.open-dialog')
const dialog = document.querySelector('dialog');

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

function openDrawingModal(event) {
  const figure = event.target.parentElement;
  const img = figure.querySelector('img');
  const caption = figure.querySelector('figcaption')
  dialog.showModal();
  const image = dialog.querySelector('img');
  const figcaption = dialog.querySelector('figcaption');
  image.src = img.src;
  image.width = img.width;
  image.height = img.height;
  image.alt = img.alt;
  figcaption.textContent = caption.textContent;
  event.target.setAttribute('aria-expanded', 'true')
}

function clearModal() {
  const image = dialog.querySelector('img');
  image.getAttributeNames().forEach(attr => image.removeAttribute(attr));
  document.querySelector('.open-dialog[aria-expanded="true"]').setAttribute('aria-expanded', 'false')
}

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('js');
  toggleMenu.setAttribute('aria-controls', 'main-nav');
  toggleMenu.setAttribute('aria-expanded', 'false');
})
toggleMenu.addEventListener('click', toggleMenuHandler);
openDialog.forEach((drawing) => drawing.addEventListener('click', openDrawingModal));
dialog.addEventListener('close', clearModal);
