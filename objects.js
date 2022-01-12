// object is a optional list of properties. property is key-value pair

//let user = new Object(); // "object constructor" syntax
//let user = {};  // "object literal" syntax

let newUser = {
    name: 'Pranto',
    age: 24,
    "multi word property": true  // multi word property quoted
}
console.log("MULTI WORD PROPERTY: ", newUser['multi word property'])  // square bracket works for all property 
newUser.isAdmin = true;  // ADD property
// delete newUser.age  // DELETE property
console.log(newUser.name+ " , age: "+ newUser.age+" , Admin status: "+ newUser.isAdmin)

// property key can be used from another variable at run-time
let fruitKey = 'fKey'
let bag ={
    [fruitKey]: 'Apple'
}
console.log(bag.fKey)

// Property value shorthand
function makeUser(name, age) {
    return {
      name: name,
      age: age
    };
  }
  
let user = makeUser("John", 30);
console.log(user.name); // John
function makeUser(name, age) {
    return {
        name, // same as name: name
        age // same as age: age
    };
}

// no property limitation , even reserved words can be property " let , for , return"
console.log("Property Existance check---------------");

console.log("fKey" in bag) // true
console.log("habijabi" in bag) // false

console.log("Looping through object---------------");
for(let key in newUser){
    console.log("Key: "+key+" : Value: "+newUser[key])
}