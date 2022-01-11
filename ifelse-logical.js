let accessAllowed;
let age = 33;

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(`For the age of ${age} , access permission is : `+accessAllowed);

age = 14
let message = (age<3)?"Hi Baby": (age<18)?"Hello Teenager": (age<100)?"How is life going?": "Unusual age, you are a lucky person"
console.log(message)

if ("0") {  //true
    console.log( 'Hello "0" is a true value' );
  }