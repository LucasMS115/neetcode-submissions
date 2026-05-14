class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */

/*
        The main idea of this solution is that, for each visited place, you only need to know the minimum 
        between left and right, because it will limit the amount of water trapped anyways. So, for left, you
        guarantee you have the max height of your left, and for right, you guarantee you've seem the max at the right.
        Therefore, you always walk the pointer with the minor max value, and you only calculate the area when the min between
        the max values is at the side you are looking at, the one you can guarantee is the maximum at that side.
    */
    // O(n) time; O(1) space
    trap(height) {
        if (!height || height.lenth < 3) return 0;

        let left = 0,
            right = height.length-1,
            maxLeft = 0,
            maxRight = 0,
            trapCapacity = 0;

        while (left <= right) {
            if (maxLeft <= maxRight) {
                let area = Math.min(maxLeft, maxRight) - height[left];
                trapCapacity += area > 0 ? area : 0;
                maxLeft = Math.max(maxLeft, height[left]);
                left++;
            } else {
                let area = Math.min(maxLeft, maxRight) - height[right];
                trapCapacity += area > 0 ? area : 0;
                maxRight = Math.max(maxRight, height[right]);
                right--;
            }
        }

        return trapCapacity;
    }
    
    // trap(height) {
    //     if (height < 3) return 0; 
    //     let left = 0, right = 1;

    //     let stagingWater = 0,
    //         commitedWater = 0;

    //     // staging  = 8
    //     // commited = 0
    //     // left = 0
    //     // right = 1
    //     while (right < height.length) {
    //         const leftWall = height[left],
    //               rightWall = height[right];

    //         // commit water
    //         if (rightWall > height[right-1]) {
    //             if (rightWall >= leftWall) {
    //                 commitedWater += stagingWater;
    //                 stagingWater = 0;
    //             } else {
    //                 const diff = (leftWall-rightWall) * (right-left-1); //6
    //                 const committingWater = Math.abs(stagingWater - diff);
    //                 commitedWater += committingWater;
    //                 stagingWater -= committingWater;
    //             }
    //         }

    //         // add staging water
    //         if (leftWall > rightWall) {
    //             stagingWater += (leftWall-rightWall);
    //         }

    //         // update left
    //         if (rightWall >= leftWall) left = right;

    //         // update right
    //         right++;
    //     }

    //     return commitedWater;
    // }
}