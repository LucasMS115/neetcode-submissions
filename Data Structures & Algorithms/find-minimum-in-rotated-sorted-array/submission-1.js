class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    findMin(nums) {
        let left = 0,
            right = nums.length-1;

        while (left <= right) {
            const mid = Math.floor((left+right)/2);

            if (nums[left] <= nums[mid] && nums[left] <= nums[right]) return nums[left]; //fully sorted

            if (mid > 0 && nums[mid-1] > nums[mid]) return nums[mid];

            if (nums[mid] > nums[right]) left = mid+1;
            else right = mid-1;
        }
    }
}
