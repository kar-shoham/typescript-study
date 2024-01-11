"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Shoham",
    age: 20,
    isStudent: true
};
var displayUser = function (_a) {
    var string = _a.name, number = _a.age;
    console.log(name);
    console.log(age);
};
// displayUser() // will show error
// displayUser({}) // will show error
displayUser(user);
