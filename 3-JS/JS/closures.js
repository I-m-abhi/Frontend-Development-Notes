f// ---Closures --- //
// -A closure is the combination of a function bundled together (enclosed) with references to its surronding state (the lexical environment).

// ---Uses of Closures --- //
// 1. maintaing state in async world
// 2. setTimeout

// --- Example of Closures --- //

function p() {
  for (var i = 0; i < 5; i++) {
    function q(x) {
      setTimeout(()=>{
        console.log(x);
      },x * 1000);
    }
    q(i);
  }
  console.log('closures');
}
// p();

// -Data Hiding Example && constructor function

function Counter () {
  let count = 0;
  this.incrementCounter = ()=> {
    count++;
    console.log(count);
  }
  this.derementCounter = ()=> {
    count--;
    console.log(count);
  }
}

let counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.derementCounter();

