const bulk = (price, {limit, bulkPrice} = {}, total) => {
    if (total >= limit) {
        return total * bulkPrice
    }
    return total * price
}

module.exports = bulk;