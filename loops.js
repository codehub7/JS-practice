// let i = 10;
// while(i){
//     console.log(i);
//     i--;
// }


// console.log("FOR LOOP")
// for ( i = 0 ; i < 3; i++) { 
//   console.log( i ); // 0, 1, 2
// }

// label for break/continue
outer: for (let i = 0;i<3; i++){
    for(let j = 0 ;j<3;j++){
        let input = prompt(`Value of the coordinate: (${i}, ${j})`, '')
        if(!input){
            break outer;
        }
    }
}