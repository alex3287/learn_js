'use strict'

// task 1
let startCalculating = document.getElementById('start');

// task 2
let 
budgetValue = document.getElementsByClassName('budget-value')[0],
dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
levelValue = document.getElementsByClassName('level-value')[0],
expensesValue = document.getElementsByClassName('expenses-value')[0],
optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
incomeValue = document.getElementsByClassName('income-value')[0],
monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

// task 3
let mandatoryExpense = document.getElementsByClassName('expenses-item');

// task 4
let 
  approve_1 = document.getElementsByTagName('button')[0],
  approve_2 = document.getElementsByTagName('button')[1],
  calculate = document.getElementsByTagName('button')[2];

// task 5
let costs = document.querySelectorAll('.optionalexpenses-item');

// task 6
let income = document.querySelector('.choose-income'),
  save = document.getElementsByClassName('checksavings'),
  flag = save[0].querySelector('input'),
  summa = document.querySelector('.choose-sum'),
  percent = document.querySelector('.choose-percent'),
  year = document.querySelector('.year-value'),
  month = document.querySelector('.month-value'),
  day = document.querySelector('.day-value');


let money, time;
  
startCalculating.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == "" || money ==null) {
      money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});
  
approve_1.addEventListener('click', function() {
  let sum = 0;

  for (let i=0; i < mandatoryExpense.length; i++) {
    var a = mandatoryExpense[i].value,
        b = mandatoryExpense[++i].value;
        
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i--;
    }
  }
  expensesValue.textContent = sum;
});

approve_2.addEventListener('click', function() {
  for (let i=0; i < costs.length; i++) {
    let opt = costs[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

calculate.addEventListener('click', function() {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
} else {
  dayBudgetValue.textContent = "Произошла ошибка";
}
});

income.addEventListener('input', function() {
  let items = income.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});

  var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: true,
    chooseExpenses: function() { },
    detectDayBudger: function() {  // функция расчет бюджета на день
      
      alert("Ваш бюджет на один день: " + appData.moneyPerDay + " рублей");
    },
    detectLevel: function() {     // функция расчета уровня достатка
      
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
  
