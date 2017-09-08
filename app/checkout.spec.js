'use strict';

import pricingRules from "./pricingRules"

let chai = require('chai'),
    path = require('path');

chai.should();

let Checkout = require(path.join(__dirname + "/app", '..', 'checkOut'));

describe('Testing checkout', () => {
    let checkout;

    beforeEach(() => {
        checkout = new Checkout(pricingRules);
    });

    describe('Scan', () => {
        it("Should throw an exception if the product doesnt matches any pricing rules", () => {
            var err = new Error("Product doesn't exists")
            checkout.scan("GLASSES").should.throw(err)
        })
        it("Should add a new item to the 'scanned' variable with value 1 if is not already in the array", () => {
            checkout.scan("VOUCHER")
            checkout.scanned.get("VOUCHER").should.equal(1)
        })
        it("If the item already exists should increase the value", () => {
            checkout.scan("VOUCHER").scan("VOUCHER")
            checkout.scanned.get("VOUCHER").should.equal(2)
        })
        it("Example: VOUCHER, TSHIRT, VOUCHER, MUG, TSHIRT, TSHIRT", () => {
            checkout
                .scan("VOUCHER")
                .scan("TSHIRT")
                .scan("VOUCHER")
                .scan("MUG")
                .scan("TSHIRT")
                .scan("TSHIRT")

            checkout.scanned.get("MUG").should.equal(1)
            checkout.scanned.get("VOUCHER").should.equal(2)
            checkout.scanned.get("TSHIRT").should.equal(3)
        })
    })
    describe('Total', () => {
        it("Should return 0€ if scanned variable is empty", () => {
            checkout.total().should.equal("0.00€")
        })
        it("Should return the price of the scanned if they do not matches any deal", () => {
            checkout.scan("VOUCHER")
            checkout.total().should.equal("5.00€")
        })
        it("Should return the price of the scanned if they do not matches any deal multiple example", () => {
            checkout
                .scan("MUG")
                .scan("TSHIRT")
            checkout.total().should.equal("27.50€")
        })
        it("Should have two decimals and end with €", () => {
            checkout
                .scan("MUG")
                .scan("TSHIRT")
            let value = checkout.total()
            let regex = /([0-9])*.[0-9][0-9]€/
            regex.test(value).should.equal(true)
        })
    })
    describe('Challenge suggested examples', () => {
        it("scanned: VOUCHER, TSHIRT, MUG should be equal to 32.50€", () => {
            checkout
                .scan("VOUCHER")
                .scan("TSHIRT")
                .scan("MUG")
            checkout.total().should.equal("32.50€")
        })
        it("scanned: VOUCHER, TSHIRT, VOUCHER should be equal to 25.00€", () => {
            checkout
                .scan("VOUCHER")
                .scan("TSHIRT")
                .scan("VOUCHER")
            checkout.total().should.equal("25.00€")
        })
        it("scanned: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT should be equal to 81.00€", () => {
            checkout
                .scan("TSHIRT")
                .scan("TSHIRT")
                .scan("TSHIRT")
                .scan("VOUCHER")
                .scan("TSHIRT")
            checkout.total().should.equal("81.00€")
        })
        it("scanned: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT should be equal to 74.50€", () => {
            checkout
                .scan("VOUCHER")
                .scan("TSHIRT")
                .scan("VOUCHER")
                .scan("VOUCHER")
                .scan("MUG")
                .scan("TSHIRT")
                .scan("TSHIRT")
                .scan("VOUCHER")
            checkout.total().should.equal("74.50€")
        })
    })
});