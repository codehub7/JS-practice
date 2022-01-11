console.log("34"/"3")

let str = "123"

let num = Number(str)
console.log(typeof num)

let age = Number("This age is not valid number, conversion will be failed")
console.log(age) //NaN => not a number
console.log(Number(undefined))  // NaN
console.log(Number(NaN)) // NaN
console.log(Number(null)) // 0
console.log(Number(true)) // 1
console.log(Number(false)) //0

console.log(Boolean(0))
console.log("Space only: "+Boolean(" ")) // space only string is true
console.log("Zero : "+Boolean("0")) // space only string is true