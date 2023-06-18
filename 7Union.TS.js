"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score: "roshan";
score: true;
var roshan = { name: "roshan", id: 123 };
roshan = { userName: "roshan", id: 123 };
function getDbId(id) {
    if (typeof id === "string")
        id = id.toLowerCase();
    console.log("DB id is: ".concat(id));
}
getDbId(2);
getDbId("RN");
var data = [1, 2, 3];
var data2 = ["4", "5"];
var data3 = [1, 2, 3, "5"];
data3.forEach(function (item) {
    console.log(typeof item);
});
