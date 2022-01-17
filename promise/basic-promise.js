

// let promise = new Promise(function(resolve, reject){
//     setTimeout(()=>resolve('done'), 3000);
// })

let promise = new Promise(function(resolve, reject){
    throw new Error("catch me if you can")
    setTimeout(()=>reject(new Error("ERROR")), 1000);
    throw new Error("catch me if you can")
})

promise.then(
    result=> console.log("Here is result: "+result),
    err=> console.log(err)
)
.catch(err=>console.log("CATCH: "+ err))
.finally(
    ()=> console.log("Something goes wrong after all")
);