let sayHi  = function(){
    console.log("fucntion expression")
}
sayHi()
console.log(sayHi)

let newHi = sayHi
sayHi = function(){
    console.log('funtion expresion sayHi has changed')
}
newHi()
console.log("Fucntion as argument......")
function ask(answer, yes, no) {
    if (answer == 'yes') yes()
    else if(answer == 'no') no();
}
  
function showOk() {
    console.log( "You agreed." );
}

function showCancel() {
    console.log( "You canceled the execution." );
}
ask("yes", showOk, showCancel);
ask("no", showOk, showCancel);
// A Function Expression is created when the execution reaches it and is usable only from that moment.
// A Function Declaration can be called earlier than it is defined.
//In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

//testExp()  // will not be called as it is function expression, we can't call it from anywhere. We need to call it after execution reaches at the end of the function
let testExp = function(){
    console.log("I am function exp")
}
testExp()