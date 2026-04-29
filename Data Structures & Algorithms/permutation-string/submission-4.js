class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    // O(n + m) time & O(1) space - n = s1.length, m = s2.length
    checkInclusion(s1, s2) {
        const count = new Map();

        // O(s1)
        for (let char of s1) {
            count.set(char, (count.get(char) || 0) + 1);
        }
        console.log(count)

        let left = 0, 
            right = 0,
            seen = new Map(); // O(26) space

        // O(s2 + s2) => O(s2) time
        while (right < s2.length) {
            const char = s2[right];

            // reset
            if (!count.get(char)) {
                right++;
                left = right;
                seen.clear();
                continue;
            } 

            seen.set(char, (seen.get(char) || 0) + 1);

            // O(s2)
            while (seen.get(char) > count.get(char)) {
                seen.set(s2[left], seen.get(s2[left]) - 1);
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
