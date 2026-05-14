class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    minEatingSpeed(piles, h) {
        // target => min rate where hours to eat is <= h
        // binary search with rate K as space of search

        let right = Math.max(...piles); // rate = max pile makes hours = num piles
        let left = 1; // min rate, lead to hours = num bananas
        let minRate = right; // should store the minimum rate to have hours < h

        while (left <= right) { // rate k as space, runs log(maxPile) times
            const midRate = Math.floor((left+right) / 2);
            const hoursToEat = this.calcHours(piles, midRate);

            if (hoursToEat <= h) { // satisfies the condition   
               minRate = Math.min(minRate, midRate);
               right = midRate-1;
            } else {
                left = midRate+1
            }
        }

        return minRate;
    }

    // O(n)
    calcHours(piles, k) {
        return piles.reduce((acc, curr) => {
            return acc += Math.ceil(curr/k);
        }, 0);
    }

}
