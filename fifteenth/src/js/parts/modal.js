function modal() {
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  function openForm() {
    overlay.style.display = 'block';
    this.classList.add('more-dplash');
    document.body.style.overflow = 'hidden';
  }

  function closeForm() {
    overlay.style.display = 'none';
    more.classList.remove('more-dplash');
    document.body.style.overflow = '';
  }

  more.addEventListener('click', openForm);
  close.addEventListener('click', closeForm);

  // Modal 2
  let more2 = document.getElementsByClassName('description-btn');

  for (let i = 0; i < more2.length; i++) {
    more2[i].addEventListener('click', openForm);
    close.addEventListener('click', closeForm);
  }
}

module.exports = modal;