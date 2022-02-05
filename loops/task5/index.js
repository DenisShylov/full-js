const start = 1;
const end = 30;
let result = 0;
for (let i = 0; i <= end; i++) {
  if (i % 5 === 0) {
    i;
  }
  if (i % 2 === 0 && i % 4 !== 0) {
    result += i;
  }
  if (i % 3 === 0) {
    result -= i;
  }
  if (i % 4 === 0) {
    result *= i;
  } else {
    continue;
  }
}
