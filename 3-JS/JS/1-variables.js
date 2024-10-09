const studentData = {
  studentName : 'Abhishek',
  marks : 76
}
studentData['phonr'] = 63098;
// console.log(studentData);

// convert string to a number
const a =6;
const b = String(a) ;
// console.log(typeof b);

// Swapping two variable value
let n1 = 10;
let n2 = 20;
[n1, n2] = [n2, n1];
console.log(n1, n2);

let newArray1 = [1, 2, 3, 4];
let newArray2 = [4, 5, 6];

let arr1 = [...newArray1, ...newArray2];
console.log(arr1);






const fetchData = async () => {
  const url = `https://api.data.gov.in/resource/364ee45a-7f8c-4733-a664-e8d2c1b277d6?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=20`;
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData.records)
};

// fetchData();