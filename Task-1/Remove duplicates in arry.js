const uniqueNumbers = (function(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
})([1, 2, 3, 4, 3, 2, 1, 5, 6]);

console.log(uniqueNumbers.join(' '));