// Types of loops in JS

// 1. for-loop
// Write a program to check wheather a number is prime
let primeNumber = 13;
let isPrime = true;
for (let i = 2; i < primeNumber; i++) {
  if(primeNumber % i === 0){
    isPrime= false;
    break;
  }
}
if(isPrime){
  console.log(`${primeNumber} is Prime Number`);
}else{
  console.log(`${primeNumber} is not Prime Number`);
}

// Write a program to check leap year
let leapYear = 1908;
if((leapYear % 4 === 0 && leapYear % 100 !== 0) || leapYear % 400 === 0){
  console.log(`${leapYear} is a leap year`);
}else{
  console.log(`${leapYear} is not a leap year`);
}

// Write a program to draw a star pattern
for(let i =1; i <=5; i++){
  let pattern = '';
  for(let j =1; j <=i; j++){
    pattern = pattern + ' *';
  }
  console.log(pattern);
}

// // 2. for in   Also work on Array
// const data = {
//   name: 'abhi',
//   marks: '96'
// }
// for (let key in data) {
//   // console.log(key);
// }

// // 3. for of (Iterable data is like Array , String)
// const arrData = ['abhi', 'sasa', 'b2'];
// for (let val of arrData) {
//   // console.log(val);
// }

// // 4. forEach()
// arrData.forEach((elem,index,arr)=>{
// // console.log(elem , index , arr)
// })



// let arr = [];
// let arra;
// do{
//   arra = prompt('enter num')
//   arra = Number.parseInt(arra);
//   arr.push(arra)
// }while(arra !=0);
//   console.log(arr);

// 2. while-loop
// Write Program for a table
let tableNumber = 5;
let multiplier = 1;
while(multiplier <= 10){
  console.log(`${tableNumber} * ${multiplier} = ${tableNumber * multiplier}`);
  multiplier++;
}
// 3. do-while-loop
// Get the sum of n Natural number
let uptoSum = 1;
let sum =0;
do{
  sum = sum + uptoSum;
  uptoSum++;
}while(uptoSum <= 10);
console.log(`Total Sum is ${sum}`);