const m = 10;
const n = 20;
let m1 = m;
let n1 = n;
let result = 1;

do {
  if (m1 % 2 === 1) {
    result *= m1;
  }
  m1++;
} while (m1 <= n1);

console.log(result);
