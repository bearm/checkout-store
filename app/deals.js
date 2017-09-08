'use strict';

import buyTake from './deals/buyTake'
import bulk from './deals/bulk'

const Deals = {
    "buyTake": buyTake,
    "bulk": bulk
}

module.exports = Deals;