class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> complements = new HashMap();

        for (int i = 0; i < nums.length; i++) {
            if (complements.get(nums[i]) == null) {
                complements.put(nums[i], i);
            }
        }

        int[] res = {};

        for (int i = 0; i < nums.length; i++) {
            int val = nums[i];
            Integer compIdx = complements.get(target - val);

            if (compIdx != null && i != compIdx) {
                if (i < compIdx) return new int[] {i, compIdx};
                else return new int[] {compIdx, i}; 
            }
        }

        return new int[] {};
    }
}
