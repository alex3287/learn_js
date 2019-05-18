function form() {
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

    function clearInput() {
      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }
    }

    postData(formData)
      .then(() => statusMessage.innerHTML = message.loading)
      .then(() => statusMessage.innerHTML = message.success)
      .catch(() => statusMessage.innerHTML = message.failure)
      .then(clearInput)
  });

  // валидация формы
  let valid = form.querySelector('.popup-form__input');
  valid.pattern = "[+][0-9]{11}";

  // нижняя форма

  let formLower = document.getElementById('form'),
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
      .then(() => statusMessage_2.innerHTML = message.loading)
      .then(() => statusMessage_2.innerHTML = message.success)
      .catch(() => statusMessage_2.innerHTML = message.failure)
      .then(clearInput_2)
  });
// валидация формы
let valid2 = formLower.querySelectorAll('input')[1];
valid2.pattern = "[+][0-9]{11}";
}

module.exports = form;