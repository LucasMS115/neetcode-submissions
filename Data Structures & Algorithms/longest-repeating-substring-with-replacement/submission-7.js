class Solution {
    characterReplacement(s, k) {
        if (!s || !s.length) return 0;

        const charToCount = {};

        let start = 0,
            end = 0,
            maxRepeatingChar = s[0], 
            maxLen = 0;

        while (end < s.length) {
            const char = s[end];

            charToCount[char] = (charToCount[char] || 0) + 1;

            if (char !== maxRepeatingChar && 
                charToCount[maxRepeatingChar] < charToCount[char]) maxRepeatingChar = char;

            while (((end-start+1) - charToCount[maxRepeatingChar]) > k) {
                const removing = s[start];
                charToCount[removing] -= 1;
                
                if (removing === maxRepeatingChar) {
                    for (let char of Object.keys(charToCount)) {
                        if (charToCount[char] > charToCount[maxRepeatingChar]) {
                            maxRepeatingChar = char;
                            break;
                        }
                    }
                }

                start++;
            }
            
            maxLen = Math.max(maxLen, end-start+1);
            end++;
        }

        console.log(charToCount)
        
        return maxLen;
    }

}
