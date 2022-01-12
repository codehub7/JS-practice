let user = {
    name: "pranto",
    study: "JS"
}

let newUser = user
newUser.age = 40

showObject(newUser)
showObject(user)


function showObject(obj){
    for(let key in obj){
        console.log("Key: "+key+" Value: "+obj[key]);
    }
}

// When an object variable is copied, the reference is copied, but the object itself is not duplicated.
console.log("DEEP COPY-------------------")
let cloneObj = {}
for(let key in user){
    cloneObj[key] = user[key];
}
console.log(user==cloneObj)
console.log(user===cloneObj)

console.log("SHALLOW COPY-------------------")
// when another object is inside a object , then object.assign() do shallow copy for that object
newUser = {}
Object.assign(newUser, user)
let nid =  { nid: "YES" }
Object.assign(newUser, {mynid:nid}); // nid object reference is being passed here
console.log(newUser==user)
console.log(newUser===user)
console.log("newUser------")
showObject(newUser)
console.log("user------")
showObject(user)
console.log("Changing nid object which is used to newUser and see what happens")
nid.nid = "NO"
console.log("newUser after changing nid object------")
showObject(newUser)
console.log(newUser.mynid.nid)
console.log("---------------------------------------------------")
user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  

clone = Object.assign({}, user);

console.log( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width++;       // change a property from one place
console.log(clone.sizes.width); // 51, see the result from the other one
console.log(user == clone)
console.log(user === clone)
