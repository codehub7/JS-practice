function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  console.log( counter2() ); // 0
  console.log( counter2() ); // 1


  function first(a){
      return function(b){
          return a+b;
      }
  }

  console.log(first(13)(3))

let x = 33;
function func(){
    console.log(x); // error, that's because at this lexical enviroment x variable in uninitialized, but tried to access though
    let x = 11;
}
func()