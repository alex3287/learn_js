'use strict'

let money, time;

// функция для ввода бюджета
function start() {
  money = +prompt('Ваш бюджет на месяц?', 50000);
  time = prompt('Введите дату в формате YYYY-MM-DD', '2019-04-18');

  while (isNaN(money) || money == "" || money ==null) {
    money = +prompt('Ваш бюджет на месяц?', 50000);
  }
}

start();

var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income:[],
  savings: true
};

// финкуия по заполнению обязательных статей бюджета
function chooseExpenses() {
  for (let i=0; i < 2; i++) {
    var a = prompt('Введите обязательную статью расходов в этом месяце', ''),
    b = prompt('Во сколько обойдется?', '');
  
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50) {
      console.log("done")
      appData.expenses[a] = b;
    } else {
      i--;
    }
  }
}

chooseExpenses();

// финкуия по заполнению необязательных статей бюджета
function chooseOptExpenses() {
  for (let i=0; i < 3; i++) {
    let a = prompt('Введите необязательную статью расходов в этом месяце', '');
  
    if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
      console.log("done")
      appData.optionalExpenses[i+1] = a;
    } else {
      i--;
    }
  }
}

chooseOptExpenses();

// функция расчет бюджета на день
function detectDayBudger(budgetMonth) {
  appData.moneyPerDay = (budgetMonth / 30).toFixed();
  alert("Ваш бюджет на один день: " + appData.moneyPerDay + " рублей");
}

detectDayBudger(appData.budget);

// функция расчета уровня достатка
function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
}

detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
      percent = +prompt("Под какой процент?");

    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

checkSavings();