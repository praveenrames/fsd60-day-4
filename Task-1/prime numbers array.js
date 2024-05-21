const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primes = numbers.filter(function(num) {
    return isPrime(num);
});

console.log(primes.join(' '));