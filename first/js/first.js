'use strict'

var money = prompt('Ваш бюджет на месяц?', 50000);
var time = prompt('Введите дату в формате YYYY-MM-DD', '2019-04-18');
var titleCosts = prompt('Введите обязательную статью расходов в этом месяце', 'Автомобиль');
var costs = prompt('Во сколько обойдется?',1000);
var titleCosts2 = prompt('Введите обязательную статью расходов в этом месяце', 'Автомобиль');
var costs2 = prompt('Во сколько обойдется?',1000);
var appData = {
  budget: money,
  timeData: time,
  expenses: {
    titleCosts: costs,
    titleCosts2: costs
  },
  optionalExpenses: {

  },
  income:[],
  savings: false
};
var budgetOneDay =appData.budget / 30;
alert("Ваш бюджет на один день: " + budgetOneDay + " рублей");

console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses.titleCosts);