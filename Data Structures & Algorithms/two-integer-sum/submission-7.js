class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = {};
        let res;

        for(let i = 0; i < nums.length; i++) {
            numsMap[nums[i]] = numsMap[nums[i]] || [];
            numsMap[nums[i]].push(i);
        }

        for(let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if (numsMap[complement] !== undefined) {
                let complementIdxs = numsMap[complement];

                if (complementIdxs[0] < i) res = [complementIdxs[0], i];
                else if (complementIdxs[0] > i) res = [i, complementIdxs[0]];
                else {
                    const complementIdx = complementIdxs[1];

                    if (complementIdx < i) res = [complementIdx, i];
                    else res = [i, complementIdx];
                }
            }
        }

        return res;
    }
}
