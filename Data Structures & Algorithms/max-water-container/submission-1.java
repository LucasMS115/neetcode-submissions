class Solution {
    public int maxArea(int[] heights) {
        int left = 0;
        int right = heights.length - 1;
        int max = 0;

        while(left < right) {
            int minHeight = Math.min(heights[left], heights[right]);
            max = Math.max(max, minHeight * (right-left));

            if (heights[left] <= heights[right]) left++;
            else right--;
        }

        return max;
    }
}
