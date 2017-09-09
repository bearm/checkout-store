# :moneybag: Checkout Store Solution :moneybag:

## :memo: Problem to solve: 
Various departments have insisted on the following discounts:

* The marketing department believes in 2-for-1 promotions (buy two of the same product, get one free), and would like for there to be a 2-for-1 special on VOUCHER items.
* The CFO insists that the best way to increase sales is with discounts on bulk purchases (buying x or more of a product, the price of that product is reduced), and demands that if you buy 3 or more TSHIRT items, the price per unit should be 19.00€.

Checkout process allows for items to be scanned in any order, and should return the total amount to be paid. Using ES6, implement a checkout process that fulfills the requirements.

## :bulb: Solution:

The checkout class only has two functions, scan and total, the constructor receives a JSON called pricingRules that ideally:
 * Should come from an API
 * Requested with some promise in the checkout constructor or in the js that uses the checkout class
 * And created by an admin panel or something.
 * This objects can also bring more information as the size color etc, as is basically a json of the products that we are selling

And uses the deal variable where al the deal functions are assigned, each deal should be declared independently so they can be reused along the project if this gets bigger.

## :computer: Stack used:

* ES6 JavaScript.
* [Babel](https://babeljs.io/)
* [Mocha](https://mochajs.org/")
* [Chai](http://chaijs.com/)

## :wrench: How to
1. **npm install**
2. **npm run test** (to check the correct working of the app)
3. **npm run build** (to transpile the app in a dist folder)
