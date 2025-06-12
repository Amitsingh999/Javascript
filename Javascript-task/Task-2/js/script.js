// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function sumPrimes(start, end) {
//   let sum = 0;
//   for (let i = start; i <= end; i++) {
//     if (isPrime(i)) {
//       sum += i;
//     }
//   }
//   console.log(`Sum of primes between ${start} and ${end} is ${sum}.`);
// }

// sumPrimes(21, 50);


function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function sumPrimes(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  console.log(`Sum of primes between ${start} and ${end} is ${sum}.`);
}

let start = parseInt(prompt("Enter start number:"));
let end = parseInt(prompt("Enter end number:"));

sumPrimes(start, end);

