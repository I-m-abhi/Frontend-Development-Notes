// 1. Conditional Statement

// Write a program to check if a number is even or odd
let isEvenOddNumber = 7;
if(isEvenOddNumber % 2 === 0){
  console.log(`${isEvenOddNumber} is even`);
}else{
  console.log(`${isEvenOddNumber} is odd`);
}
// Write a program to check if a number is prime

// Write a program to check if a number is negative, zero, positive
let wholeNumber = 0;
if(wholeNumber === 0){
  console.log('Number is Zero');
}else if(wholeNumber > 0){
  console.log('Number is Positive');
}else{
  console.log('Number is Negative');
}

// Write a program to validate a user where he can vote or not on the aspect of age, isCitizenship, isRegistered
let userAge = 17;
let isCitizenship = false;
let isRegistered = true;
if(userAge >= 18){
  if(isCitizenship){
    if(isRegistered){
      console.log('You are eligible for vote');
    }else{
      console.log('You are not eligible to vote due to registration status');
    }
  }else{
    console.log('You are not eligible to vote due to citizenship status');
  }
}else {
  console.log('You are not eligible for vote');
}


// 2. Switch Statement
let day = 'Friday';
switch(day){
  case 'Monday':
    console.log('Today is Monday');
    break;
  case 'Tuesday':
    console.log('Today is Tuesday');
    break;
  case 'Friday':
    console.log('Today is Friday');
    break;
  default:
    console.log('No case matches');   
}

let areaOfShape = 'square';
let sideOfSquare = 5;
let lengthOfRectangle = 10;
let braethOfRectangle = 20;
let radius = 2;
let result;

switch(areaOfShape){
  case 'square':
    result = sideOfSquare * sideOfSquare;
    console.log(result);
    break;
  case 'rectangel':
    result = 2 * (lengthOfRectangle * braethOfRectangle);
    console.log(result);
    break;
  case 'circle':
    result = 3.14 * radius * radius;
    console.log(result);
    break;
  default:
    console.log('Area of this shape is not defined');   
}