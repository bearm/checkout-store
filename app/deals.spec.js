import deals from "./deals"

let chai = require('chai')
chai.should()

describe('Testing deals', () => {
    describe('BuyTake Deal', () => {
        let item = {
            "code": "VOUCHER",
            "name": "Cabify Voucher",
            "deal": "buyTake",
            "dealProperties": {
                "price": 5,
                "take": 3,
                "buy": 2
            },
            "productDetails": "theater"
        }
        it("Should return the total units per price if the total is lower than take ", () => {
            let total = 1
            deals.buyTake(item.dealProperties, total).should.equal(5)
            total = 2
            deals.buyTake(item.dealProperties, total).should.equal(10)
        })
        it("Should apply the promo if the buy and takes matches", () => {
            let total = 3
            deals.buyTake(item.dealProperties, total).should.equal(10)
        })
        it("Should apply the promo if the buy and takes matches and add the ones that doesnt match", () => {
            let total = 4
            deals.buyTake(item.dealProperties, total).should.equal(15)
        })
    })
    describe('Bulk Deal', () => {
        let item = {
            "code": "TSHIRT",
            "name": "Cabify T-Shirt",
            "deal": "bulk",
            "dealProperties": {
                "price": 20,
                "limit": 10,
                "bulkPrice": 19
            },
            "productDetails": "m"
        }
        it("Should the price per number of items if it is lower than the bulk limit", () => {
            let total = 5
            deals.bulk(item.dealProperties, total).should.equal(100)
        })
        it("Should the apply the bulk price if the number of items is bigger than the bulk limit", () => {
            let total = 20
            deals.bulk(item.dealProperties, total).should.equal(380)
        })
    })
});