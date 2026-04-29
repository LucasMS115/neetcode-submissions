class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const strsToJoin = [];

        for (let str of strs) {
            strsToJoin.push(`${str.length}+`);
            strsToJoin.push(str);
        }

        return strsToJoin.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];

        for (let i = 0; i < str.length; i++) {
            let countStrDigts = [];
            while(str[i] !== '+' && i < str.length) {
                countStrDigts.push(str[i]);
                i++;
            }
            
            const charsCount = parseInt(countStrDigts.join("")),
                  endIndex = i+charsCount,
                  chars = [];

            console.log(charsCount)
            for (let c = i+1; c <= endIndex; c++) {
                chars.push(str[c]);
            }

            i += parseInt(charsCount);
            
            decoded.push(chars.join(""));
        }

        return decoded;
    }
}
