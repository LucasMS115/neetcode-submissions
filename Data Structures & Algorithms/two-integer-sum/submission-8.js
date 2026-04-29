class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = {};

        for (let i = 0; i < nums.length; i ++) {
            const complement = target - nums[i];

            if (numsMap[complement] !== undefined) return [numsMap[complement], i];
            
            numsMap[nums[i]] = i;
        }

        return [];
    }
}
