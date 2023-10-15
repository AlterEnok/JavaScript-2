let sum = 0;

for (let i = 0; i <= 1000; i++) {
  sum += i;
}

const div = parseInt(sum / 1234);
const mod = sum % 1234;

const result = div > mod;
console.log(result ? true : false);
