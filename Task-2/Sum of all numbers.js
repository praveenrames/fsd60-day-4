const sumOfArray = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const numbers = [1, 2, 3, 4, 5];
const sum = sumOfArray(numbers);
console.log(sum); 