//There’s a background process in the JavaScript engine that is called garbage collector. 
// It monitors all objects and removes those that have become unreachable.
let user = {
    name: "John"
}

let admin = user

user = null // still the object is referenced by admin variable, so reachable

console.log(admin.name) 
