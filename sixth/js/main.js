'use strict'

// task 1
let startCalculating = document.getElementById('start');

// task 2
let 
budgetValues = document.getElementsByClassName('budget-value')[0],
dayBudgetValues = document.getElementsByClassName('daybudget-value')[0],
levelValues = document.getElementsByClassName('level-value')[0],
expensesValues = document.getElementsByClassName('expenses-value')[0],
optionalExpensesValues = document.getElementsByClassName('optionalexpenses-value')[0],
incomeValues = document.getElementsByClassName('income-value')[0],
monthSavingsValues = document.getElementsByClassName('monthsavings-value')[0],
yearSavingsValues = document.getElementsByClassName('yearsavings-value')[0];

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
  
  // функция для ввода бюджета
  function start() {
    money = +prompt('Ваш бюджет на месяц?', 50000);
    time = prompt('Введите дату в формате YYYY-MM-DD', '2019-04-18');
  
    while (isNaN(money) || money == "" || money ==null) {
      money = +prompt('Ваш бюджет на месяц?', 50000);
    }
  }
  
  //start();
  
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
  
