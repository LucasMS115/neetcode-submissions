class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set(nums);
        return numsSet.size !== nums.length;
    }
}
