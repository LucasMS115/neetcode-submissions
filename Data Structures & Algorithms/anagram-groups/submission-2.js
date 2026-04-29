class Solution {
    /*
    input: array de strings
    output: matriz de strings (colunas variável)
    
    Casos:
    - null 
    - []
    - [1 ,2 , 4]
    - ["", ""]
    - ["", "aba"]
    - [" ", " "]
    - [" ", "aba"]
    - ["#$%", "sdf#", "2"]
    - ["😅", "asdf"]
    - ["a", "b", "c"]
    - ["a", "a", "c"]
    - ["asd", "bsd", "csd"]
    - ["aba", "baa", "aab"]
    - ["aba", "baa", "aab", "casa", "saca", "done"]
    - ["ABA", aba, "baa", "AAB"] 

    Vamos tratar:
    - [] => [[]]
    - ["", ""] => [[""]]
    - ["", "aba"] => [[""], ["aba"]]
    - ["a", "b", "c"] => [["a"], ["b"], ["c"]]
    - ["a", "a", "c"] => [["a", "a"], ["c"]]
    - ["aba", "baa", "aab"] => [["aba", "baa", "aab"]]
    - ["aba", "baa", "aab", "casa", "saca", "done"] => [["aba", "baa", "aab"], ["casa", "saca"], ["done"]]
    - ["ABA", aba, "baa", "AAB"] =>  [["aba", "baa"], ["ABA", "AAB"]]

    1. criar um map onde a chave é a string ordenada, usar esse map pra ver o grupo de cada string
    O(ns.logs) tempo e O(ns) de espaço extra

    */

    charCount(word) {
        const count = new Array(27).fill(0),
              base = 'a'.charCodeAt(0);

        for (const char of word) {
            const currentIdx = char.charCodeAt(0) - base;
            count[currentIdx] += 1;
        }

        return count;
    }

    groupAnagrams(strs) {
        // Input: arr of strs (not sorted - case don't matter, always lower, always letters)
        // Output: matrix of strs (any order)

        // Ivalid inputs? no
        // Empty lists => [[]]

        // anagram => diff words, same letters

        // brute force => for each word, check all other words if they are anagrams O(n*m ^ 2) O(1)
        // words are anagrams if they have the same letters in the same qt

        // bucket count O(n*m) O(n)
        // [0, 0, ..., 0]

        const anagramsMap = {};

        for (const str of strs) {
            const groupKey = this.charCount(str);

            if (!anagramsMap[groupKey]) anagramsMap[groupKey] = [];
            anagramsMap[groupKey].push(str);
        }

        const res = [];
        for (const group of Object.values(anagramsMap)) {
            res.push(group);
        } 

        return res;
    }

    //v1
    // groupAnagrams(strs) {
    //     if(!strs.length) return [[]];

    //     const groups = {};

    //     for (let str of strs) {
    //         const sortedStr = str.split("").sort().join(""); //slogs
    //         const group = groups[sortedStr];

    //         if(!group) groups[sortedStr] = [str];
    //         else groups[sortedStr].push(str);
    //     }

    //     return Array.from(Object.values(groups));
    // }

    // countChars(string) { //O(s) time and O(1) space
    //     let count = new Array(30).fill(0);
    //     const base = 'a'.charCodeAt(0);

    //     for (let i = 0; i < string.length; i++) {
    //         let index = string.charCodeAt(i) - base;
    //         count[index] += 1;
    //     }

    //     return count;
    // }

    // //v2
    // groupAnagrams(strs) {
    //     if(!strs.length) return [[]];

    //     const groups = {};

    //     //O(ns)
    //     for (let str of strs) { //O(n)
    //         const key = this.countChars(str); //O(s)
    //         const group = groups[key];

    //         if(!group) groups[key] = [str];
    //         else groups[key].push(str);
    //     }

    //     return Array.from(Object.values(groups)); //O(n)
    // }
}
