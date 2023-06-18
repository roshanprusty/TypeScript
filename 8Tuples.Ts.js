"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = [true, "hc", 1, false];
var rgb = [255, 123, 123];
rgb[1] = 112;
var rnp = [18, "roshan"];
// let r: newUser = [18, "roshan",12]; //not possible
//but here is an cache -->
rnp.push(18);
console.log(rnp);
