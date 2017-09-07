# :moneybag: Checkout Store Solution

## :memo: Problem to solve: 
Various departments have insisted on the following discounts:

* The marketing department believes in 2-for-1 promotions (buy two of the same product, get one free), and would like for there to be a 2-for-1 special on VOUCHER items.
* The CFO insists that the best way to increase sales is with discounts on bulk purchases (buying x or more of a product, the price of that product is reduced), and demands that if you buy 3 or more TSHIRT items, the price per unit should be 19.00€.

Checkout process allows for items to be scanned in any order, and should return the total amount to be paid. Using ES6, implement a checkout process that fulfills the requirements.

## :computer: Stack used:

* Vanilla JavaScript.
* [Sass](http://sass-lang.com/)
* [Gulp](https://gulpjs.com/)
* [Karma](https://karma-runner.github.io/1.0/index.html)
* [Mocha](https://mochajs.org/")
* [Chai](http://chaijs.com/)

## :wrench: Build
1. **npm install**
2. **gulp build** (executes the css and js task to generate the bundles)

## :white_check_mark: Tests
Unit testing can be find under the app/tests folder. Here you can find the command to execute them:
**./node_modules/karma/bin/karma start**
