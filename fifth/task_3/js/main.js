function add_0(data) {
  return data > 9 ? data : data = '0' + data;
};

function dayWeek(day) {
 switch (day) {
  case 0:
    return 'Воскресенье';
  case 1:
    return 'Понедельник';
  case 2:
    return 'Вторник';
  case 3:
    return 'Среда';
  case 4:
    return 'Четверг';
  case 5:
    return 'Пятница';
  case 6:
    return 'Суббота';
 }
};

let p1 = document.createElement('h2'),
p2 = document.createElement('h3'),
now = new Date(),
hour = now.getHours(),
minuts = now.getMinutes(),
second = now.getSeconds(),
day = now.getDate(),
month = now.getMonth();

p1.textContent = add_0(hour) +':'+add_0(minuts)+':'+add_0(second) +' ' + add_0(day) +'.'+ add_0(month)+'.'+now.getFullYear();
document.body.appendChild(p1);

p2.textContent = 'Сегодня: '+ dayWeek(now.getDay());
document.body.appendChild(p2);

//console.log(dayWeek(now.getDay()));
