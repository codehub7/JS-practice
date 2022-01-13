function message(){
    console.log("Hello world")
}

//setTimeout(message, 1000)

function sayMyName(name){
    console.log(`${name}: I am not in danger, I am the danger.`)
}

let timerId = setTimeout(sayMyName, 5000, "Hygenberg")
clearTimeout(timerId)

// setInterval(sayMyName, 1000, "Hygenberg")
//-------------zeri delay time out
setTimeout(()=>console.log('Inside SetTimeOut')) // excecute after the next line => console.log('Below SetTimeOut')
console.log('Below SetTimeOut')

let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // remember delay from the previous call

  if (start + 100 < Date.now()) console.log(times); // show the delays after 100ms
  else setTimeout(run); // else re-schedule
});



console.log('////------------nested setTimeout------------')
// timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000); // (*)
//   }, 2000);

let i = 1;
let id = setTimeout(function run() {
  console.log('OUTSIDE');
  setTimeout(insideFunc, 100);
}, 100);

function insideFunc(){
    console.log('inside timeout')
}


setTimeout(()=> clearTimeout(id), 10000)