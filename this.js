let user = {
    name: "Rezwan",
    age: 23,
    sayHello(){
        console.log("Hello, "+ this.name)
    }
}

user.sayHello()



user = { name: "USER" };
let admin = { name: "Admin" };

let sayHi = function () {
  console.log( "I am "+this.name );
}
sayHi() // undefined

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f']();