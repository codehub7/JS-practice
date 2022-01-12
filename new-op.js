function User(name, age){
    this.name = name;
    this.age = age;
}


let user = new User("Rezwan", 25)

console.log(user.name)


function User(name) {
    if (!new.target) { // if you run me without new
      return new User(name); // ...I will add new for you
    }
    this.name = name;
}