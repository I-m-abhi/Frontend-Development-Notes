console.log('Array in JavaScript');

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

// console.log(alphabet.at(0));
// console.log(alphabet.at(-1));


// Looping on Array

// for(index in alphabet){
//   console.log(elem)
// }

// for(elem of alphabet){
//   console.log(elem)
// }

// alphabet.forEach((elem, idx, arrray)=>{
//   console.log(idx, elem, arrray)
// })


// CURD Operations
const months = ["January", "march", "April", "May", "June", "July", "September", "October", "November"];

// console.log(months.splice(1, 0, 'February'));

// console.log(months.splice(7, 0, 'August'));

let indexOfMarch = months.indexOf('march');
months[indexOfMarch] = 'March';

months.push('December');
// console.log(months)


// Filtering on Array
const products = [
  { name: "Smartphone", brand: "Xiaomi", price: 12999 },
  { name: "Laptop", brand: "HP", price: 45999 },
  { name: "Headphones", brand: "Sony", price: 2999 },
  { name: "Smartwatch", brand: "Amazfit", price: 4999 },
  { name: "Tablet", brand: "Samsung", price: 14999 }
];

const updatedProduct = products.filter((elem) => {
  return elem.price <= 15000;
}
)

// console.log(updatedProduct)

const uniqueValue = [1, 9, 5, 7, 3, 0, 5, 6, 7, 2, 9];

const uniqueResult = uniqueValue.filter((elem, idx, arr) => {
  return arr.indexOf(elem) === arr.lastIndexOf(elem);
})

// console.log(uniqueResult)



// const s = 'abhishek okumar';

function vowelsAndConsonants(s) {
  const vowels = "aeiou";
  for (const char of s) {
    if (vowels.includes(char)) {
      console.log(char);
    }
  }
  for (const char of s) {
    if (!vowels.includes(char)) {
      console.log(char);
    }
  }

}

// vowelsAndConsonants(s)

function getLetter(s) {
  let letter;
  switch (true) {
    case "aeiou".includes(s[0]):
      letter = "A";
      break;
    case "bcdfg".includes(s[0]):
      letter = "B";
      break;
    case "hjklm".includes(s[0]):
      letter = "C";
      break;
    case "npqrstvwxyz".includes(s[0]):
      letter = "D";
      break;
    default:
      letter = "Unknown"; // Handles cases where the first character is not a letter
  }
  
  return letter;
}

const s = 'dabhishek okumar';
console.log(getLetter(s));

