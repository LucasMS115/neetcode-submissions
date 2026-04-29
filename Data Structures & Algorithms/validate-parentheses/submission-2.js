class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            '[' : ']',
            '{' : '}',
            '(' : ')'
        }

        const stack = [];

        for (let char of s) {
            if (pairs[char]) {
                stack.push(char);
            } else {
                const pair = pairs[stack.pop()];

                if (pair !== char) return false;
            }
        }

        return !stack.length;
    }
}
