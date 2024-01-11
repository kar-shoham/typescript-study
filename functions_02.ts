// function addNumber(num: number){
//     return num + 2;
// }
// if we leave the type, its assigned to any

// console.log(addNumber(5));

// console.log(addNumber("5")); // gives an error obv

// similarly for other function declarations like arrow functions 

// default parameters below (will generate some more code in the js)
function addTwoNumbers(num1: number, num2: number = 0){
    return num1 + num2;
}

console.log(addTwoNumbers(5, 10));


// return type only number allowed now
// do explicitly mention the return type (even void)
function addNumber(num: number): number{
    // return "lol"; // gives error
    return num + 2;
}


//! there is return type "never" that should be used in cases like error handler (similar to void but used in cases where function throws exception or terminates execn of program)

// in arrow functions
let multiplyNumber = (num: number): number => num * 10;



// there could be mutliple allowed return types(string and boolean maybe) (later...)

export {}