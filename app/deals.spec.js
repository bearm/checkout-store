import deals from "./deals"

let chai = require('chai')
chai.should()

describe('Testing deals', () => {
    describe('BuyTake Deal', () => {
        it("Should return the 5 for a total number of 2", () => {
            let item = {
                "code": "VOUCHER",
                "name": "Cabify Voucher",
                "deal": "buyTake",
                "dealProperties": {
                    "price": 5,
                    "take": 2,
                    "buy": 1
                },
                "productDetails": "theater"
            }
            let total = 2
            deals.buyTake(item.dealProperties, total).should.equal(5)
        })
    })
    describe('Bulk Deal', () => {
        it("Should return the 5 for a total number of 2", () => {
            let item = {
                "code": "TSHIRT",
                "name": "Cabify T-Shirt",
                "deal": "bulk",
                "dealProperties": {
                    "price": 20,
                    "limit": 3,
                    "bulkPrice": 19
                },
                "productDetails": "m"
            }
            let total = 4
            deals.bulk(item.dealProperties, total).should.equal(76)
        })
    })
});