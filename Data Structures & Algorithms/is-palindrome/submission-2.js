class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    /*
    
    Input: String
    Output: boolean

    Input is made up of only printable ASCII characters.
    1 <= s.length <= 1000
    Solution in O(n) time and O(1) space

    Casing? don't matter
    ""
    null / undefined
    only ascii
    ignore non letter chars

    const empty = ""; => true
    const oneWordTrue = "lol"; => true
    const oneWordFalse = "bol"; => bol
    const casing = "Lol" => true
    const multipleWordsTrue = "Was it a car or a cat I saw?"; => true
    const multipleWordsFalse = "Was it a car or a cat I lol?"; => false

    */

    isLetter(char) {
        const base = 'a'.charCodeAt(0),
              limit = 'z'.charCodeAt(0),
              val = char.charCodeAt(0);

        return base <= val && val <= limit;
    }

    isDigit(char) {
        const base = '0'.charCodeAt(0),
              limit = '9'.charCodeAt(0),
              val = char.charCodeAt(0);

        return base <= val && val <= limit;
    }

    isValid(char) {
        return this.isLetter(char) || this.isDigit(char);
    }

    alphanuricChars(s) {
        let chars = s.toLowerCase().split('').filter(char => this.isValid(char));

        return chars;
    }

    isPalindrome(s) {
        const chars = this.alphanuricChars(s);
        
        return chars.join('') === chars.reverse().join('');
    }
}
