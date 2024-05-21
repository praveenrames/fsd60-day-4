let Number = [1,2,3,4,5,6,7,8,9,10]
var oddNumber = Number.filter(function(Num){
    return Num % 2 !== 0;
}) 
console.log(oddNumber.join(' '));