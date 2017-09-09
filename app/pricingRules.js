const pricingRules = [
    {
        "code": "VOUCHER",
        "name": "Cabify Voucher",
        "price": 5,
        "deal": "buyTake",
        "dealProperties": {
            "take": 2,
            "buy": 1
        },
        "productDetails": "theater"

    },
    {
        "code": "TSHIRT",
        "name": "Cabify T-Shirt",
        "price": 20,
        "deal": "bulk",
        "dealProperties": {
            "limit": 3,
            "bulkPrice": 19
        },
        "productDetails": "m"
    },
    {
        "code": "MUG",
        "name": "Cafify Coffee Mug",
        "price": 7.5,
        "deal": null,
        "productDetails": "red"
    }
];

module.exports = pricingRules;