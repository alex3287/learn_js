'use strict'

// task 1
let startCalculating = document.getElementById('start');

// task 2
let nameValues = [];
nameValues[0] = document.getElementsByClassName('budget-value');
nameValues[1] = document.getElementsByClassName('daybudget-value');
nameValues[2] = document.getElementsByClassName('level-value');
nameValues[3] = document.getElementsByClassName('expenses-value');
nameValues[4] = document.getElementsByClassName('optionalexpenses-value');
nameValues[5] = document.getElementsByClassName('income-value');
nameValues[6] = document.getElementsByClassName('monthsavings-value');
nameValues[7] = document.getElementsByClassName('yearsavings-value');

// task 3
let mandatoryExpense = document.getElementsByClassName('expenses-item');

// task 4
let buttons = document.getElementsByTagName('button'),
  approve_1 = buttons[0],
  approve_2 = buttons[1],
  calculate = buttons[2];

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




