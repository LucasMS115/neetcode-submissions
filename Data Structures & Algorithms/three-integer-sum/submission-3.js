class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    threeSum(nums) {
        const target = 0,
              sortedNums = nums.sort((a, b) => a-b),
              res = [];
        
        for (let i = 0; i < sortedNums.length; i++) {
            if (i > 0 && nums[i-1] === nums[i]) continue; 

            let left = i+1, 
                right = sortedNums.length-1; 

            while(left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--
                } else {
                    res.push([nums[i], nums[left], nums[right]]);

                    do left++
                    while (nums[left] === nums[left-1]);
                }
            }
        }

        return res;
    }
}
