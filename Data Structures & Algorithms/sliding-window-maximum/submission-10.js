class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */


    maxSlidingWindow(nums, k) {
        const res = [];
        let deque = []; // this would be a deque if vanilla JS had one

        for (let i = 0; i < k; i++) {
            while (deque.length && nums[i] > nums[deque.at(-1)]) {
                deque.pop();
            }

            deque.push(i);
        }

        let left = 0,
            right = k-1;

        while (right < nums.length) {
            // console.log(deque);

            res.push(nums[deque[0]]);
            if (deque[0] === left) deque.shift();

            left++;
            right++;

            while (deque.length && nums[right] > nums[deque.at(-1)]) {
                deque.pop();
            }

            deque.push(right);
        }

        return res;
    }




    //  SOLUTION O(n * k) ------------------------

    // maxSlidingWindow(nums, k) {
    //     const res = [];

        
    //     let max;
    //     for (let i = k; i <= nums.length; i++) {
    //         if (max !== undefined && nums[i-1] >= max) {
    //             max = nums[i-1];
    //         } else if (max === undefined || nums[i-k-1] === max) {
    //             max = -Infinity;

    //             for (let j = i-k; j < i; j++) {
    //                 max = Math.max(nums[j], max);
    //             }   
    //         }

    //         res.push(max);
    //     }

    //     return res;
    // }
}
