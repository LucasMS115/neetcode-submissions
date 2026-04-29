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

        let left = 0,
            right = 0,
            found = 0,
            seen = new Map(),
            res = [0, s.length-1];
        
        while (right < s.length) {
            const char = s[right];
            seen.set(char, (seen.get(char) || 0) + 1);

            // found a missing char
            if (count.get(char) && count.get(char) >= seen.get(char)) {
                found++;
            }

            // walk left
            while (left < right && !count.get(s[left]) || seen.get(s[left]) > count.get(s[left])) {
                seen.set(s[left], seen.get(s[left]) - 1);
                left++;
            }

            // update res
            if (found === t.length && (right-left) < (res[1] - res[0])) {
                res[0] = left;
                res[1] = right;
            }

            right++;
        }

        return found === t.length ? s.slice(res[0], res[1]+1) : "";
    }
}
