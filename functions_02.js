"use strict";
// function addNumber(num: number){
//     return num + 2;
// }
// if we leave the type, its assigned to any
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(addNumber(5));
// console.log(addNumber("5")); // gives an error obv
// similarly for other function declarations like arrow functions 
// default parameters below (will generate some more code in the js)
function addTwoNumbers(num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
}
console.log(addTwoNumbers(5, 10));
// return type only number allowed now
// do explicitly mention the return type (even void)
function addNumber(num) {
    // return "lol"; // gives error
    return num + 2;
}
//! there is return type "never" that should be used in cases like error handler (similar to void but used in cases where function throws exception or terminates execn of program)
// in arrow functions
var multiplyNumber = function (num) { return num * 10; };
