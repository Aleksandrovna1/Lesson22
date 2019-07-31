'use strict';

//№1
let arr = [2, -5, 1, -2, 0, -3, 2, -14];
let newArr = arr.filter(function (numeric) {
    return numeric > 0;
});
newArr = newArr.map(function (item) {
    return Math.round(Math.sqrt(item) * 1000) / 1000;
});
console.log(newArr);

//№2
let arr2 = [4, 3, 5, 5, 0, 4, 8, 6];
let suma = arr2.reduce(function (sum, current) {
    if (current == 0) {
        arr2.splice(0);
    }
    return sum + current;
}, 0);
console.log(suma);

//№3
function summArguments() {
    let arr3 = [];
    arguments.reduce = arr3.reduce;
    return arguments.reduce(function (a, b) {
        return a + b;
    });
}
console.log(summArguments(10, 1, 2, 5));
console.log(summArguments(10));

