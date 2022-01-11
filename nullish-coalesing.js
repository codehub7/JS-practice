// As it treats null and undefined similarly, we’ll use a special term here, in this article. We’ll say that an expression is “defined” when it’s neither null nor undefined.

// The result of a ?? b is:
    // if a is defined, then a,
    // if a isn’t defined, then b.



console.log(undefined ?? null ?? 33)  // returns first defined value

let user ;
console.log(user ?? "Not a user")


// This can be done by || similarly as || returns first true value
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

//------------------------comparison || vs ??   -----------------
// || returns the first truthy value.
// ?? returns the first defined value.
let height = 0;
console.log(height || 100); // 100 , first true value
console.log(height ?? 100); // 0 , first defined value

// Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.
let x = 1 && 2 ?? 3; // Syntax error
let x = (1 && 2) ?? 3; // Works, (1 && 2 )  => 2  , that's means 2 ?? 3  => 2 , first defined value
console.log(x); // 2

