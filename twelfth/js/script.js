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


function postData(data) {

    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        request.onreadystatechange = function () {
            if (request.readyState < 4) {
                resolve()
            } else if (request.readyState === 4 && request.status == 200) {
                resolve()
            } else {
                reject()
            }
        }

        request.send(data);
    })
} //end postData

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status');


    form.addEventListener('submit', function (event) {
       event.preventDefault();
       form.appendChild(statusMessage);
       let formData = new FormData(form);

/*function postData(data) {

    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        request.onreadystatechange = function () {
            if (request.readyState < 4) {
                resolve()
            } else if (request.readyState === 4 && request.status == 200) {
                resolve()
            } else {
                reject()
            }
        }

        request.send(data);
    })
} //end postData*/

    function clearInput() {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    }

    postData(formData)
        .then(()=> statusMessage.innerHTML = message.loading)
        .then(()=> statusMessage.innerHTML = message.success)
        .catch(()=> statusMessage.innerHTML = message.failure)
        .then(clearInput)
   });

 // валидация формы
    
     let valid = form.querySelector('.popup-form__input');
     valid.pattern = "[+][0-9]{11}";



// нижняя форма

let formLower =  document.getElementById('form'),
inputs = formLower.getElementsByTagName('input'),
statusMessage_2 = document.createElement('div');


statusMessage_2.classList.add('status');

formLower.addEventListener('submit', function (event) {
   event.preventDefault();
   formLower.appendChild(statusMessage_2);
   let formData_2 = new FormData(formLower);


    function clearInput_2() {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    }

    postData(formData_2)
        .then(()=> statusMessage_2.innerHTML = message.loading)
        .then(()=> statusMessage_2.innerHTML = message.success)
        .catch(()=> statusMessage_2.innerHTML = message.failure)
        .then(clearInput_2)
});


});