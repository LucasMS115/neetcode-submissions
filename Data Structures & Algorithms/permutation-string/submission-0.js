class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const count = {};

        for (let char of s1) {
            count[char] = (count[char] || 0) + 1;
        }

        let left = 0, 
            right = 0,
            seen = {};

        while (right < s2.length) {
            const char = s2[right];
            console.log(`left: ${left} - right: ${right}`);
            console.log(seen);

            if (!count[char]) {
                left = right+1;
                seen = {};
                right++;
                continue;
            } 

            seen[char] = (seen[char] || 0) + 1;

            console.log(`seen[char]: ${seen[char]} - count[char]: ${count[char]}`);
            while (seen[char] && seen[char] > count[char]) {
                const removing = s2[left];

                seen[removing] -= 1;
                left++;
            }

            console.log(`left: ${left} - right: ${right}`);
            if ((right-left+1) === s1.length) return true;
            right++;
        }

        return false;
    }
}
