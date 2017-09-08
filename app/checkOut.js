'use strict';

import deals from "./deals"

class Checkout {
    constructor(pricingRules) {
        this.pricingRules = pricingRules
        this.scanned = new Map()
    }

    scan(item) {
        if (!this.pricingRules.some(product => product.code === item)) {
            throw new Error("Product doesn't exists")
        }
        if (this.scanned.has(item)) {
            this.scanned.set(item, this.scanned.get(item) + 1)
        } else {
            this.scanned.set(item, 1)
        }
        return this
    }

    total() {
        let total = 0
        for (let [item, totalItems] of this.scanned.entries()) {
            var product = this.pricingRules.find(product => product.code === item);
            if (product.deal != null) {
                total += deals[product.deal](product.dealProperties, totalItems)
            } else {
                total += product.price * totalItems
            }

        }
        return total.toFixed(2) + "€"
    }
}

module.exports = Checkout;