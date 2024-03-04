// ---Higher Order Function --- //

// - HOF is a function which takes a function as argument and return a function from it.

const radius = [1, 2, 3, 4];

//Simple function for D/F Tasks

const calArea = (radius)=>{
  let output = [];
  radius.map((r)=>output.push(Math.PI * r * r));
  return output;
}

const calParimeter = (radius)=>{
  let output = [];
  radius.map((r)=>output.push(Math.PI * r * 2));
  return output;
}

const calDiameter = (radius)=>{
  let output = [];
  radius.map((r)=>output.push(2 * r));
  return output;
}

console.log(calArea(radius));
console.log(calParimeter(radius));
console.log(calDiameter(radius));

// - DRY(Don't Reapeat Yourself) Principles.
//Same above example -

const area = (radius)=>Math.PI * radius * radius;

const perimeter = (radius)=>Math.PI * radius * 2;

const diameter = (radius)=>2 * radius;

const calculate = (radius,logic) => {
  let output = [];
  radius.map((r) => output.push(logic(r)));
  return output;
}

console.log(calculate(radius,area));  
console.log(calculate(radius,perimeter));  
console.log(calculate(radius,diameter)); 

//How to make a same function like Map

Array.prototype.calculateNew = function(logic){
    let output = [];
    for (let i = 0; i < this.length; i++) {
      output.push(logic(this[i])) 
    }
    return output;
  }
console.log(radius.map(area));
console.log(radius.calculateNew(area)); // calculateNew work as map here

Array.prototype.myUcase = function() {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.myUcase();

console.log(fruits)