const findPalindromes = (arr) => arr.filter(str => str === str.split('').reverse().join(''));

const words = ["level"];
const palindromes = findPalindromes(words);
console.log(palindromes);