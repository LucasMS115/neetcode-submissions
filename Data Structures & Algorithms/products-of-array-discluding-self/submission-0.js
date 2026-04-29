class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = [];

        let current = 1;
        for (let num of nums) {
            res.push(current);
            current *= num;
        }

        current = 1;
        for (let i = nums.length-1; i >= 0; i--) {
            res[i] = res[i] * current;
            current *= nums[i];
        }

        return res;
    }

    /*
    const empty = [];
    const one = [10]
    const two = [10, 20]
    const alternate = [2, 3, -3, 5, -1]
    const zeros = [0, 10, 3, 1]

    empty => []
    one => [1]
    two => [20, 10]
    alternate => [45, 30, -30, 18, -90]
    zeros => [30, 0, 0, 0]

    */
}
