class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */

/*
    Input: arr of int & int target
    Output: arr of int [n1, n2] - 1 based index

    Input: 
    - arr can have 0s and negative numbers
    - target also
    - arr is sorted asc
    - data is always valid
    
    Output:
    - output is sorted decreasing 

    Edge Cases:

    input
    - empty -> []
    - [1] -> []

    output
    - cannot use the same element twice

    problem
    - always have a valid sum to target
    - always only one valid solution

*/

    twoSum(numbers, target) {
       if (!numbers || numbers.length < 2) {
            return [];
        }

        let left = 0, 
            right = numbers.length - 1;

        while (left < right) {
            const sum = numbers[left] + numbers[right];
            console.log(sum)

            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return [left+1, right+1];
            }
        }
    }
    
}

// function twoSum(numbers, target) {
//     if (!numbers || numbers.length < 2) {
//         return [];
//     }

//     let left = 0, 
//         right = numbers.length - 1;

//     while (left < right) {
//         const sum = numbers[left] + numbers[right];

//         if (sum < target) {
//             right--;
//         } else if (sum > target) {
//             left++;
//         } else {
//             return [left+1, right+1];
//         }
//     }
// }

// const n1 = [];
// const t1 = 1;

// const n2 = [1];
// const t2 = 1;

// const n3 = [1, 0];
// const t3 = 1; //[1,2]

// const n4 = [5, 0, -1, -2];
// const t4 = 4; //[2,4]

// console.log(twoSum(n1, t1));
// console.log(twoSum(n2, t2));
// console.log(twoSum(n3, t3));
// console.log(twoSum(n4, t4));

