"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase() --> now we can't do before we was able to do
    return num + 2;
}
var signUpUser = function (name, age, isPaid) {
    return ("Name:".concat(name, ", Age:").concat(age, ", Is Paid? ").concat(isPaid));
};
console.log(addTwo(5));
console.log(signUpUser("roshan", 21, true));
