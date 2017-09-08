# :moneybag: Checkout Store Solution :moneybag:

## :memo: Problem to solve: 
Various departments have insisted on the following discounts:

* The marketing department believes in 2-for-1 promotions (buy two of the same product, get one free), and would like for there to be a 2-for-1 special on VOUCHER items.
* The CFO insists that the best way to increase sales is with discounts on bulk purchases (buying x or more of a product, the price of that product is reduced), and demands that if you buy 3 or more TSHIRT items, the price per unit should be 19.00€.

Checkout process allows for items to be scanned in any order, and should return the total amount to be paid. Using ES6, implement a checkout process that fulfills the requirements.

## :computer: Solution:

The checkout class only has to function, scan and total, the constructor receives a JSON that ideally should come from an API, and should be created by an admin panel etc.
There is a "deal" file where there are declared all the deals that are currently available: this also should go in separated files if we want them to be called independently in any file, and the deals variable should only declare the array importing the functions.

## :computer: Stack used:

* ES6 JavaScript.
* [Babel](https://babeljs.io/)
* [Mocha](https://mochajs.org/")
* [Chai](http://chaijs.com/)

## :wrench: How to
1. **npm install**
2. **npm run test** (to check the correct working of the app)
3. **npm run build** (to transpile the app in a dist folder)
