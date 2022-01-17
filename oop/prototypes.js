function Person(name){
    this.name = name;
    this.sayMyName =  ()=>{
        console.log(`Hello , ${this.name}. I am the danger`)
    }

}

let person1 = new Person('RK')

person1.sayMyName()

console.dir(person1.__proto__)