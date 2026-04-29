class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    countChars(str) {
        const count = new Array(27).fill(0);
        const base = 'a'.charCodeAt(0);

        for (let char of str) {   
            count[char.charCodeAt(0) - base] += 1;
        }

        return count;
    }

    groupAnagrams(strs) {
        const res = []
        const groups = {};

        for (let str of strs) {
            const groupKey = this.countChars(str); // O(s), s is the size of the string
            groups[groupKey] = groups[groupKey] || [];
            groups[groupKey].push(str);
        }

        for (let group of Object.values(groups)) {
            res.push(group);
        }

        return res;
    }
}
