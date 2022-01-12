
let sum = (a,b)=> a+b
console.log(sum(3,4))

let showVar = a=>console.log("The variable is : "+ a)  // if there is only one variable, then the parenthesis around the argument can be omitted
showVar(4)

let sayHi = () => console.log("HIIIIIIIIIIIIII!"); // no argument


let multiArrow = (message, sender, receiver)=>{
    console.log(sender+" => "+receiver+"\n----------\n"+message)
}
multiArrow("Hello world, this is my first multiline arrow function", "Rezwan" , "Anonomous")