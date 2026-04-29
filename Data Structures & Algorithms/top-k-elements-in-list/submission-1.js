class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {}, //O(n) space
              countBuckets = new Array(nums.length+1).fill(null), //O(n) space
              res = []; //O(n) space

        // O(n), n = nums.length
        for (let num of nums) {
            countMap[num] = (countMap[num] || 0) + 1; 
        }

        // O(n), n = nums.length in the worst case (everyone is different)
        for (let num of Object.keys(countMap)) {
            const count = countMap[num];

            if (!countBuckets[count]) countBuckets[count] = [num];
            else countBuckets[count].push(num);
        }

        // O(n)
        for (let i = countBuckets.length-1; i >= 0; i--) {
            const currentList = countBuckets[i];

            if (!currentList) continue;

            while (currentList.length) {
                res.push(currentList.pop());
                
                if (res.length === k) return res;
            }
        }

        return res;
    }
}
