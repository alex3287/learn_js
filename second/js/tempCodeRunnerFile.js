'use strict'

var money = prompt('Ваш бюджет на месяц?', 50000);
var time = prompt('Введите дату в формате YYYY-MM-DD', '2019-04-18');

var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income:[],
  savings: false
};

for (let i=0; i < 2; i++) {
  var a = prompt('Введите обязательную статью расходов в этом месяце', ''),
  b = prompt('Во сколько обойдется?', '');

  if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
  && a != '' && b != '' && a.length < 50) {
    console.log("done")
    appData.expenses[a] = b;
  }
}

var budgetOneDay =appData.budget / 30;
alert("Ваш бюджет на один день: " + budgetOneDay + " рублей");

console.log(appData.budget);
console.log(appData.timeData);
console.log(appData.expenses.titleCosts);