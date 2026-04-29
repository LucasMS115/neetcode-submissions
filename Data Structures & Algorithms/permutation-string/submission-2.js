class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const count = {};

        // O(s1)
        for (let char of s1) {
            count[char] = (count[char] || 0) + 1;
        }

        let left = 0, 
            right = 0,
            seen = {};

        // O(s2)
        while (right < s2.length) {
            const char = s2[right];

            // reset
            if (!count[char]) {
                right++;
                left = right;
                seen = {};
                continue;
            } 

            seen[char] = (seen[char] || 0) + 1;

            // O(s2)
            while (seen[char] > count[char]) {
                seen[s2[left]] -= 1;
                left++;
            }

            if ((right-left+1) === s1.length) {
                return true;
            };

            right++;
        }

        return false;
    }
}
