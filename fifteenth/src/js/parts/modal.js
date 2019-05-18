function modal() {
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-dplash');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-dplash');
    document.body.style.overflow = '';
  });

  // Modal 2
  let more2 = document.getElementsByClassName('description-btn');

  for (let i = 0; i < more2.length; i++) {
    more2[i].addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-dplash');
      document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
      overlay.style.display = 'none';
      more.classList.remove('more-dplash');
      document.body.style.overflow = '';
    });
  }
}

module.exports = modal;