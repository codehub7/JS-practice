// implicit binding
// explicit binding
// new binding
// window binding

function sayMyName(v1, v2){
    console.log("I am the danger : name: "+ this.name)
    console.log('v1: '+ v1+ " v2: "+v2)
}

let me = {
    name: 'Pranto',
    age: 33
}

//sayMyName() // undefined as it is being from window context
sayMyName.call(me, 'hello v1', 'hello v2')
sayMyName.apply(me, ['hello v1', 'hello v2'])
let sayNameNew = sayMyName.bind(me, 'hello v1', 'hello v2') // return another function
sayNameNew()