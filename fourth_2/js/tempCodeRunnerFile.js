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