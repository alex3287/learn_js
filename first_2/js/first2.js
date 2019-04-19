'use strict'

let num = 33721, multiplication, power, firstTwo;
let x1 = num / 10000 | 0, x2 = num / 1000 % 10 |0, x3 = num / 100 % 10 |0, x4 = num % 100 / 10 ^ 0, x5 = num % 10;
multiplication = x1*x2*x3*x4*x5;
power = multiplication ** 3;
firstTwo = power / 100000 |0;
document.write("<h2>",'результат расчетов = ',firstTwo,"</h2>");
console.log(firstTwo);