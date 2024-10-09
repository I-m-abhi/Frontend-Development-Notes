// ---FUNCTIONS ---

// ---Callback Functions --- //
// - Whenever we pass a function inside a function known as callback function.  Some Example of functions we take a callback function
// 1. SetTimeout
// 2. SetInterval
// 3. Map , Filter , Reduce
// 4. Event Listners in JS


// Write a function for calculator
const calculator = (num1, num2, operator)=> {
  let result;
  switch(operator){
    case '+' :
      return num1 + num2;
    case '-' :
      return num1 - num2;
    case '*' :
      return num1 * num2;
      default :
      return 'Operator not found';
  }
}
// console.log(calculator(4, 2, '-'));

// Write a function to reverse a given string
const givenString = 'abhisasa2001@gmail.com';
const reverseString = ()=> {
  for(i = givenString.length - 1; i >= 0; i--){
    console.log(givenString[i]);
  }
}
// reverseString();

// Create a function to determine if a given string is PALINDROME

const palindromeString = 'aaabbaaa';
const palindrome = ()=> {
  let normalString;
  let reverseString;
  for(i = palindromeString.length - 1; i >= 0; i--){
    reverseString = palindromeString[i];
  }
  for(i = 0; i <= palindromeString.length - 1; i++){
    normalString = palindromeString[i];
  }
  if(normalString === reverseString){
    console.log('Its a Palindrome String');
  }else{
    console.log('not a Palindrome String');
  }
}
// palindrome();


