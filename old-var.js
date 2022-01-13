// --------var has no block scope , only function and global scope
{
    let letVar = 33;
    var varVar = 51;

    console.log(letVar+" "+ varVar)
}
// console.log(letVar+" "+ varVar) // error , letVar is not defined here

//--------var tolerates redeclaration----------
var x = 333
var x = 3923  // no problem , redeclaration
console.log(x)

//----------var declaration is process at preprocessing state/while execution starts--------

function testVar(){
    // count is undefined here, not uninitialized like 'let'
    count =34
    console.log(count)
    var count;
}
testVar();

// function testLet(){
//     count = 34 // error, didn't initialized
//     console.log(count) 
//     let count;
// }
// testLet()


// wrapped up a FUNCTION EXPRESSION with ( ) and then called that function
(function() {
    var message = "Hello";
    console.log(message); // Hello
  })();