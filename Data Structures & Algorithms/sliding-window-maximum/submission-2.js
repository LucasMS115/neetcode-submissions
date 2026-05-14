class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];
        let i = 0;

        for (let i = k; i <= nums.length; i++) {
            let max = -Infinity;

            for (let j = i-k; j < i; j++) {
                max = Math.max(nums[j], max);
            }

            res.push(max);
        }

        return res;
    }
}
