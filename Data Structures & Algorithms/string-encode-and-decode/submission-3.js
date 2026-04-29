class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // O(C) time and space
    encode(strs) {
        const strsToJoin = []; // O(C) space, where C is the number of chars in strs

        // O(S) time, where s is the number of strings
        for (let str of strs) {
            strsToJoin.push(`${str.length}+`);
            strsToJoin.push(str);
        }

        return strsToJoin.join(""); // O(C)
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // O(C) time && O(C) space
    decode(str) {
        const decoded = []; //O(C) space

        // O(C) time && O(C) space
        for (let i = 0; i < str.length; i++) {
            let countStrDigts = [];
            while(str[i] !== '+' && i < str.length) { // O(d << s) time and space, where d is the number of digits in the string size 
                countStrDigts.push(str[i]);
                i++;
            }
            
            const charsCount = parseInt(countStrDigts.join("")), // O(d << s) time
                  endIndex = i+charsCount,
                  chars = [];  // O(s) space, where s is the medium string size

            for (let c = i+1; c <= endIndex; c++) { // O(s) time
                chars.push(str[c]);
            }

            i += parseInt(charsCount);
            
            decoded.push(chars.join("")); // O(s) time
        }

        return decoded;
    }
}
