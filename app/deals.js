'use strict';

const buyTake = ({price, take, buy} = {}, total) => {
    if (total >= take) {
        let over = (total % take);
        let promoted = Math.floor(total / take);
        return (promoted * buy + over) * price
    }
    return total * price;
}

const bulk = ({price, limit, bulkPrice} = {}, total) => {
    if (total >= limit) {
        return total * bulkPrice
    }
    return total * price
}

const Deals = {
    "buyTake": buyTake,
    "bulk": bulk
}

module.exports = Deals;