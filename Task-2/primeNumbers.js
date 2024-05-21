const isPrime = num => {
  if (num <= 1) return false; 
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPrimeNumbers = arr => arr.filter(isPrime);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const primeNumbers = getPrimeNumbers(numbers);
console.log(primeNumbers); 