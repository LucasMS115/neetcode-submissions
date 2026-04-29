class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums);
        let max = 0;

        for (let num of nums) {
            if (!numsSet.has(num-1)) {
                let count = 1;
                while(numsSet.has(num+count)) count++;

                max = Math.max(max, count);
            };
        }

        return max;
    }
}
