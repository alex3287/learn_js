'use strict'

let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (let i=0; i < 7; i++) {
  if (i>4) {
    document.write("<h4>",week[i],"</h4>");
  }
  else if ( i == 4) {
    document.write("<p><i>",week[i],"</i></p>");
  }
  else {
    document.write("<p>",week[i],"</p>");
  }
}

let arr = ["34536", "4573437", "745634", "233542345", "34353", "6777745", "546567"];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] == 3 || arr[i][0] == 7) {
    console.log(arr[i]);
  }
}