'use strict';

import pricingRules from "./pricingRules"

let chai = require('chai'),
    path = require('path');

chai.should();

let Checkout = require(path.join(__dirname + "/app", '..', 'checkout'));

describe('Testing checkout', () => {
    let checkout;

    beforeEach(() => {
        checkout = new Checkout(pricingRules);
    });

    describe('Testing scan system', () => {
        it("Items: VOUCHER, TSHIRT, MUG should be equal to 32.50€", () => {
            checkout.scan("VOUCHER").scan("TSHIRT").scan("MUG")
            checkout.total().should.equal("32.50€")
        })
        it("Items: VOUCHER, TSHIRT, VOUCHER should be equal to 25.00€", () => {
            checkout.scan("VOUCHER").scan("TSHIRT").scan("VOUCHER")
            checkout.total().should.equal("25.00€")
        })
        it("Items: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT should be equal to 81.00€", () => {
            checkout.scan("TSHIRT").scan("TSHIRT").scan("TSHIRT").scan("VOUCHER").scan("TSHIRT")
            checkout.total().should.equal("81.00€")
        })
        it("Items: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT should be equal to 74.50€", () => {
            checkout.scan("VOUCHER").scan("TSHIRT").scan("VOUCHER").scan("VOUCHER").scan("MUG").scan("TSHIRT").scan("TSHIRT").scan("VOUCHER")
            checkout.total().should.equal("74.50€")
        })
    })
});