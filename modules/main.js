"use strict"
import {sayHi} from "./sayHi.js";
import {sayName as sayMyNameAgain, config} from "./sayMyName.js";
console.log("MAIN PAGE CALLING")
sayHi("JS")

console.log(sayMyNameAgain())
config.user = "BOSS"
console.log(sayMyNameAgain())