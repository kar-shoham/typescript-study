"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33; // no score can be both number and string 
// can also do number | string | null | User (user is my own data type)...
var myFunc = function (id) {
    // id.toLowerCase() // error as id could be number as well
    if (typeof id === 'string') {
        id.toLowerCase(); // now, no error, as ts knows that its string only if it reaches here
    }
    return 10;
};
// union with arrays (IMPORTAT)
// let arr : string | number[] = [1,2,3,4,5,6,7,8,9,10, '11'] // wrong as it says its either string or arry of numbers
// let arr : string[] | number[] = [1,2,3,4,5,6,7,8,9,10, '11'] // wrong as it says it either all numbers or all strings
var arr = [1, 2, 3, '11']; // now its correct
var role = 'admin'; // can only be admin or user or superadmin
