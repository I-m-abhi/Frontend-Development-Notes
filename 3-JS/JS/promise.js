// Disadvantage of callback function
// 1. callback hell
// 2. Inversion of control

// --- Promise --- //
// Solution for callback hell & Inversion of control
// - A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// -Example for promise - //
const cart = ['Jeans' , 'Shirt' , 'Top' , 'Suit'];

const validateCard = (cart)=> {
  //Code for validate card
  return true;
}
const proceedToPayment = (orderId)=> {
  return new Promise(function(resolve , reject){
    resolve('Payment Succesfull');
  });
}

const createOrder = (cart)=> {
  // Creating a new Promise
  const pr = new Promise(function (resolve , reject){
    //createOrder
    //validateCard
    //orderId
    if(!validateCard(cart)) {
      // Creating a new Error
      const err = new Error('Cart is not valid');
      reject(err);
    }
    //Logic for createOrder
    const orderId = '1';
    if(orderId) {
      resolve(orderId);
    }
  })
  return pr;
}

createOrder(cart)
.then(function(orderId) {
  console.log(orderId);
  return orderId;
})
.then(function(orderId) {
  return proceedToPayment(orderId)
})
.then(function (paymentInfo) {
  console.log(paymentInfo);
})
// Handeling the Error
.catch((err)=>{
  console.log(err.message);
})