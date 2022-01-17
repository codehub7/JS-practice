

let promise = new Promise(function(resolve, reject){
    setTimeout(()=>resolve(1), 1000)
})


promise.then(function(result){
    console.log('first: '+result)
    return (result*2)
})
.then(function(result){
    console.log('sec: '+ result)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(result*2), 1000)
    })
})
.then(function(result){
    console.log('third: '+result)
    return (result*2)
})
.then(function(result){
    console.log('forth: '+result)
})