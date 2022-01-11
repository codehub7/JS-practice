
// both comparison works in a different way
// > , ==  doesn't convert type, but >= converts type , so null becomes 0 that case
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true

// undefined is not comparable
console.log("UNDEFINED")
console.log( undefined > 0 )  // false
console.log( undefined < 0 )  // false
console.log( undefined == 0 )  // false
console.log( undefined >= 0 )  // false

// 5 > 4 → true
// "apple" > "pineapple" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false
