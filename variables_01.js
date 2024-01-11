"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var username = "Shoham"; // data type is in all lowercase
// console.log(uername); // shows error clearly unlike js 
// username = 10; // ts shows us error to save from error
// username.toLowercase() // gives us warning that our method is wrong (toLowerCase actually true)
// username.toUpperCase(); // gives us string ke method recommendations only 
var myNum = 10;
// myNum.toUpperCase // shows error as its a number
// console.log(username); 
var userId = 102; // remember that number is for both int and float
// the above code is same as 
// let userId: number
// userId = 102
// let userId = 102; // its better to do this as it authmatically takes the :number part 
// more on this later (should use :datatype when not given values, like in functions)
var isLoggedIn = true;
// any keyword - basically variable for no typecheck
// used when we dont want a variable to get typechecked, we use ANY, its just a getaway
// try not to use any
var hero; // any variable is created
hero = 10;
