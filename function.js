console.log("General Funciton--------------")
function showMessage(){
    console.log("Hello, Look I am your message")
}

showMessage()
showMessage()
console.log("Local Variables js----------------")
function localMessage(){
    let message = "Hello local variable"
    console.log(message)
}
localMessage()
//console.log(message)
console.log("Outer variables----------------")
let userName = "Rezwan"
function outerVariableCheck(){
    userName = "RK"
    console.log("OUter variable check: "+userName)
}
outerVariableCheck()
console.log(userName)
console.log("Parameter Function--------------")
function paramMessage(from, to="Nobody"){
    console.log(from +' ==TO==> '+to)
}

paramMessage("Pranto", "Samrat")
paramMessage("RK") // default value
console.log("function as default value---------------")
function anotherFunc(){
    console.log("This is called as a default value")
    return 33
}
function showDefaultFunction(name , age =  anotherFunc()){
    console.log("My name is "+name+" ; and age is : "+age)
}

showDefaultFunction("RK", 14)
showDefaultFunction("Pranto")
