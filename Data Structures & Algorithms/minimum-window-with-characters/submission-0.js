class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const count = new Map();

        for (let char of t) {
            count.set(char, (count.get(char) || 0) + 1);
        }
        console.log(count);

        let left = 0,
            right = 0,
            found = 0,
            seen = new Map(),
            res = s;
        
        while (right < s.length) {
            const char = s[right];
            seen.set(char, (seen.get(char) || 0) + 1);

            // found a missing char
            if (count.get(char) && count.get(char) >= seen.get(char)) {
                found++;
            }

            // walk while sbstr 
            while (left <= right && (!count.get(s[left]) || seen.get(s[left]) > count.get(s[left]))) {
                seen.set(s[left], seen.get(s[left]) - 1);
                left++;
            }

            if (found === t.length && (right-left+1) < res.length) {
                res = s.slice(left, right+1);
            }

            right++;
        }

        return found === t.length ? res : "";
    }
}
