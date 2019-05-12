window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // timer

    let deadline = '2019-5-22';

    function add_0(data) {
        return data > 9 ? data : data = '0' + data;
    };

    function getTimeRemaining(endTime) {
        let total = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((total / 1000) % 60),
            minutes = Math.floor((total / 1000 / 60) % 60),
            hours = Math.floor(total / (1000 * 60 * 60));

        return {
            'total': total,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getTimeRemaining(endTime);
            hours.textContent = add_0(t.hours);
            minutes.textContent = add_0(t.minutes);
            seconds.textContent = add_0(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = add_0(0);
                minutes.textContent = add_0(0);
                seconds.textContent = add_0(0);
            }
        }
    }

    setClock('timer', deadline);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-dplash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-dplash');
        document.body.style.overflow = '';
    });

// Modal 2
let more2 = document.getElementsByClassName('description-btn');

for (let i = 0; i < more2.length; i++) {
    more2[i].addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-dplash'); 
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-dplash');
        document.body.style.overflow = '';
    });
}

// Form
let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжимся!',
    failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
       event.preventDefault();
       form.appendChild(statusMessage);

       let request = new XMLHttpRequest();
       request.open('POST','server.php');
       request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

       let formData = new FormData(form);
       request.send(formData);

       request.addEventListener('readystatechange', function () {
          if (request.readyState < 4) {
              statusMessage.innerHTML = message.loading;
          } else if (request.readyState === 4 && request.status == 200) {
              statusMessage.innerHTML = message.success;
          } else {
              statusMessage.innerHTML = message.failure;
          }
       });

       for (let i = 0; i < input.length; i++) {
           input[i].value = '';
       }
    });

 // валидация формы
    
    let valid = form.querySelector('.popup-form__input');
    valid.pattern = "[+][0-9]{11}";

});