class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (!prices || prices.length < 2) return 0;

        let max = 0,
            buy = prices[0];

        for (let i = 1; i < prices.length; i++) {
            const price = prices[i];

            if (price < buy) buy = price;
            else max = Math.max(max, price-buy);
        }

        return max;
    }
}

