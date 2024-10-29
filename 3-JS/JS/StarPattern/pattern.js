// 1. Square Star Pattern

// let pattern = '';
// for(i=1; i<=5; i++){
//   for(j=1; j<=5; j++){
//   pattern = pattern + '* ';
//   }
//   pattern += "\n";
// }
// console.log(pattern);


// 2. Hollow Square Pattern

// let n=5;
// let pattern = '';
// for(let i=1; i <= n; i++){
//   for(let j=1; j<= n; j++){
//     if(i === 1 || i === n){
//       pattern = pattern + '* ';
//     }else{
//       if(j === 1 || j === n){
//         pattern = pattern + '* ';
//       }else{
//         pattern = pattern + '  ';
//       }
//     }
//   }
//   pattern += "\n";
// }
// console.log(pattern);

// 3. Right Triangle Pattern

// let n = 5;
// for(i=1; i <= n; i++){
//   let pattern = '';
//   for(j=1; j <= n; j++){
//     if(j <= n-i){
//       pattern = pattern + '  ';
//     }else{
//       pattern = pattern + '* ';
//     }
//   }
//   console.log(pattern);
// }

// 4. Left Triangle Pattern

// for(i=1; i <= 5; i++){
//   let pattern = '';
//   for(j=1; j <= i; j++){
//     pattern = pattern + '* ';
//   }
//   console.log(pattern);
// }

// 5. Downward Triangle Star Pattern.

// for(i=5; i >= 0; i--){
//   let pattern = '';
//   for(j=1; j <= i; j++){
//     pattern = pattern + '* ';
//   }
//   console.log(pattern);
// }

// 6. Hollow Triangle Star Pattern