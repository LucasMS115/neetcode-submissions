class TrieNode{
    constructor() {
        this.children = {}; //{char: node}
        this.wordEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }


    addWord(word) {
        //validations
        let curr = this.root;

        for (let char of word) {
            if (curr.children[char]) {
                curr = curr.children[char];
            } else {
                curr.children[char] = new TrieNode();
                curr = curr.children[char];
            }
        }

        curr.wordEnd = true;

        return null;
    }


    search(word, idx = 0, startNode = this.root) {
        const WILDCCARD = '.';
        let curr = startNode;

       for (let i = idx; i < word.length; i++) {
            const char = word[i];

            if (char === WILDCCARD) {
                for (let child of Object.values(curr.children)) {
                    if (this.search(word, i+1, child)) return true;
                }

                return false;
            }
            
            if (!curr.children[char]) return false;
            curr = curr.children[char];
       }

       return curr.wordEnd;
    }
}

/*

Set(words) O(n*S) space
add -> add to set O(1)
search -> for each word, compare each letter with the target word's letters. O(n*S) 

Trie  O(27^h) << O(n*S)
add -> O(S) 
search -> O(S) - how the . affects the complextity? O(27^h) << O(n*S)

*/


// const wordDictionary = new WordDictionary();


// console.log(wordDictionary.search("")) // true
// console.log(!wordDictionary.search(".")) // false
// console.log(!wordDictionary.search("a")) // false

// console.log(wordDictionary.addWord("a")) // null
// console.log(wordDictionary.search(".")) // true
// console.log(wordDictionary.search("a")) // true
// console.log(!wordDictionary.search("b")) // false

// console.log(wordDictionary.addWord("bol")) // null
// console.log(wordDictionary.addWord("botton")) // null

// console.log(wordDictionary.search("bol")) // true
// console.log(wordDictionary.search("botton")) // true
// console.log(!wordDictionary.search("bottan")) // false
// console.log(!wordDictionary.search("bott")) // false
// console.log(wordDictionary.search(".o.")) // true
// console.log(wordDictionary.search("bo..on")) // true

// console.log(!wordDictionary.search("bo.on")) // false
// console.log(!wordDictionary.search("bott.")) // false

// console.log(!wordDictionary.search("..")) // false
// console.log(wordDictionary.search("...")) // true
// console.log(!wordDictionary.search("....")) // false







// class Node {
//     constructor() {
//         this.children = {};
//         this.wordEnd = false;
//     }
// }

// class WordDictionary {
//     constructor() { //O(1)
//         this.root = new Node(); // cresce linearmente, com n <= 27 nos filhos de cada nó (O(1)) 
//     }

//     // O(s) time and memory
//     addWord(word) {
//         let currentNode = this.root;

//         //O(s), s = len(word) 
//         for (let char of word) {
//             //O(1)
//             if (currentNode.children[char] === undefined) {
//                 currentNode.children[char] = new Node();
//             } 

//             currentNode = currentNode.children[char];
//         }

//         currentNode.wordEnd = true;
//     }

//     // Time: O(s) without '.', O(26^s) in worst case with wildcards
//     // Space: O(s) recursion depth
//     search(word, start = 0, startingNode = this.root) {
//         let currentNode = startingNode;

//         for (let i = start; i < word.length; i++) { // runs s times
//             let char = word[i];

//             if (char === '.') {
//                 for (let key of Object.keys(currentNode.children)) { // runs len ({a, b, ..., z, .}) === C => O(1);
//                     if (this.search(word, i+1, currentNode.children[key])) return true; // runs s times => O(s) memory
//                 }
//                 return false;
//             }

//             if (currentNode.children[char] === undefined) return false; 
//             currentNode = currentNode.children[char];
//         }

//         return currentNode && currentNode.wordEnd;
//     }
// }
