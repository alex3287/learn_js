// первая задача
let menu_items = document.getElementsByTagName('li'),
    menu = document.querySelector('.menu'),
    item = document.createElement('li');

menu.insertBefore(menu_items[2], menu_items[1]);

item.classList.add('menu-item');
item.textContent = 'Пятый пункт';
menu.appendChild(item);

// вторая задача
document.body.style.background = "url('./img/apple_true.jpg') center no-repeat";

// третья задача
let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';

// четвертая задача
let advertising = document.querySelector('.adv');
advertising.remove();

// пятая задача
let question = prompt('Ваше отношение к технике Apple?', ' '),
answer = document.getElementById('prompt');
answer.textContent = question;
