function calc() {
  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.innerText = 0;

  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
     let a = total;
     totalValue.innerHTML = a * place.options[place.selectedIndex].value;
      //totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == '' || restDays.value == '') {
      totalValue.innerHTML = 0;
    } else {
      //totalValue.innerHTML = total;
      let a = total;
      totalValue.innerHTML = a * place.options[place.selectedIndex].value;
    }
  });

  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });

  // валидация калькулятора

  persons.onkeypress = function (event) {
    event = event || window.event;
    if (event.charCode && (event.charCode < 48 || event.charCode > 57))
      return false;
  };

  restDays.onkeypress = function (event) {
    event = event || window.event;
    if (event.charCode && (event.charCode < 48 || event.charCode > 57))
      return false;
  };
}

module.exports = calc;