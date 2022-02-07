const start = 0;
const end = 1000;
let result = 0;
for (let i = start; i <= end; i++) {
  if (i % 2 !== 0) {
    console.log('Found');
    result += i;
  } else if (result * 5 > 5000) {
    console.log('Bigger');
  } else {
    console.log('Smaller oe equal');
  }
}
