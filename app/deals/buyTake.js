const buyTake = (price, {take, buy} = {}, total) => {
    if (total >= take && take != 0) {
        let over = (total % take);
        let promoted = Math.floor(total / take);
        return (promoted * buy + over) * price
    }
    return total * price;
}

module.exports = buyTake;