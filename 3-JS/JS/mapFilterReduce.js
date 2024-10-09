//Mock Data
const dataArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const users = [
  { firstName: 'Abhi', age: 26 },
  { firstName: 'Sasa', age: 26 },
  { firstName: 'Abhishek', age: 34 },
  { firstName: 'B2', age: 46 },
]
//Map , Filter , Reduce is a Higher Order Function in js
// ---1. Map Function---

dataArray.map((data, index) => {
  console.log(index + ':' + data);
})

//---Double the Array---

const double = (data) => {
  return data * 2;
}
const mapResult = dataArray.map(double);
console.log(mapResult);

// ---2. Filter Function---

const filterResult = dataArray.filter((data) => {
  return data % 2 === 0;
})
console.log(filterResult);

// ---3. Reduce Function---
// we use reduce function on Array when we need single result.

const reduceResult = dataArray.reduce((sum, curr) => {
  sum = sum + curr;
  return sum;
}, 0)
console.log(reduceResult);

// Using users data to print --- {26: 2, 34: 1, 46: 1} 
const userResult = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {})
console.log(userResult);

// Using users data to print --- [Abhi , Sasa]
const userName = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, [])
console.log(userName);
