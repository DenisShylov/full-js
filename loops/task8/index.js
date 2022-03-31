const start = 1;
const end = 1000;
let result = 0;
let div = result;
let mods = result;
for (let i = start; i <= end; i++) {
  result += i;
  for (let i = start; i <= end; i++) {
    console.log(Math.trunc((div /= 1234)));
    mods %= 1234;
  }
}
console.log(false);
