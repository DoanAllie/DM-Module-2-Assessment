///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function(acc, val) {
    return acc + val.price;
}, 0)

// console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return (cartTotal + (cartTotal * tax)) - couponValue;
}

// console.log(calcFinalPrice(100, 20, 0.1))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Some useful properties would be:
        - id (number), to identify customer
        - name (string), name of customer to know who you're dealing with
        - phoneNumber (string), contact info to send receipt, ads, etc.
        - email (string), the more info the better
        - address (string), where to send/ deliver products to if need be
        - cardNumber (string), to we can get money
        - VIP (boolean), to identify the status of our customer for special offers, etc.
        - frequency (number), how many time customer has visited or purchased from us
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerObject = {
    id: 1,
    name: "Miso",
    phoneNumber: "0123456789",
    email: "misoshibainu@gmail.com",
    address: "1 Main Street, Dogville, AC 12345",
    cardNumber: "1234567890123456",
    VIP: true,
    frequency: 100
}