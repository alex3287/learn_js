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
  //save = document.getElementsByClassName('checksavings'),
  flag = document.getElementsByClassName('checksavings')[0], //save[0].querySelector('input'),
  summa = document.querySelector('.choose-sum'),
  percent = document.querySelector('.choose-percent'),
  year = document.querySelector('.year-value'),
  month = document.querySelector('.month-value'),
  day = document.querySelector('.day-value');


let money, time;

calculate.disabled = true;
approve_1.disabled = true;
approve_2.disabled = true;

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
    calculate.disabled = false;
});

// активация кнопки approve_1
mandatoryExpense[mandatoryExpense.length - 1].addEventListener('input', function() {
    if (mandatoryExpense[0].value != '' && mandatoryExpense[1].value != '' && mandatoryExpense[2].value != '' && mandatoryExpense[3].value != '') {
        approve_1.disabled = false;
    }
});

// активация кнопки approve_2
costs[0].addEventListener('input', function() {
    approve_2.disabled = false;
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
      if (+expensesValue.textContent > 0) {
        appData.moneyPerDay = ((appData.budget - (+expensesValue.textContent)) / 30).toFixed();
      } else {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
      }
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

flag.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

summa.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +summa.value,
            per = +percent.value;
        
            appData.monthIncome = sum / 100 / 12 * per;
            appData.yearIncome = sum / 100 * per;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +summa.value,
            per = +percent.value;
        
            appData.monthIncome = sum / 100 / 12 * per;
            appData.yearIncome = sum / 100 * per;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

    }
});

  var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: false
  };
  
