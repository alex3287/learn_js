function add_0(data) {
  return data > 9 ? data : data = '0' + data;
};

function timer() {
  let display = document.getElementById('timer'),
    now = new Date(),
    hour = now.getHours(),
    minuts = now.getMinutes(),
    second = now.getSeconds(),
    timer = add_0(hour) + ':' + add_0(minuts) + ':' + add_0(second);
  display.textContent = timer;
}

setInterval(timer, 1000);
