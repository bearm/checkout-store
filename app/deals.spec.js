import deals from "./deals"

let chai = require('chai')
chai.should()

describe('Testing deals', () => {
    describe('BuyTake Deal', () => {
        let item = {
            "code": "VOUCHER",
            "name": "Cabify Voucher",
            "price": 5,
            "deal": "buyTake",
            "dealProperties": {
                "take": 3,
                "buy": 2
            },
            "productDetails": "theater"
        }
        it("Should return the total units per price if the total is lower than take ", () => {
            let total = 1
            deals.buyTake(item.price, item.dealProperties, total).should.equal(5)
            total = 2
            deals.buyTake(item.price, item.dealProperties, total).should.equal(10)
        })
        it("Should apply the promo if the buy and takes matches", () => {
            let total = 3
            deals.buyTake(item.price, item.dealProperties, total).should.equal(10)
        })
        it("Should apply the promo if the buy and takes matches and add the ones that doesnt match", () => {
            let total = 4
            deals.buyTake(item.price, item.dealProperties, total).should.equal(15)
        })
        it("Take can not be 0 if we want to apply the deal discount", () => {
            let total = 3
            item.dealProperties["take"] = 0
            deals.buyTake(item.price, item.dealProperties, total).should.equal(15)
        })
    })
    describe('Bulk Deal', () => {
        let item = {
            "code": "TSHIRT",
            "name": "Cabify T-Shirt",
            "price": 20,
            "deal": "bulk",
            "dealProperties": {
                "limit": 10,
                "bulkPrice": 19
            },
            "productDetails": "m"
        }
        it("Should the price per number of items if it is lower than the bulk limit", () => {
            let total = 5
            deals.bulk(item.price, item.dealProperties, total).should.equal(100)
        })
        it("Should the apply the bulk price if the number of items is bigger than the bulk limit", () => {
            let total = 20
            deals.bulk(item.price, item.dealProperties, total).should.equal(380)
        })
    })
});