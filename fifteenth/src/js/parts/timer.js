function timer() {
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
}

module.exports = timer;