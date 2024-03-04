console.log('Array in Java Script');
console.log('Array is mutable , it can be changed...');

let alphabet = ['a', 'b', 'c', 'a', 'd', 'e'];
let nameLetter = ['s', 'a', 'w', 'a', 'n'];




// alphabet.forEach((currElement, index, arr)=>{
//   console.log(currElement);
//   console.log(index);
//   console.log(arr);
// },thisValue)

// nameLetter.map((currElement, index, arr)=> {
//   console.log(currElement);
//   console.log(index);
//   console.log(arr);
// })

// for(item in alphabet){
//   console.log(item);
// }

// for(item of alphabet){
//   console.log(item);
// }


// Filter in an Array
const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Phone', price: 800 },
  { name: 'Tablet', price: 300 },
  { name: 'SmartWatch', price: 150 },
];

const updatedProduct = products.filter((curElem) => {
  return curElem.price < 500;
});
// console.log(updatedProduct);

// Filter a unique value
const uniqueValue = [1, 2, 3, 4, 3, 2, 1, 5];
const getUniValue = uniqueValue.filter((item, index, arr) => {
  return arr.indexOf(item) === arr.lastIndexOf(item);
  // return arr.indexOf(item) === index;
});
// console.log(getUniValue);
// console.log(new Set(uniqueValue));
// console.log([new Set(uniqueValue)]);
// console.log([... new Set(uniqueValue)]);

// Sorting in Array
const sortNumber = [1, 2, 3, 8, 9, 4, 5, 6, 7, 11, 10];
// const sortedNum = sortNumber.sort();
// const sortedNum = sortNumber.sort((a, b)=> a - b);
const sortedNum = sortNumber.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
// console.log(sortedNum);

// Reduce method in array
const productPrice = [100, 300, 200, 500, 400];
const totalPrice = productPrice.reduce((accumulator, curElem) => {
  return accumulator + curElem;
}, 0);
console.log(totalPrice);