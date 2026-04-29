class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let res = 0,
            seen = new Set();

        let start = 0, end = 0;

        while (end < s.length) {
            const char = s[end];
            
            while (seen.has(char)) {
                seen.delete(s[start]);
                start++;
            }

            seen.add(char);
            res = Math.max(res, seen.size);
            end++;
        }

        return res;
    }
}
