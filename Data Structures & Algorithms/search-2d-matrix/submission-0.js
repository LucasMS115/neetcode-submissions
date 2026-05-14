class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    binarySearch (arr, target) {
        if (!arr || !arr.length) return false;

        let left = 0,
            right = arr.length-1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (target > arr[mid]) {
                left = mid+1;
            } else if (target < arr[mid]) {
                right = mid-1;
            } else {
                return true;
            }
        }

        return false;
    }

    searchMatrix(matrix, target) {
        if (!matrix || !matrix.length || !matrix[0].length || !(typeof target === "number")) return false;

        let targetLine = matrix.length - 1;

        while (targetLine > 0 && matrix[targetLine][0] > target) {
            targetLine--;
        }

        return this.binarySearch(matrix[targetLine], target);
    }
}
