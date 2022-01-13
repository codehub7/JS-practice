let id2 = Symbol("id")
let id1 = Symbol('id')

console.log(id1==id2) // false , two different ref

//console.log(id1 + "I") // symbol can't convert to a string

console.log(id1.toString())

console.log(id1.description)


let user = {
    name: "Rezwan"
}

let id = Symbol('id')
user[id] = 1
user[id1] = "New symbol"
console.log(user[id]) // accessed, it's a way so that restrict this property from other third party code
console.log(user[id1])
console.log(user[Symbol('id')]) // undefined

for (let key in user){
    console.log(key+" = "+user[key]) // see , Symbol('id') property can't see
}

//global symbol registry
let globalId = Symbol.for('id')
let currUser = {
    name: "RK"
}
currUser[globalId] = 23;

for (let key in currUser){
    console.log(key+" = "+currUser[key]) // see , Symbol('id') property can't see
}


let globalIdAgain = Symbol.for('id')
console.log("id again: "+currUser[globalIdAgain])
console.log("Key For: "+Symbol.keyFor(globalId))
