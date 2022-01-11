console.log(null || 1) // returns the last truthy value
console.log(undefined || null || 0 )  // all falsy , returns last value
console.log(undefined || 33 || 0 )  // returns first truthy value

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder is the first truthy value


true || console.log("Not even look up here")  // if || reaches a true returns immidiately, it doesn't look next arguments
false || console.log("Looking here if true")

/////////// AND Operator /////////////
// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0
console.log( "true value" && 0 && null); // 0

//  Precedence of AND && is higher than OR ||

///////////////! (NOT) /////////////
console.log("------------NOT--------------")
console.log(!true)
console.log(!false)
console.log(!!true)  
console.log(!!null) //  double NOT !! is sometimes used for converting a value to boolean type  ==>   false
console.log(!!"Non empty string here") // converted to Boolean ==> true
