
console.log("top of the doc")
async function f(){
    console.log('Starting the function')
    console.log('Starting promise')
    let promise = new Promise((res, rej)=>{
        setTimeout(()=>res('done working'), 1500)
    });
    console.log('ending the promise')
    let result = await promise;

    console.log(result);
}

console.log("some work here")
console.log('before func call')
f();
console.log('after func call')

// // wait for the array of results
// let results = await Promise.all([
//     fetch(url1),
//     fetch(url2),
//     ...
//   ]);