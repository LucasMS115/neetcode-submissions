class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];
        let i = 0;

        // O(n * k)
        let max;

        for (let i = k; i <= nums.length; i++) {
            if (max !== undefined && nums[i-1] >= max) {
                max = nums[i-1];
            } else if (max === undefined || nums[i-k-1] === max) {
                max = -Infinity;

                for (let j = i-k; j < i; j++) {
                    max = Math.max(nums[j], max);
                }   
            }

            res.push(max);
        }

        return res;
    }
}
