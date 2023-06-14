"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { _id: user._id, name: user.name, email: user.email, isActive: user.isActive };
}
console.log(createUser({ _id: 21, name: "rnp", email: "r@gmail.com", isActive: true }));
var myUser = {
    _id: 21,
    name: 'RNP',
    email: '<EMAIL>',
    isActive: false
};
myUser.name = "sai";
