const pricingRules = [
    {
        "code": "VOUCHER",
        "name": "Cabify Voucher",
        "deal": "buyTake",
        "dealProperties": {
            "price": 5,
            "take": 2,
            "buy": 1
        },
        "productDetails": "theater"

    },
    {
        "code": "TSHIRT",
        "name": "Cabify T-Shirt",
        "deal": "bulk",
        "dealProperties": {
            "price": 20,
            "limit": 3,
            "bulkPrice": 19
        },
        "productDetails": "m"
    },
    {
        "code": "MUG",
        "name": "Cafify Coffee Mug",
        "deal": null,
        "price": 7.5,
        "productDetails": "red"
    }
];

module.exports = pricingRules;