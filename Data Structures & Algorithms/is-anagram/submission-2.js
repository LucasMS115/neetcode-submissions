class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const sMap = new Map(),
              tMap = new Map();

        for (let i = 0; i < s.length; i++) {
            sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
            tMap.set(t[i], (tMap.get(t[i]) ?? 0) + 1);
        }

        console.log(sMap)

        for (let [char, count] of sMap) {
            if (!tMap.has(char) || tMap.get(char) !== count) return false;
        };
        
        return true;
    }
}
