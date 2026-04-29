class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    /*
        Input: 
        string s
        - Uppercase english chars
        - Can be empty
        - Not sorted
        - can be modified (strs are primitives)

        integer k
        - k >= 0 
        - k <= s.length

        Output:
        integer length of the longest substr with distinct chars


        Cases:
        - s="" & k=? => 0
        - s="XXX" k=0 => 1
        - s="XXX" k=2 => 3
        - s="XXX" k=3 => 3
        - s="XYYYYBB" k=1 => 3
        - s="ABCDE" k=0 => 5

        Constraints:
        - time -> O(n)
        - space -> O(m)


        Brute Force:
        Use each letter as the start of a substring
        increment a pointer checking if the current letter was already seen (set)
        when a duplications counter is > k, we found the maximum sustr with that start
        -> go to the next letter
        O(n^2) time and O(n) space

        Two Pointers:
        start and end of the sbstr
        increment end entil distinct are > k
        increment start until 1 duplicate is removed (= to k again)
        before inc start, compair current len with max 
        Map with count chars - add duplicate when map[curr] is there and is > 0
                             - remove duplicate when map[curr] was > 1 (3 -> 2; 2 -> 1)
    */
    


    // "AAABABB" => 5
    // "AABBBACC" => 

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
