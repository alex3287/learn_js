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
  savings: true,
  chooseExpenses: function() {    // финкуия по заполнению обязательных статей бюджета
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
  },
  detectDayBudger: function() {  // функция расчет бюджета на день
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на один день: " + appData.moneyPerDay + " рублей");
  },
  detectLevel: function() {     // функция расчета уровня достатка
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
          percent = +prompt("Под какой процент?");
  
      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {   // финкуия по заполнению необязательных статей бюджета
    for (let i=0; i < 3; i++) {
      let a = prompt('Введите необязательную статью расходов в этом месяце', '');
    
      if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
        console.log("done");
        appData.optionalExpenses[i+1] = a;
      } else {
        i--;
      }
    }
  },
  chooseIncome: function() {
      let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)','');
      while (items == "" || items == null) {
        items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)','');
      }
      appData.income = items.split(', ');
      appData.income.push(prompt('Может что-то ещё?'),'');
      appData.income.sort();

      let arr = appData.income;
      arr.forEach(function(item, i, arr) {
        if (i != 0) {
          alert("Способы доп.заработка: " + i +' '+ item);
        }
      });
  }
};
console.log("Наша программа включает в себя данные:");
for (let key in appData) {
  console.log(key);
}

let flag;
for (let i = 2; i < 100; i++) {
  flag = 0;
  for (let j = 2; j <= i**0.5; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }
  if (!flag) {
    console.log(i, "делители:", 1, "и", i);
  }
}