let user = {};
// conditional operator
console.log(user.address ? user.address.street : undefined);

// even we can do it with && operator, think about it

// optional operator
user = {
    address: {
        street: "TTC Road"
    }
}
console.log( user?.address?.street ); // 'TTC Road'

// someObj?.hello // error , cause someObj is not defined yet

user = null;
let x = 0;

user?.sayHi(x++); // no "sayHi", so the execution doesn't reach x++

console.log(x); // 0, value not incremented

// It works with both functions and square brackets

let userAdmin = {
    admin() {
        console.log("I am admin");
    }
};

let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing (no such method)



// SQUARE BRACKET
let key = "firstName";
let user1 = {
  firstName: "REZWAN"
};

let user2 = null;

console.log( user1?.[key] ); // REZWAN
console.log( user2?.[key] ); // undefined