
function sumAll(...nums){
    let total = 0

    for (let i of nums)total+=i
    return total;
}

console.log(sumAll(1,2,5,6))

function symbolAll(...sims){
    console.log('------for...in--------')  // focus on property key of an object
    for(let x in sims){
        console.log(x+": "+ sims[x].toString())
    }

    console.log('------for...of--------') // focus on values of an iterable object
    for(let x of sims){
        console.log(x)
    }
}

symbolAll(Symbol('id-1'), Symbol('id-2'), Symbol('id-3'))

function argumentsVariableTest(){
    console.log(arguments.length)
    console.log(arguments[0])
    console.log(arguments[1])
}
argumentsVariableTest('Julish', "Rezwan", "Mahin", "Nasif")

// Arrow functions do not have "arguments"

//spread syntax
console.log("---------------SPREAD SYNTAX-----------------")
let arr = [1,2,3]
let newArr = [...arr]

let arr3 = [...arr, 99999, ...newArr]
console.log(newArr)
newArr[0] = 39393
console.log(arr3 + " length: "+ arr3.length)

let str = 'Rezwan'
console.log([...str])

let user1 = {
    name: 'Pranto',
    study: 'JS',
    office:{
        name: 'Enosis Solutions',
        mentor: 'Suhail Mahmood'
    }
}

let user2 = {...user1} // same as Object.assign() , shallow copy
user1.office.name = 'Updated Enosis'

console.log(user1)
console.log(user2)
console.log(JSON.stringify(user1))
console.log(JSON.stringify(user1)== JSON.stringify(user2))

