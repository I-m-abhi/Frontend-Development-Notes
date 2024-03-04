console.log('Strings in java script');

let myString = 'Abhishek Kumar';
// String search Method
console.log(myString.length);
console.log(myString.indexOf('A'));

// let result = myString.search('abhi');
// let result = myString.search(/abhi/);
// let result = myString.search(/abhi/g);
let result = myString.search(/abhi/i);
// console.log(result);


let myString2 = 'Hello JavaScript, Welcome to learning JavaScript';

// const matchingString = myString2.match('JavaScript');
// const matchingString = myString2.match(/JavaScript/);
const matchingString = myString2.match(/javascript/gi);
// console.log(matchingString);

const findString = myString2.matchAll('JavaScript');
// console.log(...findString);
for(let item of findString){
  console.log(item[0]);
}

// console.log(myString.split('').reverse().join(''));

// console.log('a'.charCodeAt(0));
console.log(String.fromCharCode(90));